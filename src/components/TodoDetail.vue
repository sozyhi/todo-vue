<template>
  <transition name="show" @enter="detailEnter" @leave="detailLeave">
    <div class="todo_detail" v-if="selected">
      <nav-bar @left="unselectTodo"/>
      <todo :todo="selected.todo" :active="true" @close="unselectTodo"/>
    </div>
  </transition>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator'
  import Todo from "@/components/Todo.vue";
  @Component({
    components: {Todo}
  })
  export default class TodoDetail extends Vue {
    get selected(){
      return this.$store.state.selected;
    }
    get unselected(){
      return this.$store.state.unselected;
    }
    unselectTodo(){
      return this.$store.commit('unselectTodo')
    }

  }
</script>

<style lang="scss" scoped>

</style>