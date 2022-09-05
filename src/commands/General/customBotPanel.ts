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
			new MessageButton()
			.setCustomId("info")
			.setLabel("Info")
			.setStyle("SUCCESS"),
		)
		const embed = new MessageEmbed()
		.setColor("GREEN")
		.setDescription("**Want a custom bot?**\nIf you would like to order a custom bot, please open a ticket by clicking the first button below and our support team will get back to you as soon as possible.")
		message.channel.send({ embeds: [embed], components: [row]})
	}
}
