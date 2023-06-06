import {Message, MessageType, MessageOptions, MessagePayload} from 'discord.js';

export default (message: Message): MessagePayload => {
    let options: MessageOptions = {content: message.content};
    switch (message.type) {
        case MessageType.Default:
            break;
        default:
            break;
    }
    return new MessagePayload(message, options);
}