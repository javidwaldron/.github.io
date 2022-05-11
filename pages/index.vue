<template>
  <section class="container">
    <div class="work">
      <div class="block" v-for="post in posts">
        <nuxt-link :to="'/work/' + post.slug" class="btn btn-secondary">Go {{post.title}}</nuxt-link>
      </div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
    </div>
  </section>
</template>

<script>
  import { getPosts } from '../api/posts';

  export default {
    async asyncData () {
      const posts = await getPosts();
      return { 
        posts: posts 
      }
    },
    data () {
      return {
        posts : null
      }
    }
  }
</script>

<style lang="scss">
  .work {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    width: 100%;
    transition: 335ms ease-in-out all;
    .block {
      display: block;
      width: 100%;
      height: 300px;
      background-color: var(--background-offset);
      transition: 335ms ease-in-out all;
      border-radius: 8px;
      overflow: hidden;
    }
  }
</style>