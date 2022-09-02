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
        interaction.reply({content: "**Otter Bots Commissions**\nYou can commission us to create and host a bot or website for you. Below are Frequently Asked Questions about commissions. \n\n**What do I do once I have opened a ticket?**\n Tell us what kind of bot you want (moderation, utility, etc) and provide a command list (a list of all commands you want the bot to have.\n\n**What is the price?**\n The price will vary on the type of bot and how big the bot is.\n\n**Where will the bot/website be hosted and will I be able to see the code?**\n The bot is hosted on a private VPS, and our uptime can be found at https://status.otterbots.xyz. As for seeing the code, all of the code for our commissions are in private repositories at https://github.com/Otter-Bots-Commissions. If you would like to see the code, we would be happy to either send it to you or give you access to the repository.", ephemeral: true})
    }
}
