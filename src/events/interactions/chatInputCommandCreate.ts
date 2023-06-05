import client from '../../index';
import {Events, BaseInteraction} from 'discord.js';

export default {
    name: Events.InteractionCreate,
    execute: async (interaction: BaseInteraction) => {
        if (!interaction.isChatInputCommand() || !interaction.inCachedGuild()) return;
        const command = client.commands.get(interaction.commandName);
        await interaction.deferReply({ ephemeral: true })
        if (!command) {
            console.log('command not existed');
            return;
        }
        command.run(client, interaction);
    }
}