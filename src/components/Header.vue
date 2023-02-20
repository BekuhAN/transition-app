<template>
  <header class="header">
    <div class="container">
      <div class="row header__row">
        <div class="col col_20">
          <a href="/">
            <div class="logo">
              <img src="@/assets/image/logo.svg" alt="logo" />
            </div>
          </a>
        </div>
        <div class="col col_80">
          <div class="navigation__wrapper">
            <nav class="navigation">
              <ul class="menu">
                <li class="menu__item">
                  <a class="menu__link" href="#">Главная</a>
                </li>
                <li class="menu__item">
                  <a class="menu__link" href="#about">О нас</a>
                </li>
                <li class="menu__item">
                  <a class="menu__link" href="#autopark">Автопарк</a>
                </li>
                <li class="menu__item">
                  <a class="menu__link" href="#contacts">Контакты</a>
                </li>
              </ul>
            </nav>
            <div class="navigation__button">
              <ButtonUI
                :text="'Оформить заявку'"
                @on-click="showModalRequestClick"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <ModalRequest />
  </header>
</template>
<script>
import ButtonUI from './ui-kit/Button.vue';
import ModalRequest from './modals/ModalRequest.vue';

export default {
  name: 'HeaderComponent',
  components: {
    ButtonUI,
    ModalRequest,
  },
  methods: {
    showModalRequestClick() {
      this.$modals.show('modal-request');
    },
  },
};
</script>
<style lang="scss">
.header {
  padding: 15px 0;
  &__row {
    justify-content: space-between;
    align-items: center;
  }
}
.menu {
  display: flex;
  align-items: center;
  list-style: none;
  justify-content: end;
  &__item {
    &:not(:last-child) {
      margin-right: 40px;
    }
  }
  &__link {
    text-transform: uppercase;
    font-weight: 700;
    color: #000;
    text-decoration: none;
  }
}
.navigation__wrapper {
  display: flex;
  align-items: center;
  justify-content: end;
}
.navigation {
  &__button {
    margin-left: 70px;
  }
}
</style>
