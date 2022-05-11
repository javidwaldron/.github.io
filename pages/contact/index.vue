<template>
  <section class="container contact-container">
    <h2>Let’s Work Together</h2>
    <p>Looks like you saw something you liked 😉 Let’s chat! Feel free to utilize the form below, though if you prefefer email instead, you can to so through <a href="mailto:javidwaldron@gmail.com">javidwaldron@gmail.com</a></p>
    <form method="post">
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
      <textarea placeholder="Whats up" rows="6"></textarea>
      <button class="btn btn-primary">Send <icons name="arrow-right" /></button>
    </form>
  </section>
</template>
<script>
  import icons from '../../components/iconsys.vue';
  export default {
    head() {
      return {
        title: `JW | Contact`
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
  .contact-container {
    form {
      .btn {
        justify-content: space-between;
      }
    }
  }
</style>