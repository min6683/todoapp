<template>

  <div class="container">
    <h1>TODO LIST</h1>
    <!-- 할일 추가 입력창 -->
    <TodoSimpleForm v-on:add-todo="addTodo" />
    <!-- 목록없음 안내창 -->
    <div v-if="!todos.length" class="red">생성된 Todo 목록이 없습니다.</div>
    <!-- todo 목록창 -->
    <TodoList v-bind:todos="todos" v-on:toggle-todo="toggleTodo" v-on:delete-todo="deletTodo"/>
    
  </div>
</template>

<script>
  import {
    ref
  } from 'vue';
  import TodoSimpleForm from './components/TodoSimpleForm.vue'
  import TodoList from './components/TodoList.vue'
  export default {
    components: {
      TodoSimpleForm,
      TodoList
    },
    setup() {
      // 할일 목록(배열)을 저장
      const todos = ref([
        {id:1, subject:'할일', complete: false}
      ]);

    

      // 버튼 클릭시 처리
      // TodoSimpleForm 에서
      // add-todo 이벤트로 전달된 객체를
      // 처리해 주는 콜백함수
      const addTodo = (todo) => {
        todos.value.push(todo);
        // todos.value.push({
        //     id: Date.now(),
        //     subject: todo.value,
        //     complete: false
        // });
      };
      const toggleTodo = (index) => {
        todos.value[index].complete = !todos.value[index].complete
      }
      const deletTodo = (index) => {
        // 배얄내에서 순서번호로 부터 1개 제거
        todos.value.splice(index, 1);
      }
      return {
        todos,
        addTodo,
        toggleTodo,
        deletTodo
      }
    }
  }
</script>

<style>
  .red {
    color: #f00;
  }

  .todocss {
    color: gray;
    text-decoration: line-through;
  }
</style>