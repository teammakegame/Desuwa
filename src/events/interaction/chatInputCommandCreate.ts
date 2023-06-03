import client from '../../index';
import {BaseInteraction} from 'discord.js';

client.on('interactionCreate', async (interaction: BaseInteraction) => {
    if (!interaction.isChatInputCommand() || !interaction.inCachedGuild()) return;
    const command = client.commands.get(interaction.commandName);
    await interaction.deferReply({ ephemeral: true });
    if (!command) {
        console.log('command not existed');
        return;
    }
    command.run(client, interaction);
})