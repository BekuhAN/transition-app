<template>
  <footer class="footer" id="contacts">
    <div class="container">
      <div class="row">
        <div class="col_50">
          <h2>Контакты</h2>
          <p class="footer__text">
            Если возникли вопросы<br />
            свяжитесь с нами
          </p>
          <div class="social row">
            <div class="social__item col_50">
              <SocialItem
                :icon="'fa-phone'"
                :name="'Телефон:'"
                :description="'+7 (900) 259-50-81'"
                :typeIcon="'fa-solid'"
              />
            </div>
            <div class="social__item col_50">
              <SocialItem
                :icon="'fa-whatsapp'"
                :name="'WhatsApp:'"
                :description="'+7 (900) 259-50-81'"
                :typeIcon="'fa-brands'"
              />
            </div>
            <div class="social__item col_50">
              <SocialItem
                :icon="'fa-envelope'"
                :name="'Почта:'"
                :typeIcon="'fa-solid'"
                :description="'bekuh988@mail.ru'"
              />
            </div>
            <div class="social__item col_50">
              <SocialItem
                :icon="'fa-telegram'"
                :name="'Telegram:'"
                :typeIcon="'fa-brands'"
                :description="'+7 (900) 259-50-81'"
              />
            </div>
          </div>
        </div>
        <div class="col_50">
          <form class="footer__form" action="">
            <div class="row medium_gutter">
              <div class="col_50"><InputText :placeholder="'Имя'" /></div>
              <div class="col_50"><InputText :placeholder="'Фамилия'" /></div>
            </div>
            <div class="row medium_gutter">
              <div class="col_50"><InputText :placeholder="'Телефон'" /></div>
              <div class="col_50"><InputText :placeholder="'Почта'" /></div>
            </div>
            <InputText :placeholder="'Тема'" />
            <TextArea :placeholder="'Сообщение'" class="textarea" />
            <ButtonUI :text="'ОТПРАВИТЬ'" :variant="'secondary'" />
          </form>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import InputText from './ui-kit/InputText.vue';
import TextArea from './ui-kit/TextArea.vue';
import ButtonUI from './ui-kit/Button.vue';
import SocialItem from './SocialItem.vue';

export default {
  name: 'FooterLayout',
  components: {
    InputText,
    TextArea,
    ButtonUI,
    SocialItem,
  },
};
</script>
<style lang="scss">
.footer {
  text-align: left;
  background: url('@/assets/image/bg-1.jpg') no-repeat;
  background-size: cover;
  padding: 40px 0 90px;
  position: relative;
  .container {
    position: relative;
    z-index: 2;
  }
  &:after {
    content: '';
    position: absolute;
    inset: 0;
    background: #264653;
    opacity: 0.8;
  }
  h2 {
    text-transform: uppercase;
    font-size: 18px;
    color: #ffb700;
    padding-bottom: 10px;
    border-bottom: 2px solid #ffb700;
    display: inline;
    font-weight: 700;
    margin-bottom: 30px;
    display: inline-block;
  }
  &__text {
    color: #fff;
    font-size: 32px;
    line-height: 1.1;
    margin-bottom: 50px;
    font-weight: 700;
  }
  &__form {
    .row {
      margin-bottom: 20px;
    }
  }
  .textarea {
    margin-top: 20px;
    margin-bottom: 18px;
  }
  .social {
    &__item {
      &:nth-child(1),
      &:nth-child(2) {
        margin-bottom: 30px;
      }
    }
  }
}
</style>
