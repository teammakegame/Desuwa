import DiscordJS, { IntentsBitField } from 'discord.js'
import dotenv from 'dotenv'
const express = require('express')
dotenv.config()

const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Application is running on ${port}`);
});

const client = new DiscordJS.Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
})

client.on('ready', () => {
    console.log('The bot is ready')
})

client.on('messageCreate', (message) => {
    if (message.content === 'kawaii') {
        message.reply({
            content: 'Desuwa is here!'
        })
        console.log(message.content)
    }
})

client.login(process.env.BOT_TOKEN)