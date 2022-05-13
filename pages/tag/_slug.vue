<template>
  <section class="container tag-container">
    <h2>Work tagged as <span style="color: var(--accent);">{{ tag }}</span></h2>
    <ul class="block-cont" v-if="posts.length > 0">
      <li v-for="(work, idx) in posts" class="block" :style="'background-image: url(' + work.feature_image + ')'">
        <nuxt-link class="block-anchor" 
                   :key="work.name+idx"
                   :to="'../work/' + work.slug">
          <div class="block-meta">
            <div class="block-meta-title">
              <h5>{{work.title}}</h5>
            </div>
            <icons name="arrow-right" />
          </div>
        </nuxt-link>
      </li>
    </ul>
    <p v-else>There don't seem to be any posts tagged as {{tag}}</p>
  </section>
</template>

<script>
  import { getPosts } from '../../api/posts';
  import icons from '../../components/iconsys.vue';
  
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
    mounted() {
      console.log(this.filteredWork)
    },
    components: {
      icons
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
      &-cont {
        list-style-type: none;
        display: grid;
        grid-template-columns: 100%;
        margin: 0;
        padding: 0;
      }
    }
  }
</style>