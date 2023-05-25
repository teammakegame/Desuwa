import { SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js";

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Provides information about server!'),
    execute: async (interaction: ChatInputCommandInteraction) => {
        if (!interaction.inCachedGuild()) return;
        await interaction.reply(`This server is ${interaction.guild.name} and has ${interaction.guild.memberCount} member.`)
    }
}