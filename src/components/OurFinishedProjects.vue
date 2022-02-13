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
          </div>
          <div class="col-8">
            <div class="row">
              <div class="col-6">
                <img
                  class="oft__img"
                  src="./../../public/images/project/project4.jpg"
                  alt=""
                />
              </div>
              <div class="col-6">
                <img
                  class="oft__img"
                  src="./../../public/images/project/project3.jpg"
                  alt=""
                />
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <img
                  class="oft__img"
                  src="./../../public/images/project/project2.jpg"
                  alt=""
                />
              </div>
              <div class="col-6">
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
  overflow: hidden;
  height: 95%;
  /* vertical-align: middle; */
}
.oft__img {
  margin-bottom: 31px;
}
</style>
