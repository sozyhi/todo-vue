import Vue from 'vue'
import Vuex from 'vuex'
import {tomorrow} from "@/store/timeGetter";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        icon:'user',
        name:'Personal',
        tasks:[
          {
            id:1,
            content:'Workout',
            date:new Date('2020/3/21'),
            done:false,
            deleted:false
          },
          {
            id:2,
            content:'Makeup',
            date:new Date('2020/3/20'),
            done:false,
            deleted:false
          }
        ],
        colors: ['#ff6262', '#ffa947']
      },
      {
        icon:'suitcase',
        name:'Work',
        tasks:[
          {
            id:3,
            content:'Vuex',
            date:new Date('2020/3/18'),
            done:false,
            deleted:false
          },
          {
            id:4,
            content:'redux',
            date:new Date('2020/3/21'),
            done:false,
            deleted:false
          }
        ],
        colors: ['#5b9df9', '#47bfff']
      },
      {
        icon:'home',
        name:'Home',
        tasks:[
          {
            id:5,
            content:'Cleaning',
            date:new Date('2020/3/19'),
            done:true,
            deleted:false
          },
          {
            id:6,
            content:'Cooking',
            date:new Date('2020/3/21'),
            done:false,
            deleted:false
          }
        ],
        colors: ['#2c7d59', '#3ba776']
      }
    ] as TotalTodo,
    selected: null,
    unselect: null,
    editing: null,
    currentTodoIndex: 0,
  },
  getters:{
    currentTodo(state){
      return state.todos[state.currentTodoIndex]
    },
    todayTasks(state){
      const tasks: { id: number; content: string; date: Date; done: boolean; deleted: boolean; }[] = [];
      state.todos.forEach(todo => {
        todo.tasks.forEach(task => {
          if (task.date < tomorrow && !task.done && !task.deleted){
            tasks.push(task)
          }
        });
      });
      return tasks
    },
    bgGradient(state,getters){
      let bg_gradient = ``;
      const colorBottom = `color-stop(30%, ${getters.currentTodo.colors[0]})`;
      const colorTop = `to(${getters.currentTodo.colors[1]})`;
      bg_gradient = `-webkit-gradient(linear, left bottom, left top, ${colorBottom}, ${colorTop})`;
      return bg_gradient;

    }
  },
  mutations: {
    // selectTodo(state,selected){
    //   state.unselect = null;
    //   state.selected = selected;
    // },
    // unselectTodo(state,selected){
    //   state.unselect = state.selected;
    //   state.selected = null;
    // },
    nextTodo(state){
      if(state.currentTodoIndex < state.todos.length - 1){
        state.currentTodoIndex++
      }
    },
    prevTodo(state){
      if(state.currentTodoIndex > 0){
        state.currentTodoIndex--
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
