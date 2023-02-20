<template>
  <textarea :placeholder="placeholder" class="input" rows="10" />
</template>
<script>
export default {
  name: 'TextArea',
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