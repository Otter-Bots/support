import { ApplyOptions } from '@sapphire/decorators';
import { Listener, ListenerOptions } from '@sapphire/framework';
import { webhookSubmit } from '../lib/webhookSubmit';

@ApplyOptions<ListenerOptions>({
  event: "ticketModalSubmittedFinish"
})
export class UserEvent extends Listener {
  public async run(content: any) {
    console.log("Test")    
      this.container.db.add("current_ticket", 1)
      console.log(await this.container.db.get("current_ticket"))
      webhookSubmit("GREEN", `Ticket Query: ${content}`)
      this.container.client.user?.setActivity(`${await this.container.db.get("current_ticket")} tickets`, {
        type: "WATCHING"
      })
  }
}
