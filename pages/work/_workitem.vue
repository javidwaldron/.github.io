<template>
  <div class="container">
    <NuxtLink to="/">⬅️ back</NuxtLink>
    <h1>{{ $route.params.workitem }}</h1>
    <p>this will be a thing, I swear</p>
  </div>
</template>

<script>
  
  export default {
    head: {
      title: 'work | '
    },
    data () {
      return {}
    },
    components: {
    }
  }
</script>

<style lang="scss" scoped>
  
</style>