import { SlashCommandBuilder, ChatInputCommandInteraction, Client} from "discord.js";

export default {
    data: new SlashCommandBuilder()
        .setName("represent")
        .setDescription("Represents someone to interact")
        .addStringOption((option) => option
            .setName("input")
            .setDescription("Desuwa is going to represent this input")
            .setRequired(true)
        )
        .setDMPermission(false),
    run: async (client: Client, interaction: ChatInputCommandInteraction) => {
        if (!interaction.inCachedGuild()) return;
        interaction.channel?.send(`${interaction.options.get("input")?.value}`);
        interaction.followUp({content: 'Representing successfully'});
    }
}