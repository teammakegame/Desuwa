import {Client, IntentsBitField} from 'discord.js';
import * as dotenv from 'dotenv';

dotenv.config();
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
})

client.on('ready', (c) => {
    console.log(`${c.user.username} is online.`)
});

client.on('messageCreate', (message) => {
    console.log(message.content);
})

console.log('test with new ide');

client.login(process.env.BOT_TOKEN).then(r => console.log('Logged'));