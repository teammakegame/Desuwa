import {ApplicationCommandOptionType, Client, SlashCommandBuilder} from 'discord.js';
import * as dotenv from 'dotenv';
import fs from 'node:fs';
import path from 'node:path';
dotenv.config();

export default async (client: Client) => {
    const commandArray: SlashCommandBuilder[] = [];

    const commandFolders = fs.readdirSync(path.join(__dirname, '../commands'));
    for (const folder of commandFolders) {
        const files = fs.readdirSync(path.join(__dirname, `../commands/${folder}`))
        for (const file of files) {
            const command = (await import(`../commands/${folder}/${file}`)).default;
            client.commands.set(command.data.name, command);
            commandArray.push(command.data)
        }
    }

    const eventFolders = fs.readdirSync(path.join(__dirname, '../events'));
    for (const folder of eventFolders) {
        const files = fs.readdirSync(path.join(__dirname, `../events/${folder}`))
        for (const file of files) {
            const event = (await import(`../events/${folder}/${file}`)).default;
            client.on(event.name, (...args: any[]) => event.execute(...args))
        }
    }

    client.on('ready', async () => {
        await client.application?.commands.set(commandArray);
    });
}