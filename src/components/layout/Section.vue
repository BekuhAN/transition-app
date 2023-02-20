<template>
  <section class="section">
    <h2 class="section__header">{{ header }}</h2>
    <slot></slot>
  </section>
</template>
<script>
export default {
  name: 'SectionLayout',
  props: {
    header: String,
  },
};
</script>
<style lang="scss" scoped>
.section {
  padding: 90px 0;
  &__header {
    text-align: center;
    text-transform: uppercase;
    font-size: 18px;
    color: #ffb700;
    padding-bottom: 10px;
    border-bottom: 2px solid #ffb700;
    display: inline;
    font-weight: 700;
  }
}
</style>
