<template>
  <section class="container">
    <div class="work">
      <div class="block"></div>
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
    padding: 40px 10px;
    .block {
      display: block;
      width: 100%;
      height: 300px;
      background-color: var(--accent);
    }
  }
</style>