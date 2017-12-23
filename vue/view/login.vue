<template>
    <div class="page wrapper">
        <ul class="bg-bubbles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>

        <Form class="form" ref="formInline" :model="formInline" :rules="ruleInline">
            <div class="title">
                <Icon type="ionic" style="margin-right:15px;" size=40></Icon>
                <h1>管理平台</h1>
            </div>
            <Form-item prop="user">
                <Input type="text" size="large" v-model="formInline.user" placeholder="Username">
                <Icon style="width:15px;" type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </Form-item>
            <Form-item prop="password">
                <Input type="password" size="large" v-model="formInline.password" placeholder="Password">
                <Icon style="width:15px;" type="ios-locked-outline" slot="prepend"></Icon>
                </Input>
            </Form-item>
            <Form-item>
                <Button long size="large" class="btn" @click="handleSubmit('formInline')">登录</Button>
            </Form-item>
        </Form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [{
                        required: true,
                        message: '请填写用户名',
                        trigger: 'blur'
                    }],
                    password: [{
                            required: true,
                            message: '请填写密码',
                            trigger: 'blur'
                        },
                        {
                            type: 'string',
                            min: 6,
                            message: '密码长度不能小于6位',
                            trigger: 'blur'
                        }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                console.log('handleSubmit')
                this.$store.commit('login')
                // this.$refs[name].validate((valid) => {
                //     if (valid) {
                //         this.$Message.success('提交成功!');
                //     } else {
                //         this.$Message.error('表单验证失败!');
                //     }
                // })
            }
        }
    }
</script>
<style scoped>
    .page {
        background-color: rgb(42, 63, 84);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .form {
        width: 300px;
        z-index: 100;
    }

    .title {
        height: 80px;
        display: flex;
        color: white;
        justify-content: center;
        align-items: center;
        margin-bottom: 24px;
        border-bottom: 2px solid rgba(255, 255, 255, 0.2);
    }

    .wrapper {
        /*background: #50a3a2;*/
        /*background:linear-gradient(-225deg, #7085B6 0%, #87A7D9 50%, #DEF3F8 100%);*/
        /*background: linear-gradient(to bottom right, #2d3a4b 0%, #2d8cf0 100%);*/
        /*background: linear-gradient(to right bottom, #243949 0%, #517fa4 100%);*/
        opacity: 0.9;
    }

    .btn {
        background-color: #286090;
        color: white;
        font-weight: bold;
        border-color: #286090;
    }

    .bg-bubbles {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }

    .bg-bubbles li {
        position: absolute;
        list-style: none;
        display: block;
        width: 40px;
        height: 40px;
        background-color: rgba(255, 255, 255, 0.15);
        bottom: -160px;
        -webkit-animation: square 25s infinite;
        animation: square 15s infinite;
        -webkit-transition-timing-function: linear;
        transition-timing-function: linear;
    }

    .bg-bubbles li:nth-child(1) {
        left: 10%;
    }

    .bg-bubbles li:nth-child(2) {
        left: 20%;
        width: 80px;
        height: 80px;
        -webkit-animation-delay: 2s;
        animation-delay: 2s;
        -webkit-animation-duration: 17s;
        animation-duration: 17s;
    }

    .bg-bubbles li:nth-child(3) {
        left: 25%;
        -webkit-animation-delay: 4s;
        animation-delay: 4s;
    }

    .bg-bubbles li:nth-child(4) {
        left: 40%;
        width: 60px;
        height: 60px;
        -webkit-animation-duration: 22s;
        animation-duration: 22s;
        background-color: rgba(255, 255, 255, 0.25);
    }

    .bg-bubbles li:nth-child(5) {
        left: 70%;
    }

    .bg-bubbles li:nth-child(6) {
        left: 80%;
        width: 120px;
        height: 120px;
        -webkit-animation-delay: 3s;
        animation-delay: 3s;
        background-color: rgba(255, 255, 255, 0.2);
    }

    .bg-bubbles li:nth-child(7) {
        left: 32%;
        width: 160px;
        height: 160px;
        -webkit-animation-delay: 7s;
        animation-delay: 7s;
    }

    .bg-bubbles li:nth-child(8) {
        left: 55%;
        width: 20px;
        height: 20px;
        -webkit-animation-delay: 15s;
        animation-delay: 15s;
        -webkit-animation-duration: 40s;
        animation-duration: 40s;
    }

    .bg-bubbles li:nth-child(9) {
        left: 25%;
        width: 10px;
        height: 10px;
        -webkit-animation-delay: 2s;
        animation-delay: 2s;
        -webkit-animation-duration: 40s;
        animation-duration: 40s;
        background-color: rgba(255, 255, 255, 0.3);
    }

    .bg-bubbles li:nth-child(10) {
        left: 90%;
        width: 160px;
        height: 160px;
        -webkit-animation-delay: 11s;
        animation-delay: 11s;
    }
    /*@-webkit-keyframes square {
        0% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }
        100% {
            -webkit-transform: translateY(-700px) rotate(600deg);
            transform: translateY(-700px) rotate(600deg);
        }
    }*/

    @keyframes square {
        0% {
            /*-webkit-transform: translateY(0);*/
            transform: translateY(0);
        }
        100% {
            /*-webkit-transform: translateY(-700px) rotate(600deg);*/
            transform: translateY(calc(-100vh - 200px)) rotate(600deg);
        }
    }
</style>