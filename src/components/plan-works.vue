<template>
  <div class="q-pa-xs-md q-pa-md-xl">
    <div class="f-36 text-weight-bold text-center q-pb-lg">
      How Does Plan Works?
    </div>
    <div class="">
      <ul class="step-box">
        <li v-for="(plan,idx) in plans" :key="idx">
          <div>
            <div class="step-img">
              <q-img :src="plan.img" v-if="plan.img"></q-img>
            </div>
            <div class="step-circle" v-if="!plan.noBullet">
              <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="22.5" cy="22.5" r="14.5" fill="#5DAC31"/>
                <circle cx="22.5" cy="22.5" r="22.5" fill="#5DAC31" fill-opacity="0.2"/>
              </svg>
            </div>
            <div v-else  class="step-circle">
            </div>
            <div class="step-text text-center" v-html="plan.text"></div>
          </div>

        </li>
      </ul>
    </div>
    <div class="f-24 text-weight-bold text-center q-mt-lg">
      Confused? Call At
    </div>
    <div class="text-center">
      <q-btn color="theme-green"
             icon-right="phone"
             type="a"
             href="tel:08046810500"
             size="lg"
             class="br-10 q-my-md">
        <span class="q-pr-md">08046810500</span>
      </q-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "plan-works",
  props: {
    plans: {
      type: Array,
      default: () => {
      }
    }
  }
}
</script>

<style scoped lang="scss">
.step-box {
  position: relative;
  display: flex;
  justify-content: center;
  padding: 0!important;
  max-width: 100%;
  overflow: hidden;
  li {
    position: relative;
    list-style: none;
    width: 280px;
    margin:0 35px;

    .step-img {
      width: 140px;
      height: 140px;
      margin: auto;
    }

    .step-text {
      line-height: 30px;
      font-family: 'Inter Medium', sans-serif;
      font-size: 16px;
    }

    .step-circle {
      margin: 30px;
      text-align: center;
      z-index: 1;
      height: 45px;
      svg{
        z-index: 1;
        position: absolute;
        left:50%;
        transform: translateX(-50%);
      }
    }
  }

  &:after {
    content: '';
    height: 3px;
    background-color: #000000;
    position: absolute;
    top: 192px;
    width: 1020px;
    z-index: 0;
    left: 50%;
    transform: translateX(-50%);
  }
}
@media (max-width: $breakpoint-md-max) {
  .step-box {
    li {
      width: 180px;
      margin:0 5px;

      .step-img {
        width: 80px;
        height: 80px;
      }

      .step-circle {
        margin: 20px;
        height: 25px;
        svg{
         height: 25px;
          width: 25px;
        }
      }
    }

    &:after {
      width: 555px;
      top:111px;
    }
  }
}
@media (max-width: 754px) {
  .step-box {
    flex-direction: column!important;
    li {
      width: 40%;
      .step-circle {
        position: absolute;
        margin: 0!important;
        right:calc(-10vw + 12.5px);
      }
    }
    li:nth-child(even){
      margin-left: auto;
      .step-circle {
        left:calc(-10vw + 2.5px);
        right: unset!important;
      }
    }

    &:after {
      content: '';
      width: 3px;
      height: 75%!important;
      left:calc(50% - 5px);
      top:90px;
    }
  }
}
</style>