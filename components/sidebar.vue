<template>
  <div class="sidebar">
    <h1>{{name}}</h1>
    <h4>{{title}}</h4>
    <navigation />
    <ul>
      <li v-for></li>
    </ul>
  </div>
</template>

<script>
  import navigation from '../components/nav.vue';
  export default {
    data () {
      return {
        name : 'Javid Waldron',
        title: '3D Environment &amp; Character Artist',
        social: [{
          name: 'artstation',
          url: 'https://artstation.com/javidwaldron'
        },{
          name: 'instagram',
          url: 'https://instagram.com/indigocola'
        },{
          name: 'github',
          url: 'https://github.com/javidwaldron'
        },{
          name: 'linkedin',
          url: 'https://linkedin.com/in/javidwaldron'
        }]
      }
    },
    components: {
      navigation
    }
  }
</script>

<style lang="scss"></style>