<template>
  <div class="partner-box">
    <div class="row q-pa-md-xl q-pa-xs-md items-center "
         style="min-height: 500px;max-width: 1440px;margin: auto">
      <div class="col-12 col-lg-4 flex">
        <div style="max-width: 280px;margin: auto">
          <div class="f-36 f-md-30 text-weight-bold"
               :class="{'text-center':$q.screen.lt.lg}"
          >
            Our Partners
          </div>
        </div>

      </div>
      <div class="col-12 col-lg-8 flex justify-center">
        <div v-for="(partner,idx) in partners" :key="idx" class="partner-card">
          <div class="bg-white partner-img-box">
            <img :src="partner.img" class="partner-img" alt=""/>
          </div>

          <div class="bar left" :style="'background:'+partner.color+';'"></div>
          <div class="bar right" :style="'background:'+partner.color+';'"></div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: "partner",
  data() {
    return {
      partners: [
        {img: require('../../assets/images/partner/p1.png'), color: '#000000'},
        {img: require('../../assets/images/partner/p2.jpg'), color: '#18579A'},
        {img: require('../../assets/images/partner/p3.png'), color: '#4B5994'},
        {img: require('../../assets/images/partner/p4.jpg'), color: '#F7E008'},
        {img: require('../../assets/images/partner/p5.png'), color: '#044FA2'},
        // {img: require('../../assets/images/partner/6.svg'), color: '#F2B354'},
        // {img: require('../../assets/images/partner/7.svg'), color: '#01AEF0'},
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.partner-card {
  width: 130px;
  height: 80px;
  position: relative;
  margin: 40px 30px;
  @media (max-width: $breakpoint-sm-max) {
    margin: 30px 10px;
  }

  .partner-img-box {
    box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.11);
    img{
      height: 100%;
    }
    height: 80px;
    padding: 2px;
    border-radius: 10px;
    text-align: center;
  }


  .bar {
    position: absolute;
    /* Rectangle 1008 */
    width: 10px;
    height: 48px;
    box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.11);
    border-radius: 10px;
    z-index: -1;

    bottom: -15px;

    &.left {
      left: 20px;
    }

    &.right {
      right: 25px;
    }
  }
}

.partner-box {
  position: relative;

  &:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: url("../../assets/images/tringle.svg") no-repeat;
  }
}
</style>