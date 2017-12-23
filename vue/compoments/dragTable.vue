<template>
    <div>
        <div class="ivu-table-wrapper">
            <div class="ivu-table">
                <!---->
                <div class="ivu-table-header">
                    <table cellspacing="0" cellpadding="0" border="0" style="width: 218px;">
                        <colgroup>
                            <col width="72">
                            <col width="73">
                            <col width="73">
                        </colgroup>
                        <thead>
                            <tr>
                                <th class="">
                                    <div class="ivu-table-cell"><span>姓名</span>
                                        <!---->
                                        <!---->
                                    </div>
                                </th>
                                <th class="">
                                    <div class="ivu-table-cell"><span>年龄</span>
                                        <!---->
                                        <!---->
                                    </div>
                                </th>
                                <th class="">
                                    <div class="ivu-table-cell"><span>地址</span>
                                        <!---->
                                        <!---->
                                    </div>
                                </th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div class="ivu-table-body">
                    <table cellspacing="0" cellpadding="0" border="0" style="width: 600px;">
                        <draggable :options="options" class="ivu-table-tbody" element="tbody" v-model="myArray">
                            <tr v-for="element in myArray" class="ivu-table-row i">
                                <td class="item">
                                    <div class="ivu-table-cell">
                                        <!---->
                                        <!----><span>{{element.name}}</span>
                                        <!---->
                                        <!---->
                                    </div>
                                </td>
                                <td class="">
                                    <div class="ivu-table-cell">
                                        <!---->
                                        <!----><span>{{element.order}}</span>
                                        <!---->
                                        <!---->
                                    </div>
                                </td>
                                <td class="">
                                    <div class="ivu-table-cell">
                                        <!---->
                                        <!----><span>{{element.fixed}}</span>
                                        <!---->
                                        <!---->
                                    </div>
                                </td>
                            </tr>
                        </draggable>
                    </table>
                </div>
                <div class="ivu-table-tip" style="display: none;">
                    <table cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                            <tr>
                                <td><span>暂无筛选结果</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!---->
                <!---->
                <!---->
            </div>
        </div>
        <draggable v-model="myArray" :options="options">
            <div v-for="element in myArray" :key="element.id" class="item">
                {{element.name}}
            </div>
            <button slot="footer">Add</button>
        </draggable>

        <Table :columns="columns1" :data="myArray" width='200'></Table>
        <ul class="list-group">
            <li class="list-group-item">Foo</li>
            <li class="list-group-item">Bar</li>
            <li class="list-group-item">Baz</li>
        </ul>
    </div>
</template>

<script>
    import draggable from 'vuedraggable'
    const message = ['vue.draggabledraggabledraggable', 'draggable', 'component', 'for', 'vue.js 2.0', 'based', 'on',
        'Sortablejs'
    ]
    export default {
        name: 'hello',
        components: {
            draggable
        },
        data() {
            return {
                options: {
                    //animation: 150,
                    handle: '.item',
                    //ghostClass: "sortable-ghost", // Class name for the drop placeholder
                    // chosenClass: "sortable-chosen", // Class name for the chosen item
                    //dragClass: "sortable-drag", // Class name for the dragging item
                },
                columns1: [{
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'order'
                    },
                    {
                        title: '地址',
                        key: 'fixed'
                    }
                ],
                myArray: message.map((name, index) => {
                    return {
                        name,
                        order: index + 1,
                        fixed: false
                    };
                }),
                list2: message.map((name, index) => {
                    return {
                        name,
                        order: index + 1,
                        fixed: false
                    };
                }),
                editable: true,
                isDragging: false,
                delayedDragging: false
            }
        },
        methods: {
            orderList() {
                this.list = this.list.sort((one, two) => {
                    return one.order - two.order;
                })
            },
            onMove({
                relatedContext,
                draggedContext
            }) {
                const relatedElement = relatedContext.element;
                const draggedElement = draggedContext.element;
                return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
            }
        },
        computed: {
            dragOptions() {
                return {
                    animation: 0,
                    group: 'description',
                    disabled: !this.editable,
                    ghostClass: 'ghost'
                };
            },
            listString() {
                return JSON.stringify(this.list, null, 2);
            },
            list2String() {
                return JSON.stringify(this.list2, null, 2);
            }
        },
        watch: {
            isDragging(newValue) {
                if (newValue) {
                    this.delayedDragging = true
                    return
                }
                this.$nextTick(() => {
                    this.delayedDragging = false
                })
            }
        }
    }
</script>

<style>
    /*.sortable-ghost {
        background-color: saddlebrown;
    }

    .chosenClass {
        color: #fff;
        background-color: #c00;
    }

    .dragClass {
        background-color: darksalmon;
        color: steelblue;
    }

    .sortable-ghost td {
        background-color: #ebf7ff;
    }

    .chosenClass td {
        background-color: blueviolet;
    }

    .dragClass td {
        background-color: darksalmon;
    }*/
    /*.ivu-table-row:hover td {
        background-color: #ebf7ff;
    }*/
    /*.i {
        background-color: darksalmon;
    }

    .item:hover {
        background-color: red;
    }*/

    .flip-list-move {
        transition: transform 0.5s;
    }

    .no-move {
        transition: transform 0s;
    }
    /*.ghost {
        opacity: .5;
        background: #C8EBFB;
    }*/

    .list-group {
        min-height: 20px;
    }

    .list-group-item {
        cursor: move;
    }

    .list-group-item i {
        cursor: pointer;
    }
</style>