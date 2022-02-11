<template>
  <section class="WhatWeDo">
    <div class="container">
      <div class="wwd-header">
        <h3 class="wwd__title">What We Do</h3>
        <small
          >Pallamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur.</small
        >
      </div>
      <div class="wwd-footer"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "WhatWeDo",
};
</script>

<style scoped>
.WhatWeDo {
  padding: 100px 0;
  min-height: 97vh;
}
.wwd-header {
  display: flex;
  flex-direction: column;
}
.wwd__title {
  margin-bottom: 30px;
  color: #44454f;
  font-size: 40px;
  font-weight: 700;
  font-family: "Playfair Display", serif;
}
.wwd-header small {
  color: #888;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  max-width: 1000 px;
  margin: 0 auto;
  margin-top: 32 px;
  line-height: 1.8;
}
</style>
