import axios  from 'axios';
import config from '../../config.json';
import FormData from 'form-data';
export default {
    namespaced: true,
    state: () => ({
    }),
    getters: {
    },
    mutations: {

    },
    actions: {
        login: async (context, payload) => {
            const url = config.base_url + '/api/Members/login';
            const formData = new FormData();
            formData.append('UserName', payload.username);
            formData.append('Password ', payload.password);
            const requestOptions = {
                method: 'post',
                url: url,
                headers: { "Content-Type": "multipart/form-data" },
                data: formData,
            };
            try{
                await axios(requestOptions);
            }catch(error){
                throw 'Ошибка при логирование';
            }   
        }
    }
}