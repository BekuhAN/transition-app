<template>
  <div class="ordersPage">
    <HeaderAdmin />
    <div class="ordersPage__content">
      <AdminOrders />
    </div>
  </div>
</template>
<script>
import HeaderAdmin from './../components/layout/admin/HeaderAdmin.vue';
import AdminOrders from './../components/admin/Orders.vue';

export default {
  name: 'OrdersView',
  components: {
    HeaderAdmin,
    AdminOrders,
  },
};
</script>
<style lang="scss">
.ordersPage {
  background: #264653;
  min-height: 100vh;
  &__content {
    padding: 0 20px;
    margin-top: 75px;
  }
}
</style>
