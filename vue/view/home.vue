<style scoped>
.left {
    background-color: rgb(42, 63, 84);
    flex: 0 0 240px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
}

.right {
    background-color: rgb(247, 247, 247);
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
}

.title {
    flex: 0 0 55px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 20px;
    color: whitesmoke;
}

.menu {
    flex: 1;
    overflow-y: auto;
}

.ivu-menu {
    background-color: rgb(42, 63, 84);
    color: rgba(255, 255, 255, .75) !important;
    font-weight: bold;
}

.page>>>.ivu-menu-opened .ivu-menu-submenu-title {
    color: white;
    text-shadow: rgba(0, 0, 0, .25) 0 -1px 0 !important;
    background: linear-gradient(#334556, #2C4257), #2A3F54 !important;
    box-shadow: rgba(0, 0, 0, .25) 0 1px 0, inset rgba(255, 255, 255, .16) 0 1px 0 !important;
}

.page>>>.ivu-menu-submenu-title:hover {
    background-color: rgb(42, 63, 84);
    color: white;
}

.ivu-menu-item {
    padding-left: 50px !important;
    color: rgba(255, 255, 255, .75);
    font-weight: normal;
}

.ivu-menu-item:before {
    background: #425668;
    bottom: auto;
    content: "";
    height: 8px;
    left: 26px;
    top: 20px;
    position: absolute;
    right: auto;
    width: 8px;
    z-index: 1;
    border-radius: 50%;
}

.ivu-menu-item:after {
    border-left: 1px solid #425668;
    bottom: 0;
    content: "";
    left: 30px;
    position: absolute;
    top: 0;
}

.ivu-menu-item-active.ivu-menu-item-selected {
    /*background-color: rgba(255, 255, 255, 0.05) !important;*/
    color: white !important;
    border-right: 5px solid #1ABB9C !important;
}

.ivu-menu-item:hover {
    background-color: rgba(255, 255, 255, 0.05) !important;
}

.ivu-menu-vertical.ivu-menu-light:after {
    width: 0;
}

.topbar {
    background: #EDEDED;
    border-bottom: 1px solid #D9DEE4;
    flex: 0 0 58px;
    display: flex;
}

.topbar-left {
    flex: 1;
    padding-left: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.topbar-right {
    flex: 1;
    padding-right: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.topbar-drop {
    cursor: pointer;
    color: #73879c;
    font-size: 14px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    width: 120px;
    align-items: center;
}

.container {
    width: 500px;
    padding: 20px;
}
</style>
<template>
    <div class="page">
        <div class="left">
            <div class="title">
                <Icon type="ionic" style="margin-right:15px;" size=26></Icon>
                <h2>管理平台</h2>
            </div>
            <div class="menu">
                <Menu :open-names="['1']" accordion>
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-paper"></Icon>
                            内容管理
                        </template>
                        <Menu-item name="1-1">文章管理</Menu-item>
                        <Menu-item name="1-2">评论管理</Menu-item>
                        <Menu-item name="1-3">举报管理</Menu-item>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-people"></Icon>
                            用户管理
                        </template>
                        <Menu-item name="2-1">新增用户</Menu-item>
                        <Menu-item name="2-2">活跃用户</Menu-item>
                    </Submenu>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="stats-bars"></Icon>
                            统计分析
                        </template>
                        <Menu-group title="使用">
                            <Menu-item name="3-1">新增和启动</Menu-item>
                            <Menu-item name="3-2">活跃分析</Menu-item>
                            <Menu-item name="3-3">时段分析</Menu-item>
                        </Menu-group>
                        <Menu-group title="留存">
                            <Menu-item name="3-4">用户留存</Menu-item>
                            <Menu-item name="3-5">流失用户</Menu-item>
                        </Menu-group>
                    </Submenu>
                </Menu>
            </div>
        </div>
        <div class="right">
            <div class="topbar">
                <div class="topbar-left">
                    <Icon type="navicon-round" size=26></Icon>
                </div>
                <div class="topbar-right">
                    <Dropdown trigger="click" placement="bottom-end">
                        <div class="topbar-drop">
                            <Icon type="person" size=21></Icon>
                            <span>系统管理员</span>
                            <Icon type="arrow-down-b"></Icon>
                        </div>
                        <Dropdown-menu slot="list">
                            <Dropdown-item>个人资料</Dropdown-item>
                            <Dropdown-item>设置</Dropdown-item>
                            <Dropdown-item>登出</Dropdown-item>
                        </Dropdown-menu>
                    </Dropdown>
                </div>
            </div>
            <div class="container">
                <formc></formc>
            </div>
        </div>
    </div>
</template>
<script>
import formc from '../compoments/form.vue'
export default {
    components: {
        formc
    },
    data() {
        return {
            spanLeft: 5,
            spanRight: 19
        }
    },
    computed: {
        iconSize() {
            return this.spanLeft === 5 ? 14 : 24;
        }
    },
    methods: {
        toggleClick() {
            if (this.spanLeft === 5) {
                this.spanLeft = 2;
                this.spanRight = 22;
            } else {
                this.spanLeft = 5;
                this.spanRight = 19;
            }
        }
    }
}
</script>