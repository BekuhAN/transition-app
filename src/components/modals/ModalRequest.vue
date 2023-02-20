<template>
  <vue-modal name="modal-request" :size="'xlg'">
    <h2 slot="header" class="modal__header">Оформление заявки на перевозку</h2>
    <form class="modal__content">
      <div class="modal__inner">
        <div class="row modal__row">
          <div class="col_20">
            <h3 class="modal__title">Данные о грузе</h3>
          </div>
          <div class="col_20">
            <InputText :label="'Общий вес, кг'" :theme="'gray'" />
          </div>
          <div class="col_20">
            <InputText :label="'Общий объем, м3'" :theme="'gray'" />
          </div>
          <div class="col_20">
            <InputText :label="'Макс. габарит, м'" :theme="'gray'" />
          </div>
          <div class="col_20">
            <InputText :label="'Кол-во мест'" :theme="'gray'" />
          </div>
        </div>
        <div class="row modal__row_small justify-content-end">
          <div class="col_40">
            <InputText :label="'Объявленная стоимость, ₽'" :theme="'gray'" />
          </div>
          <div class="col_40">
            <InputText :label="'Характер груза'" :theme="'gray'" />
          </div>
        </div>
        <div class="row modal__row justify-content-end">
          <div class="col_40">
            <div class="row">
              <div class="col_50">
                <CheckBox :label="'Жидкий'" />
              </div>
              <div class="col_50">
                <CheckBox :label="'Хрупкий'" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal__inner">
        <div class="row modal__row">
          <div class="col_20">
            <h3 class="modal__title">Направление</h3>
          </div>
          <div class="col_60">
            <InputText :label="'Откуда'" :theme="'gray'" />
          </div>
        </div>
        <div class="row modal__row_small">
          <div class="col_60 col_offest_20">
            <InputText :label="'Куда'" :theme="'gray'" />
          </div>
        </div>
        <div class="row modal__row_small">
          <div class="col_60 col_offest_20">
            <h4 class="modal__inner__title">Когда планируете сдать груз?</h4>
            <div class="row">
              <div class="col_40">
                <DatePickerInput
                  :model="from"
                  :type="'date'"
                  @change="onChageDateForm"
                  @clear="handleClearFrom"
                ></DatePickerInput>
              </div>
              <div class="col_40">
                <DatePickerInput
                  :model="to"
                  :type="'time'"
                  @change="onChageDateTo"
                  @clear="handleClearTo"
                ></DatePickerInput>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal__inner">
        <div class="row modal__row">
          <div class="col_20">
            <h3 class="modal__title">Данные о клиенте</h3>
          </div>
          <div class="col_40">
            <InputText :label="'Наименование'" :theme="'gray'" />
          </div>
          <div class="col_40">
            <InputText :label="'Контакнтное лицо'" :theme="'gray'" />
          </div>
        </div>
        <div class="row modal__row_small">
          <div class="col_60 col_offest_20">
            <div class="row">
              <div class="col_33">
                <InputText :label="'ИНН'" :theme="'gray'" />
              </div>
              <div class="col_33">
                <InputText :label="'Телефон'" :theme="'gray'" />
              </div>
              <div class="col_33">
                <InputText :label="'Email'" :theme="'gray'" />
              </div>
            </div>
          </div>
        </div>
        <div class="row modal__row_small">
          <div class="col_60 col_offest_20">
            <InputText :label="'Адрес'" :theme="'gray'" />
          </div>
        </div>
        <div class="modal__content__action">
          <ButtonUI :text="'Отправить'" />
        </div>
      </div>
    </form>
  </vue-modal>
</template>
<script>
import InputText from './../ui-kit/InputText.vue';
import CheckBox from './../ui-kit/Checkbox.vue';
import ButtonUI from './../ui-kit/Button.vue';
import DatePickerInput from '../ui-kit/DatePickerInput.vue';

export default {
  name: 'ModalRequest',
  components: {
    InputText,
    CheckBox,
    ButtonUI,
    DatePickerInput,
  },
  data() {
    return {
      from: new Date(),
      to: new Date(),
    };
  },
  methods: {
    onChageDateForm(date) {
      this.from = date;
    },
    onChageDateTo(date) {
      this.to = date;
    },
    handleClearFrom() {
      this.from = null;
    },
    handleClearTo() {
      this.to = null;
    },
  },
};
</script>
<style lang="scss">
.modal {
  $self: &;
  text-align: left;
  &__row {
    padding-bottom: 40px;
    &_small {
      padding-bottom: 20px;
    }
  }
  &__header {
    font-weight: 700;
    font-size: 32px;
  }
  &__content {
    padding: 0 40px;
    &__action {
      display: flex;
      justify-content: flex-end;
    }
  }
  &__inner {
    margin-top: 40px;
    text-align: left;
    padding-bottom: 40px;
    &:not(:last-of-type) {
      border-bottom: 2px solid #f4f4f4;
    }
    #{$self}__row {
      &:last-child {
        padding-bottom: 0;
      }
    }
    &__title {
      font-weight: 700;
      font-size: 18px;
      margin-bottom: 10px;
    }
    .row {
      align-items: baseline;
    }
  }
  &__title {
    font-weight: 700;
    font-size: 20px;
  }
}
.v-modal__content {
  border-radius: 10px;
}
.v-modal__title {
  padding: 20px 35px;
}
.v-modal__heading {
  position: relative;
}
.v-modal__close-btn {
  position: absolute;
  right: 15px;
  top: 10px;
  transform: scale(2);
}
.mx-datepicker-popup {
  z-index: 9999999 !important;
}
</style>
