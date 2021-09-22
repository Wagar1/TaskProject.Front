import axios  from 'axios';
import config from '../../config.json';
import FormData from 'form-data';
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
        },
        createTask: async (context, payload) => {
            const url = config.base_url + '/api/Tasks/create';
            const formData = new FormData();
            formData.append('UserName', payload.username);
            formData.append('Email', payload.email);
            formData.append('Text', payload.content);
            console.log(formData);
            const requestOptions = {
                method: 'post',
                url: url,
                headers: { "Content-Type": "multipart/form-data" },
                data: formData,
            };            
            let result = await axios(requestOptions);
            if(result.data.Status === 'error')
                throw 'Ошибка при создании новой задачи';
        }
    }
}