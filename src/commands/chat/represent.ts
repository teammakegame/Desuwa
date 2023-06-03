import { SlashCommandBuilder, ChatInputCommandInteraction, Client} from "discord.js";

export default {
    data: new SlashCommandBuilder()
        .setName("represent")
        .setDescription("Represents someone to interact")
        .addStringOption((option) => option
            .setName('mode')
            .setDescription('Desuwa will automatically represent your messages based on this option')
            .addChoices({name: 'ON', value: 'ON'})
            .addChoices({name: 'OFF', value: 'OFF'})
        )
        .addStringOption((option) => option
            .setName("message")
            .setDescription("Desuwa is going to represent this message instantly")
        )
        .setDMPermission(false),
    run: async (client: Client, interaction: ChatInputCommandInteraction) => {
        if (!interaction.inCachedGuild()) return;
        const mode = interaction.options.get('mode')?.value;
        const message = interaction.options.get('message')?.value;
        console.log(`mode: ${mode}, message: ${message}`);
        
        switch (mode) {
            case 'ON': 
                await interaction.followUp({content: 'Auto representation mode is ON'})
                break;
            case 'OFF':
                await interaction.followUp({content: 'Auto representation mode is OFF'})
                break;
            default:
                await interaction.followUp({content: 'Complete representation'})
                break;
        }
        if (message)
            interaction.channel?.send(`${message}`);
    }
}