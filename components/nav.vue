<template>
  <nav>
    <ul class="sidebar-nav">
      <li v-for="(link, idx) in routes">
        <nuxt-link :to="link.path">{{ link.name === "index" ? "Work" : link.name }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>
<script>
  export default {
    data () {
      return {
        routes: [{
          name: 'Work',
          path: '/'
        },{
          name: 'about',
          path: '/about'
        },{
          name: 'Résume',
          path: '/cv'
        },{
          name: 'Reach Out',
          path: '/contact'
        }]
      }
    }
  }
</script>
<style lang="scss" scoped>
  nav {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    flex-grow: 1;
    @media screen and (max-width: 786px) {
      width: calc(100% + 40px);
      height: auto;
      flex-grow:0;
      margin-left: -20px;
      align-self: flex-start;
    }
  }
  .sidebar-nav {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style-type: none;
    @media screen and (max-width: 786px) {
      grid-template-columns: 20px repeat(4, 140px) 20px;
      grid-template-rows: 1fr;
      overflow-x: auto;
      white-space: nowrap;
      scrollbar-gutter: stable;
      padding-bottom: 15px;
      width: unset;
      
      &:before,
      &:after {
        content: '';
        display: inline-block;
      }
    }
    
    li {
      display: inline-block;
      width: 100%;
      max-width: 140px;
      user-select: none;
      
      a {
        position: relative;
        display: block;
        width: 100%;
        padding: 10px;
        font-size: 18px;
        font-weight: 700;
        color: currentColor;
        text-transform: capitalize;
        text-decoration: none;
        line-height: 1.3;
        border-radius: 8px;
        overflow: hidden;
        
        &:before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: -1;
        }
        &:hover {
          &:before {
            background-color: var(--background-offset);
            opacity: .2;
          }
        }
        &[aria-current] {
          pointer-events: none;
          color: var(--accent);
          &:before {
            background-color: var(--background-offset);
          }
        }
      }
    }
  }
</style>