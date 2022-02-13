<template>
  <section class="OurExpertTeam">
    <div class="container">
      <div class="oet-box">
        <div class="row oet-text__row">
          <h2 class="oet-box__title">Our Expert Team</h2>
          <small class="oet-box__text"
            >Now It’s time to set goals or targets. Not only these goals should
            be realistic business goals.</small
          >
        </div>
        <div class="row oet-team__members">
          <div class="col-3 oet-team__member">
            <img src="./../../public/images/team/team.jpg" alt="" />
            <div class="oet-team-member-img__overlay">
              <h4 class="oet-team-member__name">Kevin Thompson</h4>
              <small class="oet-team-member__job">Head,Legal Advising</small>
              <a href="#" class="oet-team-member__link">learn more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "OurExpertTeam",
};
</script>

<style scoped>
.OurExpertTeam {
  padding: 120px 0;
  background: #908ddc;
  color: #fff;
  min-height: 97vh;
}
.oet-box__title {
  margin-bottom: 30px;
  padding-left: 0;
  font-size: 40px;
  font-weight: 700;
  font-family: "Playfair Display", serif;
}
.oet-box__text {
  padding-left: 0;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  max-width: 600px;
  line-height: 1.8;
  margin-bottom: 80px;
}
.oet-text__row {
  text-align: left;
}
.oet-team__member {
  padding: 0;
  position: relative;

  transition: 0.3s ease all;
}
.oet-team__member:hover {
  box-shadow: 5px 5px 30px 5px rgb(65 62 126 / 80%);
}
.oet-team__member:hover > .oet-team-member-img__overlay {
  transform: translateY(-5px);
}
.oet-team__member:hover
  > .oet-team-member-img__overlay
  > .oet-team-member__link {
  opacity: 1;
}
.oet-team__member img {
  width: 100%;
}
.oet-team-member-img__overlay {
  position: absolute;
  text-align: left;
  bottom: -5px;
  left: 0;
  width: 100%;
  padding: 19px 0 0px 30px;
  background: rgba(65, 62, 126, 0.8);
  height: 105px;
  transition: 0.7s;
}
.oet-team-member__name {
  color: #fff;
  display: block;
  font-size: 20px;
  margin-bottom: 8px;
  font-family: "Poppins", sans-serif;
}
.oet-team-member__job {
  color: #fff;
  display: block;
  font-size: 14px;
  margin-bottom: 8px;
  font-family: "Poppins", sans-serif;
}
.oet-team-member__link {
  color: #7086e6;
  font-size: 12px;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  text-transform: capitalize;
  padding-bottom: 20px;
  opacity: 0;
  transition: 0.5s ease-in-out;
}
</style>
