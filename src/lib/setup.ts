// Unless explicitly defined, set NODE_ENV as development:
process.env.NODE_ENV ??= 'development';

import 'reflect-metadata';
import '@sapphire/plugin-logger/register';
import '@sapphire/plugin-editable-commands/register';
import * as colorette from 'colorette';
import { inspect } from 'util';
import { container } from '@sapphire/framework';
const { QuickDB } = require("quick.db");

const db = new QuickDB();
container.db = db;
declare module '@sapphire/pieces' {
    interface Container {
      db: any;
    }
  }


// Read env var
import "dotenv/config"
// Set default inspection depth
inspect.defaultOptions.depth = 1;

// Check if null if null set to 1
(async () => {
    if (await db.get("ticket_num") == null) {
        await db.add("ticket_num", 1)
    }
    if(await db.get("current_ticket") == null) {
        await db.set("current_ticket", 0)
    }
})();

// Enable colorette
colorette.createColors({ useColor: true });
