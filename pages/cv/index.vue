<template>
  <dialog class="generic-modal" v-if="modalopen">
    <form method="dialog">
      <div class="generic-modal--header">
        <h3>Resume</h3>
        <button class="btn btn-default-borderless btn-square btn-rounded" @click="close()">&times;</button>
      </div>
      <div class="generic-modal--body">
        <p>The contents of this CV contain sensitive information, so the contents are stowed under lock &amp; key. If I’ve given you the password to access this, enter it below.</p>
        <label>
          <input type="text" placeholder="put text in me daddy" v-model="pw">
        </label>
      </div>
      <div class="generic-modal--footer">
        <button class="btn btn-primary">Submit</button>
      </div>
    </form>
  </dialog>
</template>
<script>
export default {
  head() {
    return {
      title: `JW | Resume`
    }
  },
  data () {
    return {
      modalopen: true,
      pw: ''
    }
  },
  mounted() {
  },
  methods: {
    close() {
      this.modalopen = !this.modalopen
    }
  }
}
</script>

<style lang="scss">
  .generic-modal {
    position: absolute;
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
  /*     grid-auto-rows: auto 1fr auto; */
      grid-auto-rows: 1fr auto 1fr;
      width: 100%;
      max-width: 600px;
      border: 1px solid #eee;
      border-radius: 8px;
      background-color: var(--background);
      box-shadow: 0 6px 12px -3px rgba(0,0,0,0.2);
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
      border-bottom:  1px solid #eee;
      * {
        line-height: 1;
        margin: 0;
        padding: 0 !important;
      }
      button {
        font-size: 1.5rem;
      }
    }
    &--body {
      position: relative;
      padding: 1rem;
      &.handle-overflow {
        max-height: 65vh;
        overflow-y: auto;
      }
    }
    &--footer {
      justify-content: flex-end;
      border-top:  1px solid #eee;
    }
  }
</style>