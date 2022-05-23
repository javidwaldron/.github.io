<template>
  <section class="container contact-container">
    <h2>Let’s Work Together</h2>
    <p v-if="!formSubmitted">Looks like you saw something you liked 😏 Let’s chat! Feel free to utilize the form below, though if you prefefer email instead, you can to so through <a href="mailto:javidwaldron@gmail.com">javidwaldron@gmail.com</a></p>
    <form action="mailto:javidwaldron@gmail.com" method="GET" enctype="text/plain" @submit.prevent="submit()" v-if="!formSubmitted">
      <input @input="validator('name')" name="subject" type="text" placeholder="Name" v-model="recipientName.val" required :class="{ hasError: recipientName.error}" />
      <input @input="validator('email')" name="" type="text" placeholder="Email" v-model="recipientEmail.val" required :class="{ hasError: recipientEmail.error}" />
      <textarea @input="validator('message')" name="body" placeholder="Whats up" rows="6" v-model="recipientMessage.val" required :class="{ hasError: recipientMessage.error}"></textarea>
      <p class="error-message">Please enter valid:
        <ul>
          <li v-if="recipientName.error">{{ recipientName.val }}</li>
          <li v-if="recipientEmail.error">{{  recipientEmail.val }}</li>
          <li v-if="recipientMessage.error">{{ recipientMessage.val }}</li>
        </ul>
      </p>
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
        
        this.validateAll();
        
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
      validateAll() {
        this.validator('name')
        this.validator('email')
        this.validator('message')
      },
      validator(source) {
        let isEmailValid = this.recipientEmail.val.length > 0 && this.recipientEmail.val.indexOf('@') > 0 && this.recipientEmail.val.indexOf('@') < this.recipientEmail.val.indexOf('.');
        let isNameValid = this.recipientName.val.length > 2;
        let isMessageValid = this.recipientMessage.val.length > 10;
        switch(source) {
          case 'name':
            isNameValid ? this.recipientName.error = false : this.recipientName.error = true;
            break;
          case 'email':
            isEmailValid ? this.recipientEmail.error = false : this.recipientEmail.error = true;
            break;
          case 'message':
            isMessageValid ? this.recipientMessage.error = false : this.recipientMessage.error = true;
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
      .hasError {
        box-shadow: 0 0 0 3px red;
      }
    }
  }
</style>