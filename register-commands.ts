import {REST, Routes, version} from 'discord.js';
import * as dotenv from 'dotenv';
dotenv.config();

interface command {
    name: string,
    description: string
}

const commands: Array<command> = [
    {
        name: 'hey',
        description: 'reply with hey!'
    },
    {
        name: 'ping',
        description: 'reply with pong!'
    }
];

const rest: REST = new REST( {version: '10'}).setToken( process.env.BOT_TOKEN as string);

(async (): Promise<void> => {
    try {
        console.log('Registering slash commands!!!');
        
        await rest.put(Routes.applicationGuildCommands(
            process.env.CLIENT_ID as string, 
            process.env.GUILD_ID as string
            ),
            {body: commands}
        );

        console.log('The commands were registered successfully!');
        
    } catch (error) {
        console.log(`There was an error: ${error}`);
    }
})();