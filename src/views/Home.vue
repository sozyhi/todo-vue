<template>
  <div class="home" :style="{backgroundImage:`${bgGradient}`}">
    <nav-bar :title="`TODO`" :right="`search`" :left="`bars`"/>
    <avatar/>
    <todo-list/>
  </div>
</template>

<script  lang="ts">
  import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Avatar from "@/components/Avatar.vue";
  import TodoList from "@/components/TodoList.vue";

@Component({components:{TodoList, Avatar}})

export default class Home extends Vue{
  get bgGradient(){
    return this.$store.getters.bgGradient;
    }

}
</script>
<style lang="scss" scoped>
  .home{
    height: 100vh;
    width: 100vw;
    color: white;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
</style>
