<template>
  <div class="app" :class="{'viewing-work' : $nuxt.$route.name.includes('work')}">
    <transition name="fade" mode="out-in">
      <topnav v-if="loaded"/>
    </transition>
    <div class="app-cont">
      <transition name="fade" mode="out-in">
        <sidebar v-if="loaded"></sidebar>
      </transition>
      <transition name="fade" mode="out-in">
        <nuxt />
      </transition>
      <smallfooter v-if="isMobile" />
    </div>
  </div>
</template>

<script>
  import sidebar from '../components/sidebar.vue';
  import topnav from '../components/topnav.vue';
  import smallfooter from '../components/footer.vue';
  
  export default {
    head() {
      return {
        title: 'Javid Waldron',
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { name: 'theme', content: '#27C9ED' },
          { hid: 'description', content: "Multi-disciplinary artist & graphic designer, based in Boston." },
          { hid: 'keywords', content: 'graphic artist, 3d artist, graphic design, 3d modeling, javid, javid waldron, waldron, art' },
          { hid: 'og-url', property: 'og:url', content: 'https://javidwaldron.works' },
          { hid: 'og-type', property: 'og:type', content: 'website' },
          { hid: 'og-title', property: 'og:title', content: 'Javid Waldron' },
          { hid: 'og-desc', property: 'og:description', content: 'Multi-disciplinary artist & graphic designer, based in Boston.' },
          { hid: 'og-image', property: 'og:image', content: 'https://cdn.glitch.global/c2f99bc4-f921-4cee-90b5-df019f304eee/summary_large_card%20-%20main%20alt.jpg?v=1658427680573' },
          { hid: 'og-image', property: 'og:image:width', content: '600' },
          { hid: 'og-image', property: 'og:image:height', content: '315' },
          { hid: 't-type', name: 'twitter:card', content: 'summary_large_image' },
          { hid: 't-title', name: 'twitter:title', content: 'Javid Waldron' },
          { hid: 't-desc', name: 'twitter:description', content: 'Multi-disciplinary artist & graphic designer, based in Boston.' },
          { hid: 't-image', property: 'twitter:image', content: 'https://cdn.glitch.global/c2f99bc4-f921-4cee-90b5-df019f304eee/summary_large_card%20-%20main%20alt.jpg?v=1658427680573' }
        ],
        link: [
          { 
           rel: 'icon', 
           type: 'image/x-icon', 
           href: 'https://cdn.glitch.global/c2f99bc4-f921-4cee-90b5-df019f304eee/favicon.png?v=1652244090700' 
          }
        ]
      }
    },
    data() {
      return {
        loaded: false,
        prefersDark: false,
        isMobile: false
      }
    },
    mounted() {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        this.prefersDark = event.matches ? true : false;
      });
      this.loaded = true;
    },
    created(){
      console.clear();
      if (process.browser){
        this.isMobile = window.outerWidth < 786;
      }
    },
    methods: {
      checkDeviceTheme() {
        // document.querySelectorAll('[name="theme-color"]')[0].content = window.getComputedStyle(document.documentElement).backgroundColor;
        this.prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      },
    },
    components: {
      sidebar,
      topnav,
      smallfooter
    }
  }
</script>
<style lang="scss" scoped>
  .app {
    display: grid;
    grid-template-columns: 1fr minmax(300px, 1144px) 1fr;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    @media screen and (max-width: 786px) {
      // grid-template-columns: 20px minmax(100px, 1fr) 20px;
    }
    
    &-cont {
      grid-column: 2;
      display: grid;
      grid-template-columns: 1fr minmax(320px, 640px);
      width: 100%;
      height: 100%;
      @media screen and (max-width: 786px) {
        grid-template-columns: 100%;
        grid-column: 1 / -1;
        padding: 0 20px;
      }
      > .container {
        position: relative;
        padding-bottom: 50px;
        z-index: 2;
      }
    }
    &.viewing-work {
      .app-cont {
        .sidebar {
          transform: translateX(-100%);
          grid-row: 1;
          grid-column: 1;
        }
        > .container {
          grid-column: 1 / -1;
          grid-row: 1 / -1;
          transition: 335ms ease-in-out all;
          @media screen and (max-width: 786px) {
            margin-top: 50px;
          }
        }
      }
    }
  }
  .container {
    width: 100%;
    padding: .5rem;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>