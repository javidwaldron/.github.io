<template>
  <section class="container">
    <div class="work">
      <div class="block">
        <nuxt-link to="/work/job01" class="btn btn-secondary">Go TO Job 01</nuxt-link>
      </div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
    </div>
  </section>
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

<style lang="scss">
  .work {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    width: 100%;
    transition: 335ms ease-in-out all;
    .block {
      display: block;
      width: 100%;
      height: 300px;
      background-color: var(--background-offset);
      transition: 335ms ease-in-out all;
      border-radius: 8px;
      overflow: hidden;
    }
  }
</style>