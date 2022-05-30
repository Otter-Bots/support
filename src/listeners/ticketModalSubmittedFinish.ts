import { ApplyOptions } from '@sapphire/decorators';
import { Listener, ListenerOptions } from '@sapphire/framework';
import { webhookSubmit } from '../lib/webhookSubmit';

@ApplyOptions<ListenerOptions>({
  event: "ticketModalSubmittedFinish"
})
export class UserEvent extends Listener {
  public async run(content: any) {   
      this.container.db.add("current_ticket", 1)
      webhookSubmit("GREEN", `Ticket Query: ${content}`)
  }
}
