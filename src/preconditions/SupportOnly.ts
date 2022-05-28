import { Precondition } from '@sapphire/framework';
import type { Interaction } from 'discord.js';
import { envParseArray } from '../lib/env-parser';

const SUPPORT = envParseArray('SUPPORT');
export class UserPrecondition extends Precondition {
  public chatInputRun(interaction: Interaction) {
    return SUPPORT.includes(interaction.user.id) ? this.ok() : this.error({ message: 'This command can only be used by support' });
  }
}

declare module '@sapphire/framework' {
  interface Preconditions {
    SupportOnly: never;
  }
}
