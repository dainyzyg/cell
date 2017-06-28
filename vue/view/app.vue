<template>
    <home v-if="isLogin" />
    <login v-else />
</template>
<script>
    import home from './home.vue'
    import login from './login.vue'
    export default {
        data() {
            return {

            }
        },
        computed: {
            isLogin() {
                return this.$store.state.isLogin
            }
        },
        components: {
            home,
            login
        },
        created() {}
    }
</script>