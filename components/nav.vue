<template>
  <nav>
    <ul>
      <li><NuxtLink :to="link.path" v-for="(link, idx) in $router.options.routes">{{link.name}}</NuxtLink></li>
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