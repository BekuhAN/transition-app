<template>
  <div class="rowEdit">
    <div class="rowEdit__item rowEdit__header">
      <div class="row">
        <div class="rowEdit__id">ID</div>
        <div v-for="item of filedsTitle" :key="item.id" class="col">
          {{ item.name }}
        </div>
        <div class="rowEdit__action"></div>
      </div>
    </div>
    <RowEditItem
      v-for="item in orders"
      :key="item.id"
      :order="item"
      :className="'rowEdit__item'"
    />
  </div>
</template>
<script>
import RowEditItem from './RowEditItem.vue';

export default {
  nema: 'RowEdit',
  props: {
    filedsTitle: Array,
    orders: Array,
  },
  components: {
    RowEditItem,
  },
};
</script>
<style lang="scss">
.rowEdit {
  &__id {
    width: 40px;
    padding: 0 var(--gutter);
  }
  &__header {
    font-weight: 700;
    padding: 15px;
  }
  &__item {
    &:nth-child(odd) {
      background: #f4f4f4;
    }
  }
  &__action {
    width: 100px;
    display: flex;
  }
}
</style>
