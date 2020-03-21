<template>
  <div id="app">
    <router-view/>
  </div>

</template>

<style lang="scss">
  @import url('https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.css');
  #app {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  }
  body {
  height: 100%;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;

  }
  h1, h2, h3, h4 {
  font: inherit;
  }
  ol,ul,li{
     list-style: none;
  }

</style>
