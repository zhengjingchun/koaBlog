<template>
  <div id="app">
    <aside class="aside">
      <menu>
        <ul>
          <li><router-link :to="{ name: 'home'}">首页</router-link></li>
        </ul>
      </menu>
    </aside>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.aside {
  position: absolute;
  left: 0;
  width: 300px;
}
.main {
  padding-left: 350px;
}

menu ul {
  list-style: none;
}
menu ul li {
  background-color: antiquewhite;
  padding: 30px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
  position: relative;
}
</style>
