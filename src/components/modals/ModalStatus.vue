<template>
  <vue-modal name="modal-status" :size="'md'">
    <h2 slot="header" class="modal__header">Статус заявки № 1</h2>
    <div class="modal__content">
      <div class="row">
        <div class="col_60">
          <InputText :label="'Клиент'" :theme="'gray'" />
        </div>
        <div class="col_40">
          <InputText :label="'Статус'" :theme="'gray'" />
        </div>
      </div>
      <div class="row">
        <div class="col_60">
          <InputText :label="'Контакнтное лицо'" :theme="'gray'" />
        </div>
        <div class="col_40">
          <InputText :label="'Телефон'" :theme="'gray'" />
        </div>
      </div>
      <div class="row">
        <div class="col_100">
          <InputText :label="'Откуда'" :theme="'gray'" />
        </div>
      </div>
      <div class="row">
        <div class="col_100">
          <InputText :label="'Куда'" :theme="'gray'" />
        </div>
      </div>
    </div>
  </vue-modal>
</template>
<script>
import InputText from './../ui-kit/InputText.vue';

export default {
  name: 'ModalStatus',
  components: {
    InputText,
  },
};
</script>
<style lang="scss">
.modal {
  $self: &;
  text-align: left;
  &__header {
    font-weight: 700;
    font-size: 32px;
  }
  &__content {
    padding: 0 40px;
    .row {
      padding-bottom: 25px;
    }
    &__action {
      display: flex;
      justify-content: flex-end;
    }
  }
  &__title {
    font-weight: 700;
    font-size: 20px;
  }
}
</style>
