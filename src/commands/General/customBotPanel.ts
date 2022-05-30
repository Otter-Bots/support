import { ApplyOptions } from '@sapphire/decorators';
import type { CommandOptions} from '@sapphire/framework';
import { SharedCommand } from '@otterbots/sapphire-components';
import { Message, MessageActionRow, MessageButton, MessageEmbed } from 'discord.js';

@ApplyOptions<CommandOptions>({
	description: 'A basic command',
	preconditions: ['OwnerOnly']
})
export class UserCommand extends SharedCommand {
	public async messageRun(message: Message) {
		const row = new MessageActionRow()
		.addComponents(
			new MessageButton()
			.setCustomId("ticketOpenButton")
			.setLabel("Open a Ticket")
			.setStyle("SUCCESS"),
		)
		const embed = new MessageEmbed()
		.setColor("GREEN")
		.setDescription("**Want a custom bot?**\nOpen a ticket by clicking the first button and our team will reply as soon as possible! We'd appreciate it if you could go into much detail about the bot you want.")
		message.channel.send({ embeds: [embed], components: [row]})
	}
}
