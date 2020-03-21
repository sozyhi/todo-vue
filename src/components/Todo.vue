<template>
  <div class="todo" :class="{todo_selected:selected}">
    <div class="todo_top" @click="getInfo()">
      <div class="todo_icon"  :style="{color}">
        <i :class="['fa',`fa-${icon}`]"></i>
      </div>
      <div class="todo_menu">
        <i :class="['fa','fa-ellipsis-v']"></i>
      </div>
    </div>
    <div class="todo_main">
      <p class="todo_tips">{{todo.tasks.length}} Tasks</p>
      <h3 class="todo_title">{{todo.name}}</h3>
      <div class="todo_progress">
              <span class="todo-progress_line">
                <i :style="{width:todoProgressPercentage,backgroundImage:`${bgGradient}`}"></i>
              </span>
        <span class="todo-progress_percentage">{{todoProgressPercentage}}</span>

      </div>
      <div class="todo_info">
        <h4 class="todo_subtitle">Today</h4>
        <ul>
          <li></li>
        </ul>
        <h4 class="todo_subtitle">Tomorrow</h4>
        <ul>
          <li></li>
        </ul>
        <h4 class="todo_subtitle">Outdated</h4>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component,Prop} from 'vue-property-decorator'

  @Component
  export default class Todo extends Vue {

    @Prop({required:true,type:Object})todo!: Todos;
    @Prop(Boolean)selected: boolean | undefined;
    get bgGradient(){
      return this.$store.getters.bgGradient;
    }
    get todoProgressPercentage(){
      const totalCount = this.todo.tasks.filter(t => !t.deleted).length;
      const doneCount  = this.todo.tasks.filter(t => !t.deleted && t.done).length;
      return `${Math.round((doneCount/totalCount)*100)}%`;
    }
    name = this.todo.name;
    icon: string = this.todo.icon;
    color = this.todo.colors[0];
    getInfo(){
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const app = document.querySelector('#app')!;
      const appRect =app.getBoundingClientRect();
      const elRect = this.$el.getBoundingClientRect();
      const todo = this.todo;
      const rect = {top:0,left:0,width:0,height:0,appWidth:0,appHeight:0};
      rect.top = elRect.top - appRect.top;
      rect.left = elRect.left - appRect.left;
      rect.width = elRect.width;
      rect.height = elRect.height;
      rect.appWidth = appRect.width;
      rect.appHeight = appRect.height;
      this.$emit('select',{rect,todo});
      console.log(app);
      console.log(appRect);
      console.log(elRect);
      console.log(rect);
    }
  }
</script>

<style lang="scss" scoped>
.todo{
     flex:1;
  margin: 0 8px;
  border-radius: 8px;
    background-color: white;
    color: #666;
    overflow: hidden;
    box-shadow: 0 5px 5px rgba(0,0,0,0.2);
    & .todo_selected{
      visibility: hidden;
    };
    > .todo_top{
      display: flex;
      justify-content: space-between;
      padding: 20px;
      height: 44px;
      align-items: flex-start;
      transform: translate3d(0, 0, 0);
      > .todo_icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 44px;
        height: 44px;
        font-size: 18px;
        border: 1px solid #eee;
        border-radius: 100%;
      }
      > .todo_menu{
        color: #eee;
      }
    }
    > .todo_main {
      padding: 0 20px;
      margin-top: 200px;
      > .todo_tips {
        opacity: 0.6;
        font-size: 13px;
        font-weight: 600;
      }
      > .todo_title {
        margin-top: 6px;
        font-size: 32px;
      }
      > .todo_progress {
        display: flex;
        align-items: center;
        margin-top: 30px;
        > .todo-progress_line {
          flex: 1;
          height: 3px;
          background-color: #eee;
          margin-right: 10px;

          > i {
            display: block;
            height: 100%;
            transition: all 0.3s ease;
          }
        }

        > .todo-progress_percentage {
          font-size: 13px;
        }
      }
    }
  }
</style>