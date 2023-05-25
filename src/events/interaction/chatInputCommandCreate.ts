import client from '../../index';
import {BaseInteraction} from 'discord.js';

client.on('interactionCreate', async (interaction: BaseInteraction) => {
    if (!interaction.isChatInputCommand() || !interaction.inCachedGuild()) return;
    const command = client.commands.get(interaction.commandName);
    await interaction.deferReply();
    if (!command) {
        console.log('command not existed');
        return;
    }
    command.run(client, interaction);
})

// client.on('interactionCreate', (interaction) => {
//     if (!interaction.isChatInputCommand()) return;
//     if (interaction.commandName === 'hey') {
//         interaction.reply('hey');
//     }
//     if (interaction.commandName === 'ping') {
//         interaction.reply('pong');
//     }
//     if (interaction.commandName === 'sum') {
//         const sum1: number = interaction.options.get('first-number')?.value as number;
//         const sum2: number = interaction.options.get('second-number')?.value as number;
//         interaction.reply(`The total is ${sum1 + sum2}`);
//     }
// })