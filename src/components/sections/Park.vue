<template>
  <SectionLayout :header="'Автопарк'" class="park" id="autopark">
    <div class="container">
      <p class="park__text">В нашем автопарке несколько машин</p>
      <div class="row">
        <div class="col_50">
          <CardItem
            :name="'Газель'"
            :weight="'2-ух'"
            :dimensions="'2x2x5'"
            :image="'auto-1.png'"
          />
        </div>
        <div class="col_50">
          <CardItem
            :name="'MAN'"
            :weight="'5-ти'"
            :dimensions="'2,45x2,8х7'"
            :image="'auto-2.png'"
          />
        </div>
      </div>
    </div>
  </SectionLayout>
</template>
<script>
import SectionLayout from './../layout/Section.vue';
import CardItem from './../Card.vue';

export default {
  name: 'SectionPark',
  components: {
    SectionLayout,
    CardItem,
  },
};
</script>
<style lang="scss">
.park {
  &__text {
    color: #264653;
    font-size: 32px;
    padding-bottom: 50px;
    margin-top: 30px;
    font-weight: 700;
  }
}
</style>
