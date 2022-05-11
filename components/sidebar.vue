<template>
  <div class="sidebar">
    <h1>{{name}}</h1>
    <h4>{{title}}</h4>
    <navigation />
    <ul>
      <li v-for="item in social" :key="item.name"><a :href="item.url">{{item.name}}</a></li>
    </ul>
    <smallfooter />
  </div>
</template>

<script>
  import navigation from '../components/nav.vue';
  import smallfooter from '../components/footer.vue';
  
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
      navigation,
      smallfooter
    }
  }
</script>

<style lang="scss"></style>