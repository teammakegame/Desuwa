import client from '../../index';
import {BaseInteraction} from 'discord.js';

client.on('messageCreate', (message) => {
    if(message.author.bot) return;
    if(message.content == 'hello') {
        message.reply(`Hi ${message.author.username}`);
    }
})