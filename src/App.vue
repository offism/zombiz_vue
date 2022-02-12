<template>
  <Header />
  <ConsultingHead />
  <WhatWeDo />
  <AboutUs />
  <OurServices />
  <FirstCounter />
</template>

<script>
import Header from "./components/Header.vue";
import ConsultingHead from "./components/ConsultingHeadPart/ConsultingHead.vue";
import WhatWeDo from "./components/WhatWeDo.vue";
import AboutUs from "./components/AboutUs.vue";
import FirstCounter from "./components/FirstCounter.vue";

export default {
  name: "App",
  components: {
    Header,
    ConsultingHead,
    WhatWeDo,
    AboutUs,
    FirstCounter,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
