<template>
  <Header />
  <ConsultingHead />
  <WhatWeDo />
  <AboutUs />
  <OurServices />
</template>

<script>
import Header from "./components/Header.vue";
import ConsultingHead from "./components/ConsultingHeadPart/ConsultingHead.vue";
import WhatWeDo from "./components/WhatWeDo.vue";
import AboutUs from "./components/AboutUs.vue";
import OurServices from "./components/OurServices.vue";

export default {
  name: "App",
  components: {
    Header,
    ConsultingHead,
    WhatWeDo,
    AboutUs,
    OurServices,
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
