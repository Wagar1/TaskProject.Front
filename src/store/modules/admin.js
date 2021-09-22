export default {
    namespaced: true,
    state: () => ({
        firstName: 'Vugar'
    }),
    getters: {
        firstName: (state) => state.firstName,
    },
    mutations: {

    },
    actions: {
        go: (content) => {
            alert("Hallo");
        }
    }
}