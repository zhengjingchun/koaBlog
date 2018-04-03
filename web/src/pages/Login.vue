<template>
  <div>
    <input v-model="user.name" type="text" placeholder="请输入姓名"/>
    <input v-model="user.password" type="password" placeholder="请输入密码"/>
    <button @click="login">登录</button>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      user: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    login: function () {
      console.log(this.user)
      this.$ajax({
        method: 'post',
        url: 'http://localhost:3000/login',
        data: this.user
      })
    }
  }
}
</script>
<style>

</style>
