<template>
  <div :class="className">
    <div class="rowEditItem__item">
      <div class="row">
        <div class="rowEditItem__id">{{ order.id }}</div>
        <div class="col">{{ }}</div>
        <div class="col">15 000</div>
        <div class="col">Завершен</div>
        <div class="col">АМ-12</div>
        <div class="rowEditItem__action">
          <div
            @click="onEditClick"
            v-if="!isEdit"
            class="rowEditItem__icon rowEditItem_edit"
          >
            <font-awesome-icon icon="fa-solid fa-pen" title="редактировать" />
          </div>
          <div class="rowEditItem__icon rowEditItem_check" title="подтвердить">
            <font-awesome-icon icon="fa-solid fa-check" />
          </div>
          <div class="rowEditItem__icon rowEditItem_check" title="удалить">
            <font-awesome-icon icon="fa-solid fa-xmark" />
          </div>
        </div>
      </div>
    </div>
    <div v-if="isEdit" class="container rowEditItem__container__editable">
      <div class="row rowEditItem__row">
        <div class="col_20">
          <InputText :label="'Общий вес, кг'" />
        </div>
        <div class="col_20">
          <InputText :label="'Общий объем, м3'" />
        </div>
        <div class="col_20">
          <InputText :label="'Макс. габарит, м'" />
        </div>
        <div class="col_20">
          <InputText :label="'Кол-во мест'" />
        </div>
        <div class="col_20">
          <InputText :label="'Клиент'" />
        </div>
      </div>
      <div class="row rowEditItem__row">
        <div class="col_40">
          <InputText :label="'Объявленная стоимость, ₽'" />
        </div>
        <div class="col_40">
          <InputText :label="'Характер груза'" />
        </div>
        <div class="col_20">
          <InputText :label="'№ Путевого листа'" />
        </div>
      </div>
      <div class="row rowEditItem__row">
        <div class="col_40 col_offset_40">
          <div class="row">
            <div class="col_50">
              <CheckBox :label="'Жидкий'" :theme="'white'" />
            </div>
            <div class="col_50">
              <CheckBox :label="'Хрупкий'" :theme="'white'" />
            </div>
          </div>
        </div>
      </div>
      <div class="row rowEditItem__row">
        <div class="col_60">
          <InputText :label="'Откуда'" />
        </div>
      </div>
      <div class="row rowEditItem__row">
        <div class="col_60">
          <InputText :label="'Куда'" />
        </div>
      </div>
      <div class="row rowEditItem__row align-items-end">
        <div class="col_60">
          <h4 class="rowEditItem__title">Когда планируете сдать груз?</h4>
          <div class="row">
            <div class="col_40">
              <DatePickerInput
                :model="from"
                :type="'date'"
                :theme="'white'"
                @change="onChageDateForm"
                @clear="handleClearFrom"
              ></DatePickerInput>
            </div>
            <div class="col_40">
              <DatePickerInput
                :model="to"
                :type="'time'"
                :theme="'white'"
                @change="onChageDateTo"
                @clear="handleClearTo"
              ></DatePickerInput>
            </div>
          </div>
        </div>
        <div class="col_40 rowEditItem__left">
          <div class="rowEditItem__button">
            <ButtonUI :text="'Сохранить'" :variant="'block'" />
          </div>
          <div class="rowEditItem__button">
            <ButtonUI
              @on-click="onEditCancelClick"
              :text="'Отменить'"
              :variant="'block'"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import InputText from './ui-kit/InputText.vue';
import CheckBox from './ui-kit/Checkbox.vue';
import DatePickerInput from './ui-kit/DatePickerInput.vue';
import ButtonUI from './ui-kit/Button.vue';

export default {
  name: 'RowEditItem',
  components: {
    InputText,
    CheckBox,
    DatePickerInput,
    ButtonUI,
  },
  props: {
    className: String,
    order: Object,
  },
  data() {
    return {
      isEdit: false,
      from: null,
      to: null,
    };
  },
  methods: {
    onEditClick() {
      this.isEdit = true;
    },
    onEditCancelClick() {
      this.isEdit = false;
    },
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
.rowEditItem {
  &__title {
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 10px;
  }
  &__id {
    width: 40px;
    padding: 0 var(--gutter);
  }
  &__item {
    font-weight: 700;
    padding: 15px;
  }
  &__action {
    width: 100px;
    display: flex;
    justify-content: end;
  }

  &__button {
    width: 200px;
    margin-left: auto;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
  &__icon {
    margin-left: 10px;
    cursor: pointer;
    font-size: 22px;
    transition: 0.3s;
    &:hover {
      transform: scale(1.2);
    }
  }

  &__container__editable {
    background: #f4f4f4;
    padding: 22px 10px;
    padding-left: 55px;
  }

  &__row {
    padding-bottom: 30px;
    &:last-child {
      padding-bottom: 0;
    }
  }
}
</style>
