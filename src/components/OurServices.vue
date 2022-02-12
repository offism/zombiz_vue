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
            <img src="./../../public/images/service/service1.png" alt="" />
            <h4 class="os-pacet__title">Business Planning</h4>
            <small
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
              repellat nobis excepturi eum quia perferendis! Labore autem
              similique deserunt fuga.</small
            >
            <a href="#" class="btn">Learn More</a>
          </div>
          <div class="col-4 os__pacet"></div>
          <div class="col-4 os__pacet"></div>
          <div class="col-4 os__pacet"></div>
          <div class="col-4 os__pacet"></div>
          <div class="col-4 os__pacet"></div>
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
  max-width: 1000 px;
  margin: 0 auto;
  margin-top: 32 px;
  line-height: 1.8;
}
</style>
