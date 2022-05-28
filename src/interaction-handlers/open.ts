import { InteractionHandler, InteractionHandlerTypes, PieceContext } from '@sapphire/framework';
import { ButtonInteraction, MessageActionRow, ModalActionRowComponent, TextInputComponent } from 'discord.js';
const { Modal } = require('discord.js');

export default class extends InteractionHandler {
	public constructor(ctx: PieceContext) {
		super(ctx, { interactionHandlerType: InteractionHandlerTypes.Button });
	}

	public async parse(interaction: ButtonInteraction) {
		if (interaction.customId !== 'ticketOpenButton') return this.none();
		return this.some();
	}

	public async run(interaction: ButtonInteraction) {
        const modal = new Modal()
        .setCustomId('ticketOpenModal')
        .setTitle('Open Ticket');
        const content = new TextInputComponent()
        .setCustomId('ticketOpenContent')
        .setLabel("What do you need help with?")
        .setStyle("PARAGRAPH");
        const firstActionRow = new MessageActionRow<ModalActionRowComponent>().addComponents(content);
        modal.addComponents(firstActionRow)
        interaction.showModal(modal);
    }
}