<template>
  <section>
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="d-block w-100 img-fluid"
            src="./../../../public/images/banner/banner4.jpg"
            alt="First slide"
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100 img-fluid"
            src="./../../../public/images/banner/banner3.jpg"
            alt="Third slide"
          />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control__prev-icon" aria-hidden="true">
          <i class="lnr lnr-chevron-left"></i>
        </span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control__next-icon" aria-hidden="true">
          <i class="lnr lnr-chevron-right"></i>
        </span>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: "ConsultingHead",
};
</script>

<style scoped>
.carousel-control-prev,
.carousel-control-next {
  transition: 0.3s ease all;
  height: 11%;
  width: 6%;
  border-radius: 50%;
  background-color: transparent;
}
.carousel-control-prev {
  position: absolute;
  display: flex;
  top: 70%;
  left: 7%;
}
.carousel-control-next {
  position: absolute;
  display: flex;
  top: 70%;
  left: 11%;
}
.carousel-control-next span,
.carousel-control-prev span {
  font-size: 20px;
}
.carousel-control-prev:hover,
.carousel-control-next:hover {
  display: flex;
  background-color: rgba(256, 256, 256, 0.4);
}
.carousel-control-prev:hover span,
.carousel-control-next:hover span {
  font-size: 35px;
}
</style>
