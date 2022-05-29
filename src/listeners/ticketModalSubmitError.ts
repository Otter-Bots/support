import { ApplyOptions } from '@sapphire/decorators';
import { Listener, ListenerOptions } from '@sapphire/framework';
import { webhookSubmit } from '../lib/webhookSubmit';

@ApplyOptions<ListenerOptions>({})
export class UserEvent extends Listener {
  public async run(e: any) {
    webhookSubmit("RED", `Error: ${e}`)
    this.container.client.user?.setActivity(`${await this.container.db.get("current_ticket")} tickets`, {
      type: "WATCHING"
    })
  }
}
