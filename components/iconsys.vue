<template>
  <div class="generic-icon" v-html="require(`./icons/${this.fixedName}.svg?raw`)"></div>
</template>
<script>
  export default {
    props: {
      name: {
        type: String
      }
    },
    mounted() {},
    computed: {
      fixedName() {
        return this.name.toLowerCase();
      }
    }
  }
</script>
<style lang="scss">
  .generic-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  svg {
    display: block;
    color: inherit;
    height: 1em;
    width: auto;
    transition: 335ms ease-in-out all;
    .st0 {
      fill: none;
      stroke: currentColor;
      stroke-width:2;
      stroke-linecap:round;
      stroke-linejoin:round;
      &.fl {
        fill: currentColor;
      }
    }
    .fl0 {
      fill: currentColor;
      stroke: none;
      &.st {
        stroke: currentColor;
        stroke-width:2;
        stroke-linecap:round;
        stroke-linejoin:round;
      }
    }
  }
</style>