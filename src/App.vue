<template>
  <Header />
  <ConsultingHead />
  <WhatWeDo />
</template>

<script>
import Header from "./components/Header.vue";
import ConsultingHead from "./components/ConsultingHeadPart/ConsultingHead.vue";
import WhatWeDo from "./components/ConsultingHeadPart/WhatWeDo.vue";

export default {
  name: "App",
  components: {
    Header,
    ConsultingHead,
    WhatWeDo,
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
