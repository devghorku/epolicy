<template>
  <q-form>
    <div class="row">
      <div class="col-12">
        <q-input outlined
                 v-model="form.current_liability"
                 class="custom-select q-mb-md no-input-spinner"
                 stack-label
                 type="number"
                 label="Current Liability"
        >
        </q-input>
      </div>
      <div class="col-12">
        <q-input outlined
                 v-model="form.annual_income"
                 class="custom-select q-mb-md no-input-spinner"
                 stack-label
                 type="number"
                 label="Annual Income"
                 ref="annual"
                 :error="numberRules"
                 error-message="Should not less than 1 lac"

        >
        </q-input>
      </div>
      <div class="col-12">
        <label class="f-14">Date of Birth</label>
        <q-input dense
                 outlined
                 class="q-mb-md bg-input"
                 v-model="form.dob"
                 mask="##/##/####"
                 readonly
                 error-message="Please enter valid age >=18 years"

                 :error="!adultRuleValid"
                 @click="$refs.qDateProxy.show()"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy ref="qDateProxy" transition-show="scale"
                             transition-hide="scale">
                <q-date v-model="form.dob" default-view="Years" mask="DD/MM/YYYY"
                        :navigation-max-year-month="`${currentYear}/${currentMonth+1}`">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat/>
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
      <div class="col-12">
        <q-input outlined
                 v-model="sum_assured"
                 class="custom-select q-mb-md bg-light"
                 stack-label
                 readonly
                 label="Sum Assured"
        >
        </q-input>
      </div>
      <!--                            <div class="col-12 q-px-xs-xl q-px-sm-none">-->
      <!--                                <q-btn class="full-width bg-theme-green text-white br-10 f-18 text-capitalize"-->
      <!--                                       label="Get Sum Assured" ></q-btn>-->
      <!--                            </div>-->
    </div>
  </q-form>
</template>

<script>
export default {
  name: "calculator-form",
  data() {
    return {
      form: {
        dob: "28/06/1991",
      },
      currentYear: new Date().getFullYear(),
      currentMonth: new Date().getMonth(),
    }
  },
  computed: {
    adultRuleValid() {
      var age = this.$moment().diff(this.$moment(this.form.dob, "DD/MM/YYYY"), 'years', false)
      return age >= 18
    },
    numberRules() {
      return this.form.annual_income < 100000
    },
    sum_assured() {
      var age = this.$moment().diff(this.$moment(this.form.dob, "DD/MM/YYYY"), 'years', false)
      let l = this.form.current_liability ? parseInt(this.form.current_liability) : 0
      let i = this.form.annual_income && this.form.annual_income > 99999 ? parseInt(this.form.annual_income) : 0
      if (age >= 60) {
        return i * 8 + l
      } else if (age >= 50) {
        return i * 12 + l
      } else if (age >= 35) {
        return i * 15 + l
      } else if (age >= 18) {
        return i * 20 + l
      }
      return 0
    }
  }
}
</script>

<style lang="scss">
.no-input-spinner {

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

}
</style>