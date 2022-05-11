<template>
  <div class="sidebar">
    <nuxt-link to="/" class="btn back-btn"><icons name="arrow-left" /> back</nuxt-link>
    <h1>{{name}}</h1>
    <h4>{{title}}</h4>
    <ul class="sidebar-social">
      <li v-for="item in social" :key="item.name">
        <a :href="item.url" target="_blank">
          <icons :name="item.name" />
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
  import icons from './iconsys.vue';
  
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
      icons
    }
  }
</script>

<style lang="scss" scoped>
  h1, h4 {
    margin: 0;
  }
  .sidebar {
    position: sticky;
    top: 100px;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 100px);
    transition: 335ms ease-in-out all;
    @media screen and (max-width: 786px) {
      position: relative;
      top: 0;
      height: auto;
    }
    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      background-image: linear-gradient(to right, transparent, var(--background));
      opacity: 0;
      visibility: hidden;
      z-index:2;
    }
    &-social {
      display: flex;
      gap: 20px;
      list-style-type: none;
      margin: 0;
      padding: 1rem 0;
      font-size: 24px;
      li {
        a {
          color: currentColor;
          &:hover {
            color: var(--accent);
          }
        }
      }
    }
    .back-btn {
      position: absolute;
      top: 20px;
      right: 0;
      width: 150px;
      justify-content: flex-end;
      background: none;
      line-height: 1;
      font-size: 16px;
      font-weight: 700;
      text-transform: uppercase;
      font-family: "Barlow", sans-serif;
      transition: 335ms ease-in-out all;
      opacity: 0;
      visibility: hidden;
      transform: translateX(100%);
      z-index:3;
    }
  }
</style>
<style lang="scss">
  .viewing-work {
    .sidebar {
      &:before,
      .back-btn {
        opacity: 1;
        visibility: visible;
        ~ * {
          opacity: .2;
        }
      }
      .back-btn {
        transform: translateX(0);
        ~ * {
          opacity: .2;
        }
      }
    }
  }
</style>