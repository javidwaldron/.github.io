<template>
  <section class="container work-container">
    <h2>Work tagged as <span style="color: var(--accent);">{{ tag }}</span></h2>
    <ul>
      <li v-for="(work, idx) in posts">
        <nuxt-link :style="'background-image: url(' + work.feature_image + ')'"
                   :key="work.name+idx"
                   :to="'../work/' + work.slug">
                   <span>{{work.title}}</span>
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
  import { getPosts } from '../../api/posts';
  
  export default {
    async asyncData ({params}) {
      const posts = await getPosts();
      const search = params.slug;
      const filteredPosts = await posts.filter((work)=> {
          let tags = work.tags;
          
          if (Array.isArray(tags) && !tags.length) {
            // empty
            console.log("array is empty?", work, tags, search)
            return false;
          } else {
            for(let tag of tags) {
              if(!tags.includes(search)) {
                return false;
              }
            }
            console.log(work, tags, search)
            return true;
          }
        });
      return { 
        posts: filteredPosts 
      }
    },
    head() {
      return {
        title: `JW | Tagged | ${this.tag}`
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
      }
    },
    mounted() {
      console.log(this.filteredWork)
    }
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