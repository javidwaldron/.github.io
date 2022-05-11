<template>
  <section class="container work-container">
    <h1>{{ post.title }}</h1>
    <div class="post-body" v-html="post.html"/>
  </section>
</template>

<script>
  import { getSinglePost } from '../../api/posts';
  
  export default {
    async asyncData ({ params }) {
      const post = await getSinglePost(params.workitem);
      console.log(post)
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
      return {
        title: this.$route.params.workitem,
        hid: 'description',
        name: 'description',
        content: 'My custom description'
      }
    },
    mounted() {
      console.log(this.post)
    }
  }
</script>

<style lang="scss">
  .work-container {
    position: relative;
    &:before {
      // content: '';
      position: absolute;
      top:0;
      right: 100%;
      bottom: 0;
      width: 25%;
      background-image: linear-gradient(to right, transparent, var(--background));
    }
    .back-btn {
      position: absolute;
      top: 20px;
      right: 0;
      width: 150px;
      justify-content: flex-end;
      
      background: none;
    }
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
        color: var(--background-offset);
      }
      img{
        display: block;
        width: 100%;
        height: auto;
        border-radius: 8px;
      }
    }
  }
</style>