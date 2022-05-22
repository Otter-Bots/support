import { SapphireClient } from "@sapphire/framework";
import "./libs/setup"

const client = new SapphireClient({ intents: ['GUILDS', 'GUILD_MESSAGES'] });
console.log("Logged in!")
client.login();