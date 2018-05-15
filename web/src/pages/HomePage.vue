<template>
  <section class="home">
    <div v-for="article in articleList" v-bind:key="article._id">
      {{article.title}}
      {{article.name}}
    </div>
  </section>
</template>

<script>
import articleResource from '../resourse/article.resource'
export default {
  name: 'HomePage',
  data () {
    return {
      articleList: [],
      pageNo: 1,
      pageSize: 10
    }
  },
  created: function () {
    articleResource.getArticles(this.pageNo, this.pageSize).then((response) => {
      console.log(response)
      this.articleList = response.content
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
