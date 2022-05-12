<template>
  <section class="container tag-container">
    <h2>Work tagged as <span style="color: var(--accent);">{{ tag }}</span></h2>
    <ul class="block">
      <li v-for="(work, idx) in posts">
        <nuxt-link :style="'background-image: url(' + work.feature_image + ')'"
                   :key="work.name+idx"
                   :to="'../work/' + work.slug">
          <div class="block-meta">
            <div class="block-meta-title">
              <h6>{{ '0' + (idx + 1)}}</h6><h5>{{work.title}}</h5>
            </div>
            <icons name="arrow-right" />
          </div>
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
      
      const filteredPosts = await posts.filter((work) => {
          let tags = work.tags;
        
          if (tags.length === 0) {
            // empty
            return false;
          } else {
            console.log("array is not empty!")
            for(let tag of tags) {
              if(tag.slug == search) {
                return true;
              }
            }
            return false;
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
    },
    mounted() {
      console.log(this.filteredWork)
    }
  }
</script>

<style lang="scss">
  .tag-container {
    position: relative;
    > h1 {
      text-align: center;
    }
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