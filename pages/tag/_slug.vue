<template>
  <section class="container work-container">
    <h1>{{ tag }}</h1>
    <ul>
      <li v-for="item in post.tags">{{tag.name}}</li>
    </ul>
  </section>
</template>

<script>
  import { getPosts } from '../../api/posts';
  
  export default {
    async asyncData () {
      const posts = await getPosts();
      return { 
        posts: posts 
      }
    },
    head() {
      return {
        title: `JW | Tagged | ${this.searchedTag}`,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: this.post.id,
            name: this.post.meta_title,
            content: this.post.meta_description
          }
        ]
      }
    },
    data () {
      return {
        tag: this.$route.params.slug
      }
    },
    computed: {
      filteredWork() {
        let search = this.tag;
        return this.posts.filter((work)=> {
          let tags = work.tags;
          
          for(let tag of tags) {
            if(!tags.includes(search)) {
              return false;
            }
          }
          
          return true;
        });
      },
      sortedTags() {}
    },
    mounted() {}
  }
</script>

<style lang="scss">
  .work-container {
    position: relative;
    > h1 {
      text-align: center;
    }
    .post-body {
      iframe {
        width: 100%;
        border-radius: 8px;
      }
      
      hr {
        border-top: none;
        color: var(--border-color);
      }
      img{
        display: block;
        max-width: 100%;
        height: auto;
        border-radius: 8px;
        margin: auto;
      }
    }
  }
</style>