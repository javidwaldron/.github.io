<template>
  <section class="container work-container">
    <h1>{{ post.title }}</h1>
    <div class="post-body" v-html="post.html"/>
    <ul class="tags-list">
      <li class="tags-list--tag" v-for="tag in post.tags">
        <nuxt-link :to="'/tag/' + tag.slug">
          {{tag.name}}
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
  import { getSinglePost } from '../../api/posts';
  
  export default {
    async asyncData ({ params }) {
      const post = await getSinglePost(params.slug);
      return { 
        post: post 
      }
    },
    head() {
      return {
        title: `JW | Work | ${this.post.title}`,
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
      return {}
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
    .tags-list {
      &--tag {}
    }
  }
</style>