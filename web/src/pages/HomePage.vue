<template>
  <section class="home">
    <div v-for="article in articleList" v-bind:key="article._id">
      {{article.title}}
      {{article.name}}
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      articleList: []
    }
  },
  created: function () {
    this.$ajax.get('http://localhost:3000/getArticles', {
      pageNo: 1,
      pageSize: 10
    }).then((response) => {
      console.log(response)
      this.articleList = response.data.content
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
