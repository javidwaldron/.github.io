<template>
  <section class="container">
    <nuxt-link to="/" class="btn">⬅️ back</nuxt-link>
    <h1>{{ $route.params.workitem }}</h1>
    <h1>{{ post.title }}</h1>
    <p>this will be a thing, I swear</p>
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
        title: `JW | Work | ${this.title}`,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: this.hid,
            name: this.name,
            content: this.content
          }
        ]
      }
    },
    data () {
      return {
        title: this.$route.params.workitem,
        hid: 'description',
        name: 'description',
        content: 'My custom description'
      }
    },
    components: {
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top:0;
      right: 100%;
      bottom: 0;
      width: 25%;
      background-image: linear-gradient(to right, transparent, var(--background));
    }
  }
</style>