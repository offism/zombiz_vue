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
            placeat atque nihil. Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
          <a href="#" class="au-box__link btn">learn more</a>
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
  text-align: left;
}
.au-text__title {
  font-family: "Playfair Display", serif;
  color: #4d4e54;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
}
.au-box__text {
  color: #888;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  line-height: 1.7;
  width: 480px;
  margin-bottom: 20px;
}
.au-box__link {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #7370d8;
  width: 185px;
  height: 52px;
  line-height: 50px;
  white-space: nowrap;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  transition: 0.3s ease all;
}
.au-box__link:hover {
  background: #fff;
  color: #7370d8;
  border: 1px solid #7370d8;
}
.au-img::before {
  position: absolute;
  content: "";
  top: 55px;
  left: -23px;
  border: 3px solid #ebecfb;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
