<template>
  <section class="container about-container">
    <h2>Who is Javid?</h2>
    <p>As a multi-disciplinary artist based in Boston, I’ve always been a student of art, venturing in mediums outside of my comfort zone to better hone my craft. My focus has been centered towards 3D scene modeling, understanding the intricacies of Blender, Unity, and the like.</p>
    <p>Though I’ve only been doing 3D art for the better half of the past year, I feel that I’ve come a long way on this journey. There is always room for improvement & growth, so if you’re looking for a jack of all trades, don’t hesitate to reach out on social, or the link in the navigation.</p>
    <icons name="logo" />
  </section>
</template>
<script>
  import icons from '../../components/iconsys.vue';
  export default {
    head() {
      return {
        title: `JW | About`
      }
    },
    data () {
      return {
        posts : null
      }
    },
    components: {
      icons
    }
  }
</script>

<style lang="scss">
  .about-container {
    .generic-icon {
      font-size: 56px;
    }
  }
</style>