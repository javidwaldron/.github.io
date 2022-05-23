<template>
  <section class="container contact-container">
    <h2>{{formSubmitted ? 'Thank You' : 'Let’s Work Together'}}</h2>
    <transition name="fade" mode="out-in">
      <p v-if="formSubmitted">Thanks for getting in touch! I'll respond as quickly as humanly possible</p>
    </transition>
    <transition name="fade" mode="out-in">
      <p v-if="!formSubmitted">Looks like you saw something you liked 😏 Let’s chat! Feel free to utilize the form below, though if you prefefer email instead, you can to so through <a href="mailto:javidwaldron@gmail.com">javidwaldron@gmail.com</a></p>
    </transition>
    <form action="mailto:javidwaldron@gmail.com" method="GET" enctype="text/plain" @submit.prevent="submit()" v-if="!formSubmitted">
      <input @input="validator('name')" name="subject" type="text" placeholder="Name" v-model="recipientName.val" required :class="{ hasError: recipientName.error}" />
      <input @input="validator('email')" name="" type="text" placeholder="Email" v-model="recipientEmail.val" required :class="{ hasError: recipientEmail.error}" />
      <textarea @input="validator('message')" name="body" placeholder="Whats up" rows="6" v-model="recipientMessage.val" required :class="{ hasError: recipientMessage.error}"></textarea>
      <p v-if="recipientName.error || recipientEmail.error || recipientMessage.error" class="error-message">
        <ul>
          <transition name="fade" mode="out-in">
            <li v-if="recipientName.error">{{ recipientName.val.length > 1 ? recipientName.val + ' is not a valid name' : 'Please Enter a Name' }}</li>
          </transition>
          <transition name="fade" mode="out-in">
            <li v-if="recipientEmail.error">{{  recipientEmail.val.length > 1 ? recipientEmail.val + ' is not a valid email' : 'Please Enter an Email address'}}</li>
          </transition>
          <transition name="fade" mode="out-in">
            <li v-if="recipientMessage.error">{{ recipientMessage.val.length > 1 ? 'Message is too short. Something longer than 10 characters.' : 'Please Enter a message' }}</li>
          </transition>
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
      .error-message {
        position: relative;
        display: flex;
        align-items: flex-start;
        width: 100%;
        margin: 0;
        &:before {
          content:'errors: ';
          font-size: 10px;
          padding: 3px 5px;
          font-weight: 700;
          text-transform: uppercase;
          color: red;
        }
        ul {
          display: flex;
          flex-wrap: wrap;
          list-style-type: none;
          gap: 5px;
          padding: 0;
          margin: 0;
          li {
            font-size: 10px;
            background-color: red;
            color: white;
            font-weight: 700;
            padding: 3px 5px;
            border-radius: 5px;
          }
        }
      }
    }
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
    }
  }
  
</style>