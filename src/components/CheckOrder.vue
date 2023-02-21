<template>
  <form @submit="showModalStatusClick" class="checkOrder">
    <p class="checkOrder__text">Отслеживание заявки</p>
    <InputText ref="order" :placeholder="'№ заявки'" />
    <div class="checkOrder__button">
      <ButtonUI
        :text="'Проверить'"
        @click="getOrder(this.$refs.order.value)"
        :variant="'block'"
      />
    </div>
    <ModalStatus />
  </form>
</template>
<script>
import ButtonUI from "./ui-kit/Button.vue";
import InputText from "./ui-kit/InputText.vue";
import ModalStatus from "./modals/ModalStatus.vue";
// import axios from 'axios';

export default {
  name: "CheckOrderComponent",
  data() {
    return {
      number: 5,
    };
  },
  components: {
    ButtonUI,
    InputText,
    ModalStatus,
  },
  methods: {
    showModalStatusClick(event) {
      event.preventDefault();
      this.$modals.show("modal-status");
    },
    getOrder(id) {
      alert(id);
    },
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
