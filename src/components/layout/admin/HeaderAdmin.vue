<template>
  <header class="header">
    <div class="container">
      <div class="row header__row">
        <div class="col_80">
          <div class="navigation__wrapper">
            <nav class="navigation">
              <ul class="menu">
                <li class="menu__item">
                  <a class="menu__link" href="/admin/orders">Заявки</a>
                </li>
                <li class="menu__item">
                  <a class="menu__link" href="/admin/customers">Клиенты</a>
                </li>
                <li class="menu__item">
                  <a class="menu__link" href="/admin/drivers">Водители</a>
                </li>
                <li class="menu__item">
                  <a class="menu__link" href="/admin/auto">Автомобили</a>
                </li>
                <li class="menu__item">
                  <a class="menu__link" href="/admin/waybill">Путевые листы</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="col_20">
          <nav class="navigation">
            <ul class="menu">
              <li class="menu__item">
                <a class="menu__link" href="/">Выход</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'AdminView',
};
</script>
<style lang="scss" scoped>
.header {
  padding: 35px 0;
  background: #fff;
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
}
</style>
