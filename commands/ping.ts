import { SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js";

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pongs'),
    execute: async (interaction: ChatInputCommandInteraction) => {
        if (!interaction.inCachedGuild()) return;
        await interaction.reply('Pong!');
    }
}