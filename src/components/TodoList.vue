<template>
  <div class="todo_list" :class="{'todo_list_selected':!!selected}">
    <ul :style="{width:`${todos.length * 100}%`}">
      <li v-for="todo in todos" :key="todo.name" :style="{transform:`translate3D(-${currentTodoIndex * 100}%,0,0)`}">
        <Todo :todo="todo" :selected="selected && todo === selected.todo" @select="selectTodo"/>
      </li>
    </ul></div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator'
  import Todo from "@/components/Todo.vue";
  @Component({
    components: {Todo}
  })
  export default class TodoList extends Vue {
    get todos(){
      return this.$store.state.todos;
    }
    get currentTodoIndex() {

      return this.$store.state.currentTodoIndex;
    }
    get selected(){
      return this.$store.state.selected;
    }
    selectTodo(){
      this.$store.commit('selectTodo');
    }
    mounted(){
      const touch = {startX: 0, endX: 0};
      this.$el.addEventListener('touchstart',evt=> {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        touch.startX = (evt as any).touches[0].clientX;//用typescript时，需要用到evt的内部内容时，
        touch.endX = 0;// 由于evt是object类型，子对象为其他类型时，会报错，可使用as any 后缀
      });
      this.$el.addEventListener('touchmove',evt => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        touch.endX = (evt as any).touches[0].clientX;
      });
      this.$el.addEventListener('touchend', ()=> {
        if(!touch.endX || Math.abs(touch.endX - touch.startX) < 10){
          return;
        }else{if(touch.endX < touch.startX){
          this.$store.commit('nextTodo')
        }else{
          this.$store.commit('prevTodo')
        }}
      })
    }//实现触摸事件

  }
</script>

<style lang="scss" scoped>
.todo_list{
  padding: 0 32px;
  height: 50%;
  transition: all 0.5s ease;
  & .todo_list_selected {
    transform: scaleX(1.25);
  }
  > ul,
  > ul > li{
    display: flex;
    height: 100%;
  }
  > ul > li {
    flex: 1;
    transition: transform 0.5s ease;
  }
}
</style>