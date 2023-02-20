<template>
  <button class="button" :class="{'button_block': variant === 'block', 'button_secondary': variant === 'secondary'}">
    {{ text }}
  </button>
</template>
<script>
export default {
  name: 'ButtonUI',
  props: {
    text: String,
    variant: String,
  },
};
</script>
<style lang="scss">
.button {
  text-transform: uppercase;
  color: #fff;
  background: #264653;
  padding: 15px 25px;
  outline: none 0;
  border: 0;
  cursor: pointer;
  display: inline-block;
  font-weight: 700;
  &_block {
    display: block;
    width: 100%;
  }
  &_secondary {background: #FFB700; color: #264653;}
}
</style>
