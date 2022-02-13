<template>
  <section class="OurFinishedProjects">
    <div class="container">
      <div class="ofp__box">
        <div class="row ofp-text__row">
          <h2 class="ofp-box__title">Our Finished Projects</h2>
          <small class="ofp-box__text"
            >Now It’s time to set goals or targets. Not only these goals should
            be realistic, which mean that they should be achievable within a
            certain time limit you set, but they should also align with your
            business goals.</small
          >
        </div>
        <div class="row oft-imgs-box__row">
          <div class="col-4 ofp-box__col4">
            <img
              class="oft__img oft-main__img img-fluid"
              src="./../../public/images/project/project6.jpg"
              alt=""
            />
            <div class="img__overlay">
              <a href="#" class="img-link__overlay text-white">
                <i class="lnr lnr-link"></i>
              </a>
              <h4 class="img-title__overlay">Aquisition Play</h4>
              <p class="img-text__overlay">Business Planning</p>
            </div>
          </div>
          <div class="col-8">
            <div class="row">
              <div class="col-6 ofp-box__col6">
                <img
                  class="oft__img"
                  src="./../../public/images/project/project4.jpg"
                  alt=""
                />
              </div>
              <div class="col-6 ofp-box__col6">
                <img
                  class="oft__img"
                  src="./../../public/images/project/project3.jpg"
                  alt=""
                />
              </div>
            </div>
            <div class="row">
              <div class="col-6 ofp-box__col6">
                <img
                  class="oft__img"
                  src="./../../public/images/project/project2.jpg"
                  alt=""
                />
              </div>
              <div class="col-6 ofp-box__col6">
                <img
                  class="oft__img"
                  src="./../../public/images/project/project5.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "OurFinishedProjects",
};
</script>

<style scoped>
.OurFinishedProjects {
  padding: 100px 0;
  min-height: 97vh;
  background: #f9faff;
}
.ofp__box {
  display: flex;
  flex-direction: column;
}
.ofp-box__col4 {
  overflow: hidden;
  position: relative;
  padding-left: 0;
}
.ofp-box__title {
  margin-bottom: 30px;
  padding-left: 0;
  color: #44454f;
  font-size: 40px;
  font-weight: 700;
  font-family: "Playfair Display", serif;
}
.ofp-box__text {
  padding-left: 0;
  color: #888;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  max-width: 600px;
  line-height: 1.8;
  margin-bottom: 80px;
}
.ofp-text__row {
  text-align: left;
}
.oft-imgs-box__row {
  display: flex;
  text-align: left;
}
.oft-main__img {
  display: block;
  overflow: hidden;
  /* height: 96% !important; */
}
.oft__img {
  width: 100%;
  height: 100%;
  transition: 0.3s ease all;
}
.ofp-box__col6 {
  overflow: hidden;
  margin-bottom: 30px;
}
.oft__img:hover {
  transform: scale(1.1);
}
.img__overlay {
  font-size: 24px;
  font-family: "Lato", sans-serif;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  color: #fff;
  background: rgba(115, 112, 215, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: 0.3s ease all;
}
.img__overlay > * {
  transition: transform 0.25s;
  transform: scale(1.6);
}
.img__overlay > *:hover {
  transform: scale(0);
}
.img__overlay:hover {
  opacity: 1;
}
.img-title__overlay {
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 11px;
  font-size: 24px;
}
.img-link__overlay {
  font-size: 30px;
}
.img-text__overlay {
  font-size: 20px;
}
</style>
