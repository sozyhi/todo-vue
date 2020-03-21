<template>
  <div class="avatar">
    <div class="avatar_pic">
      <img src="../assets/avatar_pic.png" alt="avatar_pic loading">
    </div>
    <h2 class="avatar_greet"
        v-if="open_greet=(
          open_time<12?'Morning':
          open_time<19?'Afternoon':
          'Evening')">
      Good {{open_greet}}, Sozy.
    </h2>
    <p class="avatar_tip">Looks like feel good.<br/>You have <b>{{todayTasks.length}}</b> tasks to do today.</p>
    <p class="avatar_date">TODAY : {{today}} </p>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator'
  import {now, today} from "@/store/timeGetter";

  @Component
  export default class Avatar extends Vue {
    today= today.toDateString();
    open_greet = '';
    open_time = now.getHours();
    get todayTasks(){
      return this.$store.getters.todayTasks;
    }

  }
</script>

<style lang="scss" scoped>
.avatar{
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height:300px;
  padding: 0 30px;
  > .avatar_pic{
    height: 44px;
    width: 44px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow:0 5px 10px rgba(0,0,0,0.2) ;
    > img{
      display: block;
      height: 100%;
      width: 100%;
    }
  }
  > .avatar_greet{
    margin-top: 32px;
    padding: 0 6px;
    font-size: 24px;
    letter-spacing: 1px;
    font-weight: 300;
  }
  > .avatar_tip {
    padding: 0 6px;
    margin-top: 16px;
    font-size: 13px;
    font-weight: 100;
    line-height: 1.6em;
    opacity: 0.8;
  }
  > .avatar_date{
    margin-top: 44px;
    margin-bottom: 16px;
    font-size: 14px;
    padding: 0 6px;
  }
}
</style>