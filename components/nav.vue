<template>
  <nav>
    <ul class="sidebar-nav">
      <li v-for="(link, idx) in $router.options.routes.reverse()">
        <NuxtLink :to="link.path">{{ link.name === "index" ? "Work" : link.name }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
  nav {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    flex-grow: 1;
  }
  .sidebar-nav {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style-type: none;
    
    li {
      display: inline-block;
      width: 100%;
      max-width: 140px;
      
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