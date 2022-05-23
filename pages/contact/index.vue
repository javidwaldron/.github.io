<template>
  <section class="container contact-container">
    <h2>Let’s Work Together</h2>
    <p v-if="!formSubmitted">Looks like you saw something you liked 😏 Let’s chat! Feel free to utilize the form below, though if you prefefer email instead, you can to so through <a href="mailto:javidwaldron@gmail.com">javidwaldron@gmail.com</a></p>
    <form action="mailto:javidwaldron@gmail.com" method="GET" enctype="text/plain" @submit.prevent="submit()" v-if="!formSubmitted">
      <input name="subject" type="text" placeholder="Name" v-model="recipientName.val" required />
      <input name="" type="text" placeholder="Email" v-model="recipientEmail.val" required />
      <textarea name="body" placeholder="Whats up" rows="6" v-model="recipientMessage.val" required></textarea>
      <button type="submit" value="send" class="btn btn-primary">Send <icons name="arrow-right" /></button>
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
        recipientName: {
          val: '',
          error: false
        },
        recipientEmail: {
          val: '',
          error: false
        },
        recipientMessage: {
          val: '',
          error: false
        },
        formSubmitted: false
      }
    },
    methods: {
      submit() {
        let isEmailValid = this.recipientEmail.val.length > 0 && this.recipientEmail.val.indexOf('@') > 0 && this.recipientEmail.val.indexOf('@') < this.recipientEmail.val.indexOf('.');
        let isNameValid = this.recipientName.val.length > 2;
        let isMessageValid = this.recipientMessage.val.length > 10;
        
        if (isEmailValid && isNameValid && isMessageValid) {
          const reachingOut = {
            id: Math.floor(Math.random() * 100000),
            name : this.recipientName,
            email : this.recipientEmail,
            message : this.recipientMessage
          }
          this.$emit('client-data', reachingOut)
          this.recipientName = ''
          this.recipientEmail = ''
          this.recipientMessage = ''
          this.formSubmitted = true
        }
      },
      validator(source) {
        let isEmailValid = this.recipientEmail.val.length > 0 && this.recipientEmail.val.indexOf('@') > 0 && this.recipientEmail.val.indexOf('@') < this.recipientEmail.val.indexOf('.');
        let isNameValid = this.recipientName.val.length > 2;
        let isMessageValid = this.recipientMessage.val.length > 10;
        switch(source) {
          case 'name':
            isEmailValid ? this.recipientName.error = true : this.recipientName.error = false
            break;
          case 'email':
            isEmailValid ? this.recipientEmail.error = true : this.recipientEmail.error = false
            break;
          case 'message':
            isMessageValid ? this.recipientMessage.error = true : this.recipientMessage.error = false
            break
          default:
            break;
        }
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