<template>
  <section class="OurServices">
    <div class="container">
      <div class="our-services__box">
        <div class="row">
          <h2 class="ou-box__title">Our Services</h2>
          <small class="ou-box__text"
            >Now that you know the area you need to improve, it’s time to set
            goals or targets. Not only these goals should be realistic, which
            mean that they should be achievable within a certain time limit you
            set, but they should also align with your business goals.</small
          >
        </div>
        <div class="row">
          <div class="col-4 os__pacet">
            <img
              src="./../../public/images/service/service1.png"
              class="img-fluid os-pacet__img"
              alt=""
            />
            <h4 class="os-pacet__title">
              <a href="#" class="btn"> Business Planning </a>
            </h4>
            <small class="os-pacet__text"
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
              repellat nobis excepturi eum quia perferendis! Labore autem
              similique deserunt fuga.</small
            >
            <a href="#" class="os-pacet__link btn">Learn More</a>
          </div>
          <div class="col-4 os__pacet">
            <img
              src="./../../public/images/service/service2.png"
              class="img-fluid os-pacet__img"
              alt=""
            />
            <h4 class="os-pacet__title">
              <a href="#" class="btn"> Business Planning </a>
            </h4>
            <small class="os-pacet__text"
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
              repellat nobis excepturi eum quia perferendis! Labore autem
              similique deserunt fuga.</small
            >
            <a href="#" class="os-pacet__link btn">Learn More</a>
          </div>
          <div class="col-4 os__pacet">
            <img
              src="./../../public/images/service/service3.png"
              class="img-fluid os-pacet__img"
              alt=""
            />
            <h4 class="os-pacet__title">
              <a href="#" class="btn"> Business Planning </a>
            </h4>
            <small class="os-pacet__text"
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
              repellat nobis excepturi eum quia perferendis! Labore autem
              similique deserunt fuga.</small
            >
            <a href="#" class="os-pacet__link btn">Learn More</a>
          </div>
          <div class="col-4 os__pacet">
            <img
              src="./../../public/images/service/service4.png"
              class="img-fluid os-pacet__img"
              alt=""
            />
            <h4 class="os-pacet__title">
              <a href="#" class="btn"> Business Planning </a>
            </h4>
            <small class="os-pacet__text"
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
              repellat nobis excepturi eum quia perferendis! Labore autem
              similique deserunt fuga.</small
            >
            <a href="#" class="os-pacet__link btn">Learn More</a>
          </div>
          <div class="col-4 os__pacet">
            <img
              src="./../../public/images/service/service5.png"
              class="img-fluid os-pacet__img"
              alt=""
            />
            <h4 class="os-pacet__title">
              <a href="#" class="btn"> Business Planning </a>
            </h4>
            <small class="os-pacet__text"
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
              repellat nobis excepturi eum quia perferendis! Labore autem
              similique deserunt fuga.</small
            >
            <a href="#" class="os-pacet__link btn">Learn More</a>
          </div>
          <div class="col-4 os__pacet">
            <img
              src="./../../public/images/service/service6.png"
              class="img-fluid os-pacet__img"
              alt=""
            />
            <h4 class="os-pacet__title">
              <a href="#" class="btn"> Business Planning </a>
            </h4>
            <small class="os-pacet__text"
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
              repellat nobis excepturi eum quia perferendis! Labore autem
              similique deserunt fuga.</small
            >
            <a href="#" class="os-pacet__link btn">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "OurServices",
};
</script>

<style scoped>
.OurServices {
  padding: 100px 0;
  min-height: 97vh;
}
.our-services__box {
  display: flex;
  flex-direction: column;
}
.ou-box__title {
  margin-bottom: 30px;
  color: #44454f;
  font-size: 40px;
  font-weight: 700;
  font-family: "Playfair Display", serif;
}
.ou-box__text {
  color: #888;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  max-width: 1000px;
  margin: 32px auto 55px;
  line-height: 1.8;
}
.os__pacet {
  padding: 35px 10px 20px;
  max-width: 304px;
  margin: 0 auto;
  margin-bottom: 15px;
  transition: 0.3s ease all;
}
.os__pacet:hover {
  box-shadow: 0 5px 20px rgb(112 134 230 / 20%);
  opacity: 1;
}
.os-pacet__title a {
  color: #44454f;
  font-size: 24px;
  font-family: "Playfair Display", serif;
  padding: 47px 0 25px;
  transition: 0.3s ease all;
}
.os-pacet__title a:hover {
  font-weight: 600;
}
.os-pacet__text {
  color: #756c6a;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  line-height: 1.67;
}
.os-pacet__link {
  color: #7370d8;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  text-transform: capitalize;
  margin-top: 12 px;
  margin-bottom: 15 px;
}
.os-pacet__img {
  height: 70px;
}
</style>
