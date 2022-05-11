<template>
  <nav>
    <ul class="sidebar-nav">
      <li v-for="(link, idx) in $router.options.routes.reverse()">
        <NuxtLink :to="link.path">{{link.name}}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  data () {
    return {
      posts : null
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
  }
  .sidebar-nav {
    display: grid;
    grid-template-columns: 1fr;
    padding: 0;
    margin: 0;
    list-style-type: none;
    
    li {
      position: relative;
      display: inline-block;
      max-width: 140px;
      
      a {
        width: 100%;
        padding: 10px;
        margin: 5px 0;
        font-size: 18px;
        text-transform: capitalize;
        text-decoration: none;
        border-radius: 8px;
        &[aria-current] {
          color: var(--accent);
          background-color: var(--background-offset);
        }
      }
    }
  }
</style>