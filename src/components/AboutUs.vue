<template>
  <section class="AboutUs">
    <div class="container">
      <div class="about-us__box">
        <div class="col-6 au-text__box">
          <h3 class="au-text__title">About Us</h3>
          <p class="au-box__text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
            in voluptas explicabo molestiae provident accusamus culpa beatae
            quaerat dolor vel. Illo dolorem neque expedita itaque nisi quo
            placeat atque nihil.
          </p>
          <a href="#" class="au-box__link">learn more</a>
        </div>
        <div class="col-6 au-img">
          <img
            src="./../../public/images/about/about-part.jpg"
            alt="About Part img"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutUs",
};
</script>

<style scoped>
.AboutUs {
  padding: 100px 0;
  min-height: 97vh;
}
.about-us__box {
  display: flex;
  align-items: center;
}
</style>
