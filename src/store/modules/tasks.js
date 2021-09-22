import axios  from 'axios';
import config from '../../config.json';
export default {
    namespaced: true,
    state: () => ({
        developer: 'vugar',
        tasks: []
    }),
    getters: {
        getTasks: (state) => state.tasks
    },
    mutations: {
        setTasks: (state, payload) => {
            state.tasks = payload;
        }
    },
    actions: {
        fetchTasks: async (context) => {
            const url = config.base_url + '/api/Tasks?developer='+context.state.developer;
            const result = await axios.get(url);
            context.commit('setTasks', result.data.Message.Tasks);
        }
    }
}