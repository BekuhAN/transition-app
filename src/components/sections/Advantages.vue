<template>
  <section class="advantages">
    <div class="container">
      <div class="row">
        <div class="col_25">
          <div class="advantages__header">3+</div>
          <div class="advantages__description">года стажа</div>
        </div>
        <div class="col_25">
          <div class="advantages__header">100K+</div>
          <div class="advantages__description">пройденого пути</div>
        </div>
        <div class="col_25">
          <div class="advantages__header">500+</div>
          <div class="advantages__description">выполненых заказов</div>
        </div>
        <div class="col_25">
          <div class="advantages__header">300+</div>
          <div class="advantages__description">допольных клиентов</div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'AdvantagesSection',
};
</script>
<style lang="scss" scoped>
.advantages {
  background: url('@/assets/image/bg-1.jpg') no-repeat;
  background-size: cover;
  padding: 200px 0;
  position: relative;
  .container {position: relative; z-index: 2;}
  &:after {
    content: '';
    position: absolute;
    inset: 0;
    background: #264653;
    opacity: 0.8;
  }
  &__header {
    color: #ffb700;
    font-size: 75px;
    text-align: center;
    line-height: 1.1;
    font-weight: 700;
  }
  &__description {
    color: #fff;
    text-align: center;
    font-weight: 700;
  }
}
</style>
