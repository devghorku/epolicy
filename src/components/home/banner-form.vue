<template>
  <div class="row items-center">
    <div class=" col-sm-7 col-md-6  col-12 q-pa-sm-nd q-pa-xs-md  lt-md "
         :class="{'text-center':$q.screen.xs}"
    >
      <p class="text-weight-bold text-theme-black f-35 lh-40">
        Take Control Of Your <span class="text-theme-green">Insurance</span> Needs
      </p>
      <q-img
          :src="bannerImg"
          spinner-color="white"
          class="lt-sm"
          style="max-width: 100%;"
      ></q-img>
      <q-btn class="bg-theme-green text-capitalize br-10"
             to="/book-expert"
             flat>
        <span class="text-white q-pl-sm f-18">Book An Expert</span>
      </q-btn>
    </div>
    <div class="col-sm-5  col-md-6 col-xl-7  q-pa-xs-md text-center">
      <q-img
          :src="bannerImg"
          spinner-color="white"
          style="max-width: 100%;"
      ></q-img>
      <p class="text-weight-bold text-theme-black f-30 gt-sm">
        Take Control Of Your <span class="text-theme-green">Insurance</span> Needs
      </p>
    </div>
    <div class="col-md-6 col-xl-5 col-12 q-pa-sm-xl q-pa-xs-md q-pa-lg">
      <q-card class="shadow-inset">
        <q-card-section>
          <q-tabs
              v-model="$store.state.currentTab"
              class="text-grey banner-tab"
              active-color="green"
              indicator-color="green"
              narrow-indicator
              align="left"
              inline-label
              breakpoint="426"
          >
            <q-tab name="term"
                   icon="fact_check"
                   label="Term"
                   class="text-capitalize">
            </q-tab>
            <q-tab name="health"
                   icon="fact_check"
                   label="Health"
                   class="text-capitalize">
            </q-tab>
<!--            <q-tab name="accident"-->
<!--                   icon="fact_check"-->
<!--                   label="Personal Accident"-->
<!--                   class="text-capitalize">-->
<!--            </q-tab>-->
<!--            <q-tab name="critical"-->
<!--                   icon="fact_check"-->
<!--                   label="Critical Illness"-->
<!--                   class="text-capitalize">-->
<!--            </q-tab>-->
<!--              <q-tab name="endowment"-->
<!--                     icon="fact_check"-->
<!--                     label="Endowment"-->
<!--                     class="text-capitalize">-->
<!--              </q-tab>-->

<!--            <q-tab name="insurance"-->
<!--                   icon="fact_check"-->
<!--                   label="Home insurance"-->
<!--                   class="text-capitalize">-->
<!--            </q-tab>-->
          </q-tabs>
          <q-tab-panels v-model="$store.state.currentTab" animated>
            <q-tab-panel name="term">
              <term-form/>
            </q-tab-panel>

            <q-tab-panel name="health">
              <health-form/>
            </q-tab-panel>
<!--            <q-tab-panel name="accident">-->
<!--             <accident-form/>-->
<!--            </q-tab-panel>-->
<!--            <q-tab-panel name="critical">-->
<!--              <critical-form/>-->
<!--            </q-tab-panel>-->
<!--            <q-tab-panel name="endowment">-->
<!--             <endowment-form/>-->
<!--            </q-tab-panel>-->

<!--            <q-tab-panel name="insurance">-->
<!--             <insurance-form/>-->
<!--            </q-tab-panel>-->
          </q-tab-panels>
        </q-card-section>
      </q-card>

    </div>
  </div>
</template>

<script>
import TermForm from "../_form/term-form";
import HealthForm from "../_form/health-form";
// import CriticalForm from "../_form/critical-form";
// import EndowmentForm from "../_form/endowment-form";
// import InsuranceForm from "../_form/insurance-form";
// import AccidentForm from "../_form/accident-form";

export default {
  name: "banner-form",
  components: {
    HealthForm, TermForm},
  data() {
    return {
      bannerImg: require('../../assets/images/home/Top Illustration.svg'),
      tab: 'term'
    }
  }
}
</script>

<style lang="scss">
.q-field__native {
  color: $theme-green;
}

</style>