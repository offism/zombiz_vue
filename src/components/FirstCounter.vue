<template>
  <section class="FirstCounter">
    <div class="container">
      <div class="first-counter__box">
        <div class="row">
          <div class="col-3 fc__pacet">
            <div class="row">
              <div class="fc-pacet-img__box col-5">
                <img
                  src="./../../public/images/counter/counter1.png"
                  alt=""
                  class="fc-pacet__img"
                />
              </div>
              <div class="fc-pacet-text__box col-7">
                <div class="row">
                  <div class="counter">0</div>
                  <p class="fc-pacet__title">Days Worked</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-3 fc__pacet">
            <div class="row">
              <div class="fc-pacet-img__box col-5">
                <img
                  src="./../../public/images/counter/counter2.png"
                  alt=""
                  class="fc-pacet__img"
                />
              </div>
              <div class="fc-pacet-text__box col-7">
                <div class="row">
                  <div class="counter">0</div>
                  <p class="fc-pacet__title">Project Finished</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-3 fc__pacet">
            <div class="row">
              <div class="fc-pacet-img__box col-5">
                <img
                  src="./../../public/images/counter/counter3.png"
                  alt=""
                  class="fc-pacet__img"
                />
              </div>
              <div class="fc-pacet-text__box col-7">
                <div class="row">
                  <div class="counter">0</div>
                  <p class="fc-pacet__title">Coffee Cup</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-3 fc__pacet">
            <div class="row">
              <div class="fc-pacet-img__box col-5">
                <img
                  src="./../../public/images/counter/counter4.png"
                  alt=""
                  class="fc-pacet__img"
                />
              </div>
              <div class="fc-pacet-text__box col-7">
                <div class="row">
                  <div class="counter">0</div>
                  <p class="fc-pacet__title">Client Satisfied</p>
                </div>
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
  name: "FirstCounter",
};
</script>

<style scoped>
.FirstCounter {
  position: relative;
  background: url("./../../public/images/counter/counter-banner.jpg") no-repeat;
  background-position: center;
  background-size: cover;
  padding: 98px 0 81px;
  min-height: 40vh;
}
.FirstCounter::before {
  position: absolute;
  content: "";
  background: rgba(115, 112, 216, 0.8);
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}
.first-counter__box {
  display: block;
  margin: 0 15px;
  position: relative;
  text-align: left;
}
.fc-pacet__img {
  height: 60px;
}
.counter {
  color: #fff;
  font-size: 32px;
  font-family: "Poppins", sans-serif;
}
.fc-pacet__title {
  color: #fff;
  font-size: 19px;
  text-transform: capitalize;
  font-family: "Poppins", sans-serif;
  line-height: 1.5;
  padding: 0;
}
</style>
