export default new Vuex.Store({
    strict: true,
    state: {
        isLogin: localStorage.isLogin ? true : false
    },
    mutations: {
        login(state) {
            state.isLogin = localStorage.isLogin = true
        },
        logout(state) {
            delete localStorage.isLogin
            state.isLogin = false
        }
    }
})