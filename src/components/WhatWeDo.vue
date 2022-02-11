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
            class="img-fluid"
            src="./../../public/images/home/busisness_grow.png"
            alt="Business Grow img"
          />
          <h4 class="wwd-pacet__title">
            <a href="#"> Business Consultancy </a>
          </h4>

          <small class="wwd-pacet__text"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo et
            veniam rerum impedit sequi laborum error expedita nostrum quis
            exercitationem!</small
          >
        </div>
        <div class="wwd__pacet">
          <img
            class="img-fluid"
            src="./../../public/images/home/consultency.png"
            alt="Consultency img"
          />
          <h4 class="wwd-pacet__title">
            <a href="#"> Business Consultancy </a>
          </h4>

          <small class="wwd-pacet__text"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo et
            veniam rerum impedit sequi laborum error expedita nostrum quis
            exercitationem!</small
          >
        </div>
        <div class="wwd__pacet">
          <img
            class="img-fluid"
            src="./../../public/images/home/support-logo.png"
            alt="Support Logo img"
          />
          <h4 class="wwd-pacet__title">
            <a href="#"> Great Support </a>
          </h4>
          <small class="wwd-pacet__text"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo et
            veniam rerum impedit sequi laborum error expedita nostrum quis
            exercitationem!</small
          >
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
  margin-bottom: 75px;
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
  min-height: 30%;
  width: 30%;
  padding: 70px 30px;
  box-shadow: 0 0 5px rgb(35 37 41 / 10%);
  overflow-x: hidden;
  opacity: 1;
  transition: 0.3s ease all;
}
.wwd__pacet img {
  margin-bottom: 20px;
}
.wwd-pacet__title a {
  margin: 20px 0;
  color: #44454f;
  font-size: 20px;
  font-family: "Playfair Display", serif;
  transition: 0.3s ease all;
}
.wwd-pacet__title a:hover {
  font-weight: 600;
  text-decoration: overline, underline;
}
.wwd-pacet__text {
  color: #888;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  max-width: 306 px;
  margin: 0 auto;
}
.wwd__pacet:hover {
  box-shadow: 0 5px 20px rgb(112 134 230 / 20%);
  opacity: 1;
}
</style>
