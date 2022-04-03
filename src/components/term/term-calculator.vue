<template>
    <div class="row sum-box q-pa-md-xl q-pa-xs-md">
      <div class="col-12 text-center">
        <div class="f-36 f-md-30 q-pb-md text-weight-bold">Sum Assured Calculator</div>
      </div>
        <div class="col-md-7 col-12 q-pa-sm-xl q-pa-xs-md flex">
            <q-img
                    :src="bannerImg"
                    spinner-color="white"
                    style="max-width: 60%;margin: auto"
            ></q-img>
        </div>
        <div class="col-md-5 col-12 q-pa-sm-xl q-pa-xs-md">
          <q-card class="shadow-inset q-pa-sm-lg q-pa-xs-md" style="background: white">
            <q-card-section>
            <calculator-form/>
            </q-card-section>
          </q-card>
        </div>
    </div>
</template>

<script>
    import CalculatorForm from "../_form/calculator-form";

    export default {
        name: "term-calculator",
        components: {CalculatorForm},
        data() {
            return {
                bannerImg: require('../../assets/images/term & health/Sum Assured Calculator Illustration.svg'),
            }
        }
    }
</script>

<style lang="scss">
.sum-box {
  position: relative;
  &:after{
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top:0;
    left:0;
    background: url("../../assets/images/tringle.svg") no-repeat;
    z-index: -1;
  }
}
</style>
