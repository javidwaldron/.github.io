<template>
  <div class="sidebar">
    <h1>{{name}}</h1>
    <h4>{{title}}</h4>
    <ul class="sidebar-social">
      <li v-for="item in social" :key="item.name">
        <a :href="item.url">
          {{item.name}}
          <glyph :name="item.name" />
        </a>
      </li>
    </ul>
    <navigation />
    <smallfooter />
  </div>
</template>

<script>
  import navigation from './nav.vue';
  import smallfooter from './footer.vue';
  import glyph from './iconsys.vue';
  
  export default {
    data () {
      return {
        name : 'Javid Waldron',
        title: '3D Environment & Character Artist',
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
      smallfooter,
      glyph
    }
  }
</script>

<style lang="scss" scoped>
  h1, h4 {
    margin: 0;
  }
  .sidebar {
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 40px 0;
    &-social {
      display: flex;
      gap: 20px;
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
  }
</style>