import { ApplyOptions } from '@sapphire/decorators';
import { Listener, ListenerOptions } from '@sapphire/framework';
import type { Interaction } from 'discord.js';
import db from "quick.db"

@ApplyOptions<ListenerOptions>({
  event: "interactionCreate"
})
export class UserEvent extends Listener {
  public async run(interaction:  Interaction) {
    const client = this.container.client;
    try {
      if (!interaction.isModalSubmit()) return
      if (interaction.customId !== "ticketOpenModal") return
      const guildId: any = interaction.guildId;
      const userId: any = interaction.user.id;
      const content = interaction.fields.getTextInputValue('ticketOpenContent')
      const channel = await interaction.guild?.channels.create(`Ticket-${db.get("ticket_num")}`).catch((e) => console.log(e));
      channel?.setParent("980455525537972274")
      channel?.permissionOverwrites.edit(guildId, { VIEW_CHANNEL: false });
      channel?.permissionOverwrites.edit(userId, { VIEW_CHANNEL: true});
      db.add("ticket_num", 1)
      channel?.send(`Query:\n${content}`)
      interaction.reply({content: "Done!", ephemeral: true})
      client.emit("ticketModalSubmittedFinish", content)
    } catch (e) {
      client.emit("ticketModalSubmittedError", e)
    }
  }
}
