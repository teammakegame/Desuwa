import fs from 'node:fs';
import path from 'node:path';
import {Client, IntentsBitField, Events, Collection} from 'discord.js';
import * as dotenv from 'dotenv';

declare module "discord.js" {
    export interface Client {
        commands: Collection<string, any>
    }
}
dotenv.config();

const client:Client = new Client({
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

client.commands = new Collection();

const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
    const commandPath = path.join(foldersPath, folder);
    const commandFiles = fs.readdirSync(commandPath).filter(file => file.endsWith('.ts'));
    for (const file of commandFiles) {
        const filePath = path.join(commandPath, file);
        const command = require(filePath);
        if ('data' in command && 'execute' in command) {
            client.commands.set(command.data.name, command);
        } else {
            console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`)
        }
    }
}

client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;
    console.log(interaction);
    const command = interaction.client.commands.get(interaction.commandName);
    if (!command) {
        console.error(`No command matching ${interaction.commandName} was found.`);
        return;
    }
    try {
        await command.execute(interaction);
    } catch (error) {
        console.log(error);
        if (interaction.replied || interaction.deferred) {
            await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true})
        } else {
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true})
        }
    }
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

console.log('test with new ide');

client.login(process.env.BOT_TOKEN).then(r => console.log('Logged'));