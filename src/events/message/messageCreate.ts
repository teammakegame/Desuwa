import client from '../../index';
import {Events, Message, MessageOptions, MessagePayload, MessageType} from 'discord.js';
import Member from '../../connections/database/models/member';

export default {
    name: Events.MessageCreate,
    execute: async (message: Message) => {
        if (message.author.bot) return;
        console.log(message);
    
        const represented: boolean = !! await Member
            .findOne({memberId: message.author.id, guildId: message.guildId})
            .select('represented');
        if (!represented) return;

        const channel = message.channel;
        const representedMessage = (await import(`../../messages/representedMessage`)).default(message);
        console.log(representedMessage);
        message.delete();
        
        (await channel.send(representedMessage));
    }
}