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
      <div class="wwd-footer">
        <div class="wwd__pacet">
          <img
            src="./../../public/images/home/busisness_grow.png"
            alt="Business Grow img"
          />
        </div>
        <div class="wwd__pacet">
          <img
            src="./../../public/images/home/consultency.png"
            alt="Consultency img"
          />
        </div>
        <div class="wwd__pacet">
          <img
            src="./../../public/images/home/support-logo.png"
            alt="Support Logo img"
          />
        </div>
      </div>
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
.wwd-footer {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.wwd__pacet {
  margin: 15px 20px 0;
  height: 30%;
  width: 30%;
  padding: 30px 20px;
  box-shadow: 0 0 5px rgb(35 37 41 / 10%);
  overflow-x: hidden;
  opacity: 1;
}
</style>
