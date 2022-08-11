import { SharedCommand } from "@otterbots/sapphire-components"
import { ApplyOptions } from '@sapphire/decorators';
import type { CommandOptions, ApplicationCommandRegistry } from '@sapphire/framework';
import type { CommandInteraction } from 'discord.js';
import { webhookSubmit } from '../lib/webhookSubmit';

@ApplyOptions<CommandOptions>({
	description: 'Close a ticket!',
	preconditions: ['SupportOnly']
})
export class UserCommand extends SharedCommand {
	public chatInputRun(interaction: CommandInteraction) {
		(async () => {
			await interaction.channel?.delete()
			webhookSubmit("RED", `Closed a ticket!\n${await this.container.db.get("current_ticket")} tickets left! (Might be broken.)`)
		})();
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
