<template>
  <div class="nav-bar">
    <span @click="$emit(left)">
      <i :class="[`fa`,`fa-${navLeft}`]"></i>
    </span>
    <h1>{{navTitle}}</h1>
    <span @click="$emit(right)">
      <i :class="[`fa`,`fa-${navRight}`]"></i>
    </span>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator'

  @Component
  export default class NavBar extends Vue {
    @Prop({default: '' ,type: String}) title!: string;
    @Prop({default: 'chevron-left',type: String}) right!: string;
    @Prop({default: 'ellipsis-v',type: String}) left!: string;

    navTitle = this.title;
    navLeft = this.left;
    navRight = this.right;
  }
</script>

<style lang="scss" scoped>
  .nav-bar {
    display: flex;
    align-items: center;
    height: 44px;
    font-size: 15px;
    z-index: 1;

    > h1 {
      display: flex;
      justify-content: center;
      flex-grow: 1;
      font-weight: 300;
    }

    > span {
      padding: 0 20px;
    }
  }
</style>