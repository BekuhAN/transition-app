<template>
  <div class="orders">
    <div class="orders__header">
      <h1 class="orders__title">Заявки</h1>
      <ButtonUI :text="'Сформировать отчёт'" />
    </div>
    <div class="orders__content">
      <RowEdit :filedsTitle="filedsTitle" :orders="orders" />
    </div>
  </div>
</template>
<script>
import ButtonUI from './../ui-kit/Button.vue';
import RowEdit from './../RowEdit.vue';
import axios from 'axios';

export default {
  name: 'AdminOrders',
  components: {
    ButtonUI,
    RowEdit,
  },
  data() {
    return {
      orders: [],
      filedsTitle: [
        {
          id: 1,
          name: 'Клиент',
        },
        {
          id: 2,
          name: 'Стоимость, руб.',
        },
        {
          id: 3,
          name: 'Статус',
        },
        {
          id: 4,
          name: '№ Путевого листа',
        },
      ],
    };
  },
  async beforeMount() {
    const { data } = await axios.get(
      'http://localhost:3000/orders?[_embed]=clients&_expand=status'
    );
    this.orders = JSON.parse(JSON.stringify(data));
  },
};
</script>
<style lang="scss" scoped>
.orders {
  max-width: 1480px;
  width: 100%;
  background: #fff;
  padding: 55px;
  border-radius: 10px;
  text-align: left;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    color: #264653;
    font-size: 32px;
    font-weight: 700;
  }

  &__content {
    margin-top: 50px;
  }
}
</style>
