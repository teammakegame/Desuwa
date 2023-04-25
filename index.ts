import fs from 'node:fs';
import path from 'node:path';
import {Client, IntentsBitField, Events, Collection} from 'discord.js';
import * as dotenv from 'dotenv';

dotenv.config();
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

// client.commands = new Collection();

client.on('ready', (c) => {
    console.log(`${c.user.username} is online.`)
});

client.on('messageCreate', (message) => {
    if(message.author.bot) return;
    if(message.content == 'hello') {
        message.reply(`Hi ${message.author.username}`);
    }
})

console.log('test with new ide');

client.login(process.env.BOT_TOKEN).then(r => console.log('Logged'));