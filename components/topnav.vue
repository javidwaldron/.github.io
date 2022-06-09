<template>
  <div class="topnav">
    <icons name="logo" />
  </div>
</template>

<script>
  import icons from './iconsys.vue';
  
  export default {
    data () {
      return {}
    },
    components: {
      icons
    }
  }
</script>

<style lang="scss" scoped>
  .topnav {
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    width: 100%;
    min-height: 100px;
    grid-column: 2;
    font-size: 42px;
    
    color: var(--background-offset);
    @media screen and (max-width: 786px) {
      grid-column: 1 / -1;
    }
  }
</style>