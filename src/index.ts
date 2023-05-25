import {Client, IntentsBitField, Collection} from 'discord.js';
import * as dotenv from 'dotenv';
import Handler from './handlers';

dotenv.config();

declare module "discord.js" {
    export interface Client {
        commands: Collection<string, any>;
        buttons: Collection<string, any>;
    }
}

const client:Client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildVoiceStates,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.GuildMessageReactions,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.DirectMessages
    ]
})

export default client;

client.commands = new Collection();
client.buttons = new Collection();

Handler(client);

client.login(process.env.BOT_TOKEN).then(r => console.log('Desuwa is awakening'));

