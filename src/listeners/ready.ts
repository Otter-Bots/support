import { ApplyOptions } from '@sapphire/decorators';
import { Listener, ListenerOptions, container } from '@sapphire/framework';
import { blue } from 'colorette';

@ApplyOptions<ListenerOptions>({})
export class UserEvent extends Listener {
  public run() {
    const { client } = container;
    function banner() {
      const layer1: string = String.raw`  _____                              _`
      const layer2: string = String.raw` / ____|                            | |`
      const layer3: string = String.raw`| (___  _   _ _ __  _ __   ___  _ __| |`
      const layer4: string = String.raw` \___ \| | | | '_ \| '_ \ / _ \| '__| __|`
      const layer5: string = String.raw` ____) | |_| | |_) | |_) | (_) | |  | |_`
      const layer6: string = String.raw`|_____/ \__,_| .__/| .__/ \___/|_|   \__|`
      const layer7: string = String.raw`             | |   | |`
      const layer8: string = String.raw`             |_|   |_|`
      console.log(blue(layer1))
      console.log(blue(layer2))
      console.log(blue(layer3))
      console.log(blue(layer4))
      console.log(blue(layer5))
      console.log(blue(layer6))
      console.log(blue(layer7))
      console.log(blue(layer8))
    }
    function info() {
      const commands = client.stores.get("commands").size;
      const listeners = client.stores.get("listeners").size;
      const args = client.stores.get("arguments").size;
      const precondition = client.stores.get("preconditions").size;
      console.log(blue(`Commands: ${commands} \nListeners: ${listeners} \nArguments: ${args} \nPreconditions: ${precondition}`))
    }
    banner()
    info()
  }
}
