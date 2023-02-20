<template>
  <label class="input__label">
    <input class="input__checkbox" type="checkbox" :name="name" :id="id" />
    {{ label }}
    <span class="input__mark"></span>
  </label>
</template>
<script>
export default {
  name: 'CheckBox',
  props: {
    name: String,
    id: String,
    label: String,
  },
};
</script>
<style lang="scss" scoped>
.input {
  &__label {
    position: relative;
    padding-left: 38px;
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 32px;
      height: 32px;
      border: 2px solid #f4f4f4;
    }
  }
  &__checkbox {
    opacity: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    &:checked + span {
      opacity: 1;
    }
  }
  &__mark {
    position: absolute;
    opacity: 0;
    left: 38px;
    &:before,
    &:after {
      content: '';
      position: absolute;
      width: 13px;
      height: 4px;
      background: blue;
      transform: rotate(45deg);
      left: -30px;
      top: 15px;
      border-radius: 2px;
    }
    &:after {
      width: 23px;
      height: 4px;
      background: blue;
      transform: rotate(-70deg);
      left: -28px;
      top: 9px;
      border-radius: 2px;
    }
  }
}
</style>
