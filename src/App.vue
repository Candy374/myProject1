<template>
  <div id="app">
    <img src="./assets/logo.png">

    <h3>Message: {{ msg }}</h3>
    <h2>so, the tag <span class="red"> {{'<' +  'script src="/build.js"><' +  '/script>'}}</span> must in index.html</h2>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Finally Success!'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
  .red {
    background: pink;
  }
</style>
