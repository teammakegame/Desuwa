import client from '../../index';
import {Events} from 'discord.js';
import Constant from '../../configs/constants';
import updateCache from '../../configs/redis';

export default {
    name: Events.ClientReady,
    execute: async (): Promise<void> => {
        for (const model of Constant.Schema.All) {
            updateCache(model);
        }    
    }
}