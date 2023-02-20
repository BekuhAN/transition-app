<template>
  <input :placeholder="placeholder" class="input" />
</template>
<script>
export default {
  name: 'InputText',
  props: {
    placeholder: String
  }
}
</script>
<style lang="scss">
  .input {
    padding: 15px 25px;
    border: 0;
    width: 100%;
  }
</style>