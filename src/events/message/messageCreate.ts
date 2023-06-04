import client from '../../index';
import {Events, Message} from 'discord.js';

export default {
    name: Events.MessageCreate,
    execute: async (message: Message) => {
        console.log(message.author);
    }
}