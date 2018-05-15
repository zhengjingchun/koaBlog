<template>
  <section class="archive">
    <div v-for="article in archiveList" v-bind:key="article._id">
      {{article.title}}
      {{article.name}}
    </div>
  </section>
</template>

<script>
import articleResource from '../resourse/article.resource'
export default {
  name: 'Archive',
  data () {
    return {
      archiveList: []
    }
  },
  created: function () {
    articleResource.getArchive().then((response) => {
      console.log(response)
      this.archiveList = response.content
    })
  }
}
</script>
