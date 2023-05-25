import { SlashCommandBuilder, ChatInputCommandInteraction, Client} from "discord.js";

export default {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pongs'),
    run: async (client: Client, interaction: ChatInputCommandInteraction) => {
        if (!interaction.inCachedGuild()) return;
        interaction.followUp('Pong!');
    }
}