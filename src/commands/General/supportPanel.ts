import { ApplyOptions } from '@sapphire/decorators';
import { SharedCommand } from '@otterbots/sapphire-components';
import type { CommandOptions} from '@sapphire/framework';
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
			new MessageButton()
			.setCustomId("rules")
			.setLabel("Rules")
			.setEmoji("978705745300308058")
			.setStyle("SECONDARY")
		)
		const embed = new MessageEmbed()
		.setColor("GREEN")
		.setDescription("**Support Desk**\nOpen a support ticket by clicking the first button and our support team will get back to you as soon as possible.")
		message.channel.send({ embeds: [embed], components: [row]})
	}
}
