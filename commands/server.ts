import { SlashCommandBuilder } from "discord.js";

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Provides information about server!'),
    async execute(interaction: any) {
        await interaction.reply(`This server is ${interaction.guild.name} and has ${interaction.guild.memberCount} member.`)
    }
}