import {REST, Routes, version, ApplicationCommandOptionType, Client, SlashCommandBuilder} from 'discord.js';
import * as dotenv from 'dotenv';
import ping from '../commands/others/ping';
import represent from '../commands/chat/represent';
dotenv.config();

export default async (client: Client) => {
    const commandArray: SlashCommandBuilder[] = [];

    client.commands.set(ping.data.name, ping);
    client.commands.set(represent.data.name, represent);
    commandArray.push(ping.data);
    commandArray.push(represent.data);

    const event = (await import('../events/interaction/chatInputCommandCreate'))

    client.on('ready', async () => {
        await client.application?.commands.set(commandArray);
    });
}