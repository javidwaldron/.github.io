<template>
  <div class="app">
    <topnav />
    <div class="app-cont">
      <sidebar></sidebar>
      <nuxt/>
    </div>
  </div>
</template>

<script>
  import sidebar from '../components/sidebar.vue';
  import topnav from '../components/topnav.vue';
  
  export default {
    head: {
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
    },
    data() {
      return {
        darkModeEnabled: false
      }
    },
    mounted() {
      this.darkModeEnabled = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
      this.checkDeviceTheme(prefersDark);
      prefersDark.addListener((e) => this.checkDeviceTheme(e));
    },
    methods: {
      checkDeviceTheme(e) {
        // document.querySelectorAll('[name="theme-color"]')[0].content = window.getComputedStyle(document.documentElement).backgroundColor;
        this.darkModeEnabled = e.matches;
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
    
    &-cont {
      grid-column: 2;
      display: grid;
      grid-template-columns: 1fr minmax(320px, 640px);
      width: 100%;
      height: 100%;
    }
  }
  .container {
    width: 100%;
    padding: .5rem;
  }
</style>