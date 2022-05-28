import { ApplyOptions } from '@sapphire/decorators';
import { CommandOptions, Command, ApplicationCommandRegistry } from '@sapphire/framework';
import type { CommandInteraction } from 'discord.js';
import db from "quick.db"
import { webhookSubmit } from '../lib/webhookSubmit';

@ApplyOptions<CommandOptions>({
	description: 'Close a ticket!',
	preconditions: ['SupportOnly']
})
export class UserCommand extends Command {
	public chatInputRun(interaction: CommandInteraction) {
		interaction.channel?.delete()
		db.subtract("current_ticket", 1)
		this.container.client.user?.setActivity(`${db.get("current_ticket")} tickets`, {
			type: "WATCHING"
		})
		webhookSubmit("RED", `Closed a ticket!\n${db.get("current_ticket")} ticket's left`)
	}
	public override registerApplicationCommands(registry: ApplicationCommandRegistry) {
		registry.registerChatInputCommand(
			{
				name: this.name,
				description: this.description
			},
			{
				guildIds: ['974626194379124736'],
				idHints: ['979994744807620688']
			}
		);
	}
}
