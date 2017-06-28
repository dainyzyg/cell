<template>
    <div class="page">
        <Form class="form" ref="formInline" :model="formInline" :rules="ruleInline">
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
                <Button long size="large" type="primary" @click="handleSubmit('formInline')">登录</Button>
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
                this.$store.commit('login')
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            }
        }
    }
</script>
<style>
    .page {
        background-color: #2d3a4b;
        flex: 1;
        display: flex;
        align-items: center;
        align-self: stretch;
        justify-content: center;
    }

    .form {
        width: 300px;
    }
</style>