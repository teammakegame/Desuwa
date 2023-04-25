import { SlashCommandBuilder } from "discord.js";

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pongs'),
    async execute(interaction: any) {
        await interaction.reply('Pong!');
    }
}