<template>
  <dialog class="zs-modal" open>
    <form method="dialog">
      <div class="zs-modal--header">
        <h2>Greetings, one and all!</h2>
        <button class="btn btn-default-borderless btn-square btn-rounded">&times;</button>
      </div>
      <div class="zs-modal--body">
        <label help-text="You should probably write something useless here">Input Label
          <input type="text" placeholder="put text in me daddy">
        </label>
      </div>
      <div class="zs-modal--footer">
        <button class="btn btn-default">Cancel</button>
        <button class="btn btn-primary">Alright</button>
      </div>
    </form>
  </dialog>
</template>
<script>
export default {
  data () {
    return {
      posts : null
    }
  }
}
</script>

<style lang="scss">
  .zs-modal {
  display: flex;
  border: 1px solid #eee;
  border-radius: 8px;
  background-color: var(--background);
  padding: 0;
  box-shadow: 0 6px 12px -3px rgba(0,0,0,0.2);
  &::backdrop {
    background: rgba(0,0,0,.7);
  }
  form {
    display: grid;
/*     grid-auto-rows: auto 1fr auto; */
    grid-auto-rows: 1fr auto 1fr;
    width: 100%;
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
      font-size: inherit !important;
      margin: 0;
      padding: 0 !important;
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