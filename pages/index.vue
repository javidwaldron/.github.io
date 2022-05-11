<template>
  <section class="container">
    <div class="work">
      <div class="block" v-for="(post, idx) in posts" :style="'background-image: url(' + post.feature_image + ');'">
        <nuxt-link class="block-anchor" :to="'/work/' + post.slug">
          <div class="block-meta">
            <div class="block-meta-title">
              <h6>{{ '0' + (idx + 1)}}</h6><h5>{{post.title}}</h5>
            </div>
            <icons name="arrow-right" />
          </div>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
  import { getPosts } from '../api/posts';
  import icons from '../components/iconsys.vue';

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
    },
    components: {
      icons
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
      width: 100%;
      height: 300px;
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
        height: 50%;
        background-image: linear-gradient(to top, var(--background), transparent);
        transition: 335ms ease-in-out all;
      }
      &:hover {
        &:before {
          height: 100%;
        }
        a {
          text-decoration: none;
          color: currentColor;
        }
        .block-meta {
          .generic-icon {
            &:before {
              transform: translate(0,0);
              opacity: 1;
            }
          }
        }
      }
      &-anchor {
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
        align-items: flex-end;
        color: var(--foreground);
        padding: 1rem;
      }
      &-meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        &-title {
          display: flex;
          align-items: center;
          gap: .5rem;
          * {
            margin: 0;
          }
        }
        .generic-icon {
          &:before {
            pointer-events: none;
            content:'';
            position: absolute;
            bottom: 0;
            right: 0;
            width: 25%;
            aspect-ratio:1/1;
            transform: translate(100%,100%);
            opacity: 0;
            background-image: radial-gradient(circle at bottom right, var(--accent), transparent 70%);
            transition: 775ms ease-in-out all;
          }
          svg {
            position: relative;
          }
        }
      }
    }
  }
</style>