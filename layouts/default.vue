<template>
  <div class="app" :class="{'viewing-work' : $nuxt.$route.name.includes('work')}">
    <topnav />
    <div class="app-cont">
      <sidebar></sidebar>
      <transition name="fade" mode="out-in">
        <nuxt/>
      </transition>
    </div>
  </div>
</template>

<script>
  import sidebar from '../components/sidebar.vue';
  import topnav from '../components/topnav.vue';
  
  export default {
    head() {
      return {
        title: 'Javid Waldron',
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', content: "Nuxt.js project" }
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
        prefersDark: false
      }
    },
    mounted() {
      this.prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
      this.checkDeviceTheme(prefersDark);
      prefersDark.addListener((e) => this.checkDeviceTheme(e));
    },
    methods: {
      checkDeviceTheme(e) {
        // document.querySelectorAll('[name="theme-color"]')[0].content = window.getComputedStyle(document.documentElement).backgroundColor;
        this.prefersDark = e.matches;
      },
    },
    components: {
      sidebar,
      topnav
    }
  }
</script>
<style lang="scss" scoped>
  .app {
    display: grid;
    grid-template-columns: 1fr minmax(786px, 1144px) 1fr;
    width: 100%;
    height: 100%;
    overflow: hidden;
    @media screen and (max-width: 786px) {
      grid-template-columns: 20px minmax(100px, 1fr) 20px;
    }
    
    &-cont {
      grid-column: 2;
      display: grid;
      grid-template-columns: 1fr minmax(320px, 640px);
      width: 100%;
      height: 100%;
      @media screen and (max-width: 786px) {
        grid-template-columns: 100%;
      }
      > .container {
        position: relative;
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