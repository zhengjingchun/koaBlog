<template>
  <div class="page">
    <aside class="aside">
      <menu>
        <ul>
          <li v-for="(value, key) in menuList" v-bind:key="key">
            <router-link v-bind:class="{active: key===$route.name}" :to="{ name: key}">{{value}}</router-link>
          </li>
        </ul>
      </menu>
    </aside>
    <div class="main">
      <header>
        <h2>{{$route.meta.title}}</h2>
      </header>
      <router-view/>
    </div>
  </div>
</template>

<script>
import webMenu from '../util/web.menu'
export default {
  name: 'HomeModel',
  data () {
    return {
      menuList: webMenu,
      articleList: []
    }
  },
  created: function () {
  }
}
</script>
<style>
  .page {
    display: flex;
    overflow: hidden;
  }
  .aside {
    flex: 0 0 300px;
    width: 300px;
  }
  .main {
    flex: 1;
  }

  menu ul {
    list-style: none;
  }
  menu ul li {
    border-bottom: 1px solid #ddd;
  }
  menu ul li a{
    display: block;
    color: #333;
    padding: 30px;
    text-decoration: none;
  }
  menu ul li a:hover{
    font-weight: bold;
  }
  menu ul li a.active{
    background-color: aquamarine;
    padding: 30px;
  }
</style>
