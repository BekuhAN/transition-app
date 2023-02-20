<template>
  <div class="promo">
    <div class="container">
      <div class="row promo_row">
        <div class="col_50">
          <p class="promo__text">
            Грузоперевозки по Краснодару и Краснодарскому краю
          </p>
        </div>
        <div class="col_40 promo_col_right">
          <CheckOrderComponent />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CheckOrderComponent from './CheckOrder.vue';

export default {
  name: 'PromoComponent',
  components: {
    CheckOrderComponent,
  },
};
</script>
<style lang="scss">
.promo {
  background: url('@/assets/image/promo.jpg');
  padding: 200px 0;
  position: relative;
  &_row {align-items: center;}
  &:after {
    content: '';
    position: absolute;
    inset: 0;
    background: #264653;
    opacity: 0.9;
  }
  &__text {
    color: #fff;
    font-size: 54px;
    font-weight: 700;
    text-align: left;
    line-height: 75px;
  }
  .container {
    position: relative;
    z-index: 10;
  }
  &_col_right {
    margin-left: auto;
  }
}
</style>
