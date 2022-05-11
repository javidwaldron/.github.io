<template>
  <nav>
    <ul>
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

<style lang="scss"></style>