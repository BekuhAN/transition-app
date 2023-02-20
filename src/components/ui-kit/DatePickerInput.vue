<template>
  <div class="input__date">
    <date-picker
      :value="model"
      :type="type"
      @input="onInput"
      @change="onChange"
      @clear="onClear"
    />
  </div>
</template>
<script>
import DatePicker from 'vue2-datepicker';
import ru from 'vue2-datepicker/locale/ru';
import 'vue2-datepicker/index.css';

DatePicker.locale('ru', ru);

export default {
  name: 'DatePickerInput',
  components: { DatePicker },
  props: ['model', 'type'],
  methods: {
    onInput(date) {
      this.$emit('input', new Date(date));
    },
    onChange(date) {
      this.$emit('change', new Date(date));
    },
    onClear() {
      this.$emit('clear', null);
    },
  },
};
</script>
<style lang="scss">
.input {
  &__date {
    .mx-datepicker {
      width: 100%;
      .mx-input {
        padding: 15px 25px;
        border: 0;
        width: 100%;
        background: #f4f4f4 !important;
        font-size: 16px !important;
        height: auto;
        border-radius: 0;
        border: none;
      }
    }
  }
}
</style>
