<template>
  <section class="container">
    <div class="work">
      <div class="block" v-for="post in posts" :style="'background-image: url(' + post.feature_image + ');'">
        <nuxt-link :to="'/work/' + post.slug" class="btn">Go {{post.title}}</nuxt-link>
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
      console.log(posts)
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
      position: relative;
      display: flex;
      align-items: flex-end;
      width: 100%;
      height: 300px;
      padding: 1rem;
      background-color: var(--background-offset);
      background-size: cover;
      background-position: center;
      background-repeat: none;
      transition: 335ms ease-in-out all;
      border-radius: 8px;
      overflow: hidden;
      &:before {
        pointer-events: none;
        content:'';
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: 100px;
        background-image: linear-gradient(to top, var(--background), transparent);
      }
    }
  }
</style>