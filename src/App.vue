<template>
  <div id="app">
    <HeaderComponent />
    <PromoComponent />
    <SectionPark />
    <AdvantagesSection />
    <AboutSection />
    <FooterLayout />
    <CopyRightComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/Header.vue';
import FooterLayout from './components/Footer.vue';
import PromoComponent from './components/Promo.vue';
import SectionPark from './components/sections/Park.vue';
import AdvantagesSection from './components/sections/Advantages.vue';
import AboutSection from './components/sections/About.vue';
import CopyRightComponent from './components/Copyright.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    PromoComponent,
    SectionPark,
    AdvantagesSection,
    AboutSection,
    FooterLayout,
    CopyRightComponent,
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
body, html {
  scroll-behavior: smooth;
}

$black-200: #111314;
$black-100: #292c31;

$green-300: #274e37;
$green-200: #27b885;
$green-100: #61c389;

$blue-200: #3677f6;
$blue-100: #1ea1f3;

$gray-700: #696d75;
$gray-600: #676e77;
$gray-500: #9098a3;
$gray-400: #bbbdc1;
$gray-300: #dedfe2;
$gray-200: #edeeef;
$gray-100: #f5f6f8;

$red: #d5494a;
$yellow: #e0e000;

$white: #ffffff;
$white-100: #f9fcff;

$text: $black-200;

$font-size: 16px;

$smaller: 0.6875rem;
$small: 0.8125rem;
$normal: 1rem;
$large: 1.375rem;
$h1: 2rem;
$h2: 1.5rem;
$h3: 1.25rem;

$transition: all 0.2s ease-out;

$icon-size: 24px;

$radius: 8px;

$quad-hd: 2560px;
$full-hd: 1920px;
$widescreen: 1440px;
$tablet-wide: 1024px;
$tablet: 768px;
$mobile: 480px;

$prefix: '_';
$gutter: 15px;
$gutter-medium: 10px;

$breakpoints: (
  'quad-hd': $quad-hd,
  'full-hd': $full-hd,
  'widescreen': $widescreen,
  'tablet-wide': $tablet-wide,
  'tablet': $tablet,
  'mobile': $mobile,
);

$columns: (
  '16': 16.6666666%,
  '20': 20%,
  '25': 25%,
  '30': 30%,
  '33': 33.3333%,
  '40': 40%,
  '45': 45%,
  '50': 50%,
  '55': 55%,
  '60': 60%,
  '66': 66.666%,
  '70': 70%,
  '75': 75%,
  '80': 80%,
  '100': 100%,
);

.container {
  max-width: 1270px;
  width: 100%;
  margin: 0 auto;
  padding: 0 $gutter;
}
.row {
  display: flex;
  margin: 0 calc(var(--gutter) * -1);
  flex-wrap: wrap;
  --gutter: #{$gutter};
  &.medium_gutter {
    --gutter: #{$gutter-medium};
  }
  &.align-items-end {
    align-items: flex-end;
  }
  &.justify-content-between {
    justify-content: space-between;
  }
}
[class^='col#{$prefix}'] {
  padding: 0 var(--gutter);
}
.col {
  flex: 1 0 0;
  max-width: 100%;
  padding: 0 var(--gutter);
  &#{$prefix}auto {
    flex: 0 1;
  }
  @each $name, $size in $columns {
    &#{$prefix}#{$name} {
      flex: 0 0 #{$size};
      max-width: #{$size};
    }
  }

  @each $breakpointName, $breakpoint in $breakpoints {
    @media (max-width: #{$breakpoint}) {
      @each $name, $size in $columns {
        &#{$prefix}#{$breakpointName}#{$prefix}#{$name} {
          flex: 0 0 #{$size};
          max-width: #{$size};
        }
      }
    }
  }
}
</style>
