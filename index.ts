import {Client, IntentsBitField} from 'discord.js';
import * as dotenv from 'dotenv';

dotenv.config();
const client = new Client({
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

client.on('ready', (c) => {
    console.log(`${c.user.username} is online.`)
});

client.on('messageCreate', (message) => {
    if(message.author.bot) return;
    if(message.content == 'hello') {
        message.reply(`Hi ${message.author.username}`);
    }
})

client.login(process.env.BOT_TOKEN);