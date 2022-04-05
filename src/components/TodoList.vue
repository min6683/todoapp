<template>
    목록입니다.
    <div class="card mt-2" v-for="(todo,index) in todos" v-bind:key="todo.id">
        <div class="card-body p-2 d-flex">
            <div class="form-check flex-grow-1">
                <input type="checkbox" class="form-check-input" v-model="todo.complete" v-bind:id="todo.id" v-on:chang="toggleTodo(index)">
                <label class="form-check-label" v-bind:class="{todocss:todo.complete}"
                    v-bind:for="todo.id">{{todo.subject}}</label>
            </div>
            <!-- 삭제버튼 -->
            <div class="">
                <button class="btn btn-danger btn-sm" @click="deletTodo(index)">Delete</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        // props: ['todos']
        props: {
            todos: {
                type: Array,
                require: true
            }
        },
        emits: ['toggle-todo', 'delete-todo'],

        setup(props, {emit}) {
            const toggleTodo = (index) => {
                emit('toggle-todo', index);
            };
            const deletTodo = (index) => {
                emit('delete-todo', index);
            }
            return {
                toggleTodo,
                deletTodo
            }
        }
    }
</script>


<style>

</style>