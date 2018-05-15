<template>
  <section class="tags">
    <div>
      <span class="tag" v-for="tag in tagList" v-bind:key="tag" @click="getArticleByTag(tag)">
        {{tag}}
      </span>
    </div>
    <div v-for="article in articleList" v-bind:key="article._id">
      {{article.title}}
      {{article.name}}
    </div>
  </section>
</template>

<script>
import articleResource from '../resourse/article.resource'
export default {
  name: 'Tags',
  data () {
    return {
      tagList: [],
      articleList: []
    }
  },
  methods: {
    getArticleByTag: (tag) => {
      articleResource.getArticleByTag(tag).then((response) => {
        this.articleList = response.content
      })
    }
  },
  created: function () {
    articleResource.getTags().then((response) => {
      console.log(response)
      this.tagList = response.content
    })
  }
}
</script>
<style scoped>
  .tag{
    color: white;
    background-color: cadetblue;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    padding: 5px 20px;
    margin: 20px;
    cursor: pointer;
  }
  .tag:hover {
    background-color: darkcyan;
  }
</style>
