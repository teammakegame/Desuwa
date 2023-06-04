import { SlashCommandBuilder, ChatInputCommandInteraction, Client} from "discord.js";
import Member from "../../connections/database/models/member";

export default {
    data: new SlashCommandBuilder()
        .setName("represent")
        .setDescription("Represents someone to interact")
        .addNumberOption((option) => option
            .setName('mode')
            .setDescription('Desuwa will automatically represent your messages based on this option')
            .addChoices({name: 'ON', value: 1})
            .addChoices({name: 'OFF', value: 0})
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
        // console.log(`mode: ${mode}, message: ${message}`);

        const member = await Member.findOneAndUpdate(
            {
                memberId: interaction.member.id,
                guildId: interaction.guildId
            },
            { represented: mode },
            {
                upsert: true,
                new: true,
                runValidators: true
            }
        )

        switch (mode) {
            case 1:
                await interaction.followUp({content: 'Auto representation mode is ON'})
                break;
            case 0:
                await interaction.followUp({content: 'Auto representation mode is OFF'})
                break;
            default:
                await interaction.followUp({content: 'Complete representation'})
                break;
        }

        if (message) interaction.channel?.send(`${message}`);
    }
}