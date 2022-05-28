import { ColorResolvable, MessageEmbed, WebhookClient } from "discord.js"

export function webhookSubmit(colour: ColorResolvable, msg: any) {
    const WebhookUrl: any = process.env.TICKET_LOG_WEBHOOK
    const client = new WebhookClient({url: WebhookUrl})
    const embed = new MessageEmbed()
    .setTitle("Ticket Log")
    .setDescription(msg)
    .setColor(colour)
    client.send({
        embeds: [embed]
    })
}