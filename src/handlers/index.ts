import {REST, Routes, version, ApplicationCommandOptionType, Client, SlashCommandBuilder} from 'discord.js';
import * as dotenv from 'dotenv';
import ping from '../commands/others/ping';
dotenv.config();

// interface command {
//     name: string,
//     description: string
//     options?: Object
// }

// const commands: Array<command> = [
//     {
//         name: 'hey',
//         description: 'reply with hey!',
//     },
//     {
//         name: 'ping',
//         description: 'reply with pong!'
//     },
//     {
//         name: 'sum',
//         description: 'sum 2 number',
//         options: [
//             {
//                 name: 'first-number',
//                 description: 'The first number',
//                 type: ApplicationCommandOptionType.Number,
//                 choices: [
//                     {
//                         name: 'One',
//                         value: 1
//                     },
//                     {
//                         name: 'Two',
//                         value: 2
//                     },
//                     {
//                         name: 'Three',
//                         value: 3
//                     }
//                 ],
//                 required: true
//             },
//             {
//                 name: 'second-number',
//                 description: 'The second number',
//                 type: ApplicationCommandOptionType.Number,
//                 required: true
//             }
//         ]
//     }
// ];

// const rest: REST = new REST( {version: '10'}).setToken( process.env.BOT_TOKEN as string);

// (async (): Promise<void> => {
//     try {
//         console.log('Registering slash commands!!!');
        
//         await rest.put(Routes.applicationGuildCommands(
//             process.env.CLIENT_ID as string, 
//             process.env.GUILD_ID as string
//             ),
//             {body: commands}
//         );

//         console.log('The commands were registered successfully!');
        
//     } catch (error) {
//         console.log(`There was an error: ${error}`);
//     }
// })();

export default async (client: Client) => {
    const commandArray: SlashCommandBuilder[] = [];

    client.commands.set(ping.data.name, ping);
    commandArray.push(ping.data);

    const event = (await import('../events/interaction/chatInputCommandCreate'))

    client.on('ready', async () => {
        // await client.guilds.cache.get("825741743235268639").commands.set(commandsArray);
        // await client.guilds.cache.get(process.env.GUILD_ID as string)?.commands.set(commandArray);
        await client.application?.commands.set(commandArray);
    });
}