<template>

    <div class="card mt-2" v-for="(todo, index) in todos" v-bind:key="todo.id">

        <div class="card-body p-2 d-flex" @click="moveToPage(todo.id)" style="cursor:pointer">

            <div class="flex-grow-1">
                <input type="checkbox" :checked="todo.complete" :id="todo.id" @change="toggleTodo(index, $event)"
                    @click.stop class="ml-2 mr-2">
                <span class="form-check-label" :class="{ todocss : todo.complete }">
                    {{ todo.subject }}
                </span>
            </div>
            <!-- 삭제버튼 -->
            <div>
                <button class="btn btn-danger btn-sm" @click.stop="openModal(todo.id)">
                    Delete
                </button>
            </div>
        </div>
    </div>
    <!-- 경고창 -->
    <teleport to="#modal">
        <ModalWin v-if="showModal"  @close="close" @onDlete="deleteTodo"/>
    </teleport>
</template>
<script>
    import {
        useRouter
    } from 'vue-router'
    import ModalWin from '@/components/ModalWin.vue'
    import {ref} from 'vue'
    export default {
        components: {
            ModalWin
        },
        // props: ['todos']
        props: {
            todos: {
                type: Array,
                required: true
            }
        },
        emits: ['toggle-todo', 'delete'],
        setup(props, {
            emit
        }) {
            // 삭제 될 id를 보관
            const todoDeleteId = ref(null);
            // 모달창 보이기
            const showModal = ref(false);
            const openModal = (index) => {
                showModal.value = true;
                todoDeleteId.value = index;
            }
            const close = () => {
                showModal.value = false;
                todoDeleteId.value = null;
            }
            
            
            const router = useRouter();
            const toggleTodo = (index, event) => {
                // console.log(index);
                emit('toggle-todo', index, event.target.checked);
            };
            const deleteTodo = () => {
                emit('delete-todo', todoDeleteId.value);
                showModal.value =false;
                todoDeleteId.value =null;
            };
            // 클릭된 id 를 전달한다.
            const moveToPage = (todoId) => {
                // console.log(todoId);
                // 아이디를 전달한다.
                // router.push('/todos/' + todoId);
                router.push({
                    name: 'Todo',
                    params: {
                        id: todoId
                    }
                });
            }
            return {
                toggleTodo,
                deleteTodo,
                moveToPage,
                showModal,
                openModal,
                close
            }
        }
    }
</script>
<style>
</style>