<template>
  <section class="FirstCounter">
    <div class="container">
      <div class="first-counter__box"></div>
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
.first-counter__box {
  display: flex;
  flex-direction: column;
}
</style>
