import { InteractionHandler, InteractionHandlerTypes, PieceContext } from '@sapphire/framework';
import type { ButtonInteraction } from 'discord.js';

export default class extends InteractionHandler {
    public constructor(ctx: PieceContext) {
        super(ctx, { interactionHandlerType: InteractionHandlerTypes.Button });
    }

    public async parse(interaction: ButtonInteraction) {
        if (interaction.customId !== 'info') return this.none();
        return this.some();
    }

    public async run(interaction: ButtonInteraction) {
        interaction.reply({content: "Otter Bots Commissions\nYou can commission us to create and host a bot/website for you.\n\nWhat do I do once I have opened a ticket?\n• Tell us what kind of bot you want (moderation, utility, etc)\n• Provide a command list (a list of all commands you want the bot to have.\n• Have patience and don't spam @mentions, opening a ticket already notifies us.", ephemeral: true})
    }
}
