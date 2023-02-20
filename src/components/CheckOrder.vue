<template>
  <form class="checkOrder">
    <p class="checkOrder__text">Отслеживание заявки</p>

    <InputText :placeholder="'№ заявки'" />
    <div class="checkOrder__button">
      <ButtonUI :text="'Проверить'" :variant="'block'" />
    </div>
  </form>
</template>
<script>
import ButtonUI from './ui-kit/Button.vue';
import InputText from './ui-kit/InputText.vue';

export default {
  name: 'CheckOrderComponent',
  components: {
    ButtonUI,
    InputText,
  },
};
</script>
<style lang="scss">
.checkOrder {
  text-align: left;
  padding: 50px;
  background: #ffb700;
  &__text {
    text-align: left;
    margin-bottom: 35px;
    font-size: 28px;
    color: #264653;
    font-weight: 700;
  }
  &__button {
    margin-top: 35px;
  }
}
</style>
