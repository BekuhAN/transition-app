<template>
  <div>
    <label v-if="!!label" class="input__label">{{ label }}</label>
    <input
      :placeholder="placeholder"
      class="input"
      :type="type ? type : 'text'"
      :class="{ input_gray: theme === 'gray' }"
    />
  </div>
</template>
<script>
export default {
  name: 'InputText',
  props: {
    placeholder: String,
    label: String,
    theme: String,
    readOnly: Boolean,
    type: String
  },
};
</script>
<style lang="scss">
.input {
  padding: 15px 25px;
  border: 0;
  width: 100%;
  &_gray {
    background: #f4f4f4;
  }
  &__label {
    margin-bottom: 10px;
    font-weight: 700;
    font-size: 18px;
    display: inline-block;
  }
}
</style>
