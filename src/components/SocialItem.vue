<template>
  <div class="socialItem">
    <div class="socialItem__icon">
      <font-awesome-icon :icon="typeIcon + ' ' + icon" />
    </div>
    <div class="socialItem__inner">
      <div class="socialItem__name">{{ name }}</div>
      <div class="socialItem__description">{{ description }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SocialItem',
  props: {
    icon: String,
    name: String,
    description: String,
    typeIcon: String
  },
};
</script>
<style lang="scss">
.socialItem {
  display: flex;
  align-items: center;
  &__icon {
    border: 2px solid #fff;
    padding: 20px;
    color: #fff;
    font-size: 40px;
    margin-right: 30px;
  }
  &__name {
    color: #ffb700;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  &__description {
    color: #fff;
    font-size: 20px;
    font-weight: 700;
  }
}
</style>
