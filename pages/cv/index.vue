<template>
  <section class="container">
    <dialog class="generic-modal" v-if="modalopen">
      <form method="dialog">
        <div class="generic-modal--header">
          <h4>Résume</h4>
          <button class="btn" @click="modalToggle()">
            <icons name="close" />
          </button>
        </div>
        <div class="generic-modal--body">
          <p>The contents of this CV contain sensitive information, so the contents are stowed under lock &amp; key. If I’ve given you the password to access this, enter it below.</p>
          <label>
            <input type="password" 
                   placeholder="Résume Password" 
                   v-model="pw.content" 
                   @keyup.enter.stop="submit()" 
                   @invalid="validationMessage($event, 'Please Enter provided Password')"
                   required>
            <icons name="arrow-right" />
          </label>
          <small style="color: red;" v-if="pw.error">Please Enter provided Password</small>
        </div>
        <div class="generic-modal--footer">
          <button class="btn btn-primary btn-slim" @click="submit()">Submit</button>
        </div>
      </form>
    </dialog>
    <div v-if="valid && !pw.error">
      <embed src="./JW_CV.pdf" style="width: 100%; aspect-ratio: 3/4;" />
    </div>
    <div v-else>
      <button v-if="previouslySubmitted" class="btn btn-secondary" @click="modalToggle()">Try Again</button>
    </div>
  </section>
</template>
<script>
  import icons from '../../components/iconsys.vue';

  export default {
    head() {
      return {
        title: `JW | Resume`
      }
    },
    data () {
      return {
        modalopen: true,
        pw: {
          content: '',
          error: false
        },
        valid: false,
        previouslySubmitted: false
      }
    },
    mounted() {},
    methods: {
      modalToggle() {
        this.modalopen = !this.modalopen;
        this.previouslySubmitted = true;
      },
      submit() {
        this.validate();

        if(this.valid) {
          console.log("nice~ this works!")
          this.pw.content = '';
          this.modalToggle();
          // redirect to pdf file
        } else {
          console.log("wrong pw, but also, nice~ this works!")
        }
      },
      validate() {
        if(this.pw.content === process.env.cvpw) {
          this.valid = true
          this.pw.error = false
        } else {
          this.valid = false
          this.pw.error = true
          this.pw.content = ''
        }
      },
      validationMessage(e, message) {
        if (!e.target.validity.valid) {
          e.target.setCustomValidity(message);
        } else {
          this.pw.error = false
          e.target.setCustomValidity("");
        }
      }
    },
    components: {
      icons
    }
  }
</script>

<style lang="scss">
  .generic-modal {
    position: fixed;
    inset: 0;
    display: flex;
    border: none;
    padding: 0;
    &:before {
      content: '';
      position: fixed;
      inset: 0;
      background: var(--background);
      opacity: .7;
      z-index: 0;
    }
    form {
      position: relative;
      display: grid;
      grid-auto-rows: 1fr auto 1fr;
      width: 100%;
      max-width: 600px;
      border: 1px solid var(--border-color);
      border-radius: 8px;
      background-color: var(--background);
      // box-shadow: 0 6px 12px -3px rgba(0,0,0,0.2);
      z-index: 1;
    }

    &--header,
    &--footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      user-select: none;
    }

    &--header {
      font-size: 18px;
      border-bottom:  1px solid var(--border-color);
      h4 {
        line-height: 1;
        margin: 0;
        padding: 0 !important;
      }
      .btn {
        padding: .5rem;
        color: currentColor;
        .generic-icon {
          font-size: 1.3rem;
        } 
      }
    }
    &--body {
      position: relative;
      padding: 1rem;
      &.handle-overflow {
        max-height: 65vh;
        overflow-y: auto;
      }
      label {
        .generic-icon {
          position: absolute;
          top:0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          aspect-ratio: 1/1;
        }
        input:invalid {
          + .generic-icon {
            color: red;
          }
        }
      }
    }
    &--footer {
      justify-content: flex-end;
      border-top:  1px solid var(--border-color);
    }
  }
</style>