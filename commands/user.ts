import { SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js";

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Provide information about user'),
    async execute(interaction: any) {
        await interaction.reply(`This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`)
    }
}