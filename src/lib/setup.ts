// Unless explicitly defined, set NODE_ENV as development:
process.env.NODE_ENV ??= 'development';

import 'reflect-metadata';
import '@sapphire/plugin-logger/register';
import '@sapphire/plugin-editable-commands/register';
import * as colorette from 'colorette';
import { inspect } from 'util';
import db from "quick.db";
// Read env var
import "dotenv/config"
// Set default inspection depth
inspect.defaultOptions.depth = 1;

// Check if null if null set to 1
if (db.get("ticket_num") == null) {
    db.add("ticket_num", 1)
}
if(db.get("current_ticket") == null) {
    db.set("current_ticket", 0)
}

// Enable colorette
colorette.createColors({ useColor: true });
