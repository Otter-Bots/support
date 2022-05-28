import { ApplyOptions } from '@sapphire/decorators';
import { Listener, ListenerOptions } from '@sapphire/framework';
import { webhookSubmit } from '../lib/webhookSubmit';
import db from "quick.db"

@ApplyOptions<ListenerOptions>({
  event: "ticketModalSubmittedFinish"
})
export class UserEvent extends Listener {
  public run(content: any) {
    db.add("current_ticket", 1)
    webhookSubmit("GREEN", `Ticket Query: ${content}`)
    this.container.client.user?.setActivity(`${db.get("current_ticket")} tickets`, {
      type: "WATCHING"
    })
  }
}
