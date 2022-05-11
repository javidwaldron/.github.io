<template>
  <div class="app-cont">
    <sidebar></sidebar>
    <nuxt/>
  </div>
</template>

<script>
  import sidebar from '../components/sidebar.vue';
  
  export default {
    head: {
      title: 'starter',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', content: "Nuxt.js project" }
      ],
      link: [
        { 
         rel: 'icon', 
         type: 'image/x-icon', 
         href: 'https://cdn.gomix.com/2d2e28d2-e17b-4934-a643-b1c5ba787a0b%2Ffavicon.ico' 
        }
      ]
    },
    mounted() {},
    components: {
      sidebar
    }
  }
</script>
<style lang="scss" scoped>
  .app-cont {
    display: grid;
    grid-template-columns: 1fr minmax(1144px, 1fr);
  }
</style>