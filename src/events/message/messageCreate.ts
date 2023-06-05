import client from '../../index';
import {Events, Message } from 'discord.js';
import Member from '../../connections/database/models/member';

export default {
    name: Events.MessageCreate,
    execute: async (message: Message) => {
        if (message.author.bot) return;
        console.log(message);
        await Member.findOne({memberId: message.author.id, guildId: message.guildId})
            .then((member: any) => {
                if (member.get('represented') == 1) {
                }
            });
    }
}