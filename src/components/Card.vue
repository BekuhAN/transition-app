<template>
  <article class="card">
    <h1 class="card__title">{{ name }}</h1>
    <ul class="card__listProps">
      <li>
        <span>Тонаж: до {{ weight }} тонн</span>
      </li>
      <li>
        <span>ШхВхД: {{ dimensions }}</span>
      </li>
    </ul>
    <div class="card__image">
      <img :src="require(`@/assets/image/${image}`)" alt="auto" />
    </div>
  </article>
</template>
<script>
export default {
  name: 'CardItem',
  props: {
    name: String,
    weight: String,
    dimensions: String,
    image: String,
  },
};
</script>
<style lang="scss">
.card {
  text-align: left;
  background: #264653;
  padding: 50px;
  padding-bottom: 40px;
  color: #fff;
  &__title {
    font-size: 32px;
    position: relative;
    padding-bottom: 35px;
    margin-bottom: 35px;
    &:after {
      content: '';
      position: absolute;
      height: 1px;
      width: 200px;
      bottom: 0;
      left: 0;
      background: #fff;
    }
  }
  &__listProps {
    color: #ffb700;
    list-style-type: disc;
    font-size: 26px;
    margin-left: 26px;
    line-height: 36px;
    margin-bottom: 30px;
    & > li > span {
      color: #fff;
    }
  }
  &__image {padding: 0 35px; height: 340px;
    img {width: 100%; height: 100%; object-fit: contain;}
  }
}
</style>
