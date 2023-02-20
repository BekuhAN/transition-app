<template>
  <div class="adminPage">
    <form class="adminPage__auth">
      <div class="adminPage__logo">
        <img src="@/assets/image/logo.svg" alt="logo" />
      </div>
      <div class="adminPage__input">
        <InputText :label="'Логин'" :theme="'gray'" />
      </div>
      <div class="adminPage__input">
        <InputText :label="'Пароль'" :type="'password'" :theme="'gray'" />
      </div>
      <div class="adminPage__action">
        <ButtonUI :text="'Войти'" :variant="'block'" />
      </div>
    </form>
  </div>
</template>
<script>
import InputText from './../components/ui-kit/InputText.vue';
import ButtonUI from './../components/ui-kit/Button.vue';

export default {
  name: 'AdminView',
  components: {
    InputText,
    ButtonUI,
  },
};
</script>
<style lang="scss">
.adminPage {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #264653;

  .adminPage__auth {
    background: #fff;
    width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 40px;
  }

  &__logo {
    margin-bottom: 30px;
  }

  &__input {
    width: 100%;
    margin-bottom: 15px;
  }

  &__action {
    width: 100%;
    margin-top: 25px;
  }
}
</style>
