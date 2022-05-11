<template>
  <section class="container">
    <NuxtLink class="" to="/" class="btn">⬅️ back</NuxtLink>
    <h1>{{ $route.params.workitem }}</h1>
    <p>this will be a thing, I swear</p>
  </section>
</template>

<script>
  
  export default {
    head() {
      return {
        title: `JW | Work | ${this.title}`,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: this.hid,
            name: this.name,
            content: this.content
          }
        ]
      }
    },
    data () {
      return {
        title: this.$route.params.workitem,
        hid: 'description',
        name: 'description',
        content: 'My custom description'
      }
    },
    components: {
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top:0;
      right: 100%;
      bottom: 0;
      width: 25%;
      background-image: linear-gradient(to right, transparent, var(--background));
    }
  }
</style>