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
    postion: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    min-height: 100px;
    width: 100%;
    grid-column: 2;
    font-size: 58px;
    
    color: var(--background-offset);
  }
</style>