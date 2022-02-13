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
}
.ofp-box__title {
  margin-bottom: 30px;
  color: #44454f;
  font-size: 40px;
  font-weight: 700;
  font-family: "Playfair Display", serif;
}
.ofp-box__text {
  color: #888;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  max-width: 600px;
  line-height: 1.8;
}
.ofp-text__row {
  text-align: left;
}
</style>
