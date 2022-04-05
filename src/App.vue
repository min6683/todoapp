<template>
  
  <div class="container">
    <h1>TODO LIST</h1>
    <!-- 할일 추가 입력창 -->
    <form action="" class="d-flex" v-on:submit.prevent="onSubmit">
      <div class="flex-grow-1 mr-2">
        <input type="text" placeholder="Type New Todo" class="form-control" v-model="todo">
      </div>
      <div>
        <button class="btn btn-primary" type="submit">Add</button>
      </div>
    </form>
    <!-- 내용 입력 안내창 -->
    <div v-show="hasError" class="red">내용을 입력하세요.</div>
    <!-- todo 목록창 -->
    <div class="card mt-2" v-for="(todo,index) in todos" v-bind:key="todo.id">
      <div class="card-body p-2 d-flex">
        <div class="form-check flex-grow-1">
          <input type="checkbox" class="form-check-input" v-model="todo.complete" v-bind:id="todo.id">
          <label class="form-check-label" v-bind:class="{todocss:todo.complete}" v-bind:for="todo.id">{{todo.subject}}</label>
        </div>
        <!-- 삭제버튼 -->
        <div class="">
          <button class="btn btn-danger btn-sm" @click="deletTodo(index)">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {ref} from 'vue'
  export default {
    setup(){

      
      // 할일 목록(배열)을 저장
      const todos = ref([
        {id: 1, subject: '청소', complete:false},
        {id: 2, subject: '백화점', complete:false},
        {id: 3, subject: '공부', complete:false},
        {id: 4, subject: '식재료', complete:false}
      ]);
      // 추가할 일
      const todo = ref('');
      // 내용 입력 안내창 여부
      const hasError = ref(false);
      // todo 스타일시트
      const todoStyle = {
        textDecoration: 'line-through',
        color: 'gray'
      }

      // 버튼 클릭시 처리
      const onSubmit = () => {
        // 내용이 있는지 없는지 구분한다.
        if(todo.value === '') {
          hasError.value = true;
        }else{
          hasError.value = false;
          // 할일의 내용을 배열로 추가힌다.
          todos.value.push({
          id: Date.now(),
          subject: todo.value,
          complete: false
          }); 
        }
        
        todo.value='';
      }
      const deletTodo = (index) => {
        // 배얄내에서 순서번호로 부터 1개 제거
        todos.value.splice(index, 1);
      }
      return {
        todos,
        todo,
        hasError,
        todoStyle,
        onSubmit,
        deletTodo,
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