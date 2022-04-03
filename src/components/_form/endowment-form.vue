<template>
  <q-form>
    <div class="row">
      <div class="col-12">
        <label class="f-14">Investment</label>
        <q-select outlined
                  v-model="form.invest"
                  :options="invest_options"
                  dense
                  class="custom-select q-mb-md bg-input"
        >
        </q-select>
      </div>
      <div class="col-12">
        <label class="f-14">Policy Term</label>
        <q-select outlined
                  v-model="form.policy_term"
                  :options="year_options"
                  dense
                  class="custom-select q-mb-md bg-input">
        </q-select>
      </div>
      <div class="col-12">
        <label class="f-14">Pay for</label>
        <q-select outlined
                  v-model="form.pay_for"
                  :options="year_options"
                  dense
                  class="custom-select q-mb-md bg-input"
        >
        </q-select>
      </div>
      <div class="col-12">
        <label class="f-14">Date of Birth</label>
        <q-input dense
                 class="custom-input q-mb-md bg-input"
                 outlined
                 v-model="form.birth_date"
                 mask="##/##/####"
                 readonly
                 error-message="Please enter valid age >=18 years"
                 :error="!adultRuleValid(form.birth_date)"
                 @click.prevent="$refs.birth_date.show()">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy ref="birth_date" transition-show="scale"
                             transition-hide="scale">
                <q-date v-model="form.birth_date" default-view="Years" mask="DD/MM/YYYY"
                        :navigation-max-year-month="`${currentYear}/${currentMonth+1}`">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat></q-btn>
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
      <div class="col-12">
        <label class="f-14">Pincode</label>
        <q-input outlined
                 v-model="form.pincode"
                 dense
                 type="number"
                 error-message="Please enter valid pincode"
                 :error="!pinValid"
                 class="q-mb-md bg-input"
        >
        </q-input>
      </div>
      <div class="col-12">
        <label class="f-14">Gender</label>
        <div>
          <q-radio v-model="form.gender" val="male" label="Male" color="theme-green"/>
          <q-radio v-model="form.gender" val="female" label="Female" color="theme-green"/>
        </div>

      </div>
      <div class="col-12 q-px-xs-xl q-px-sm-none q-pt-md">
        <q-btn class="full-width bg-theme-green text-white br-10 f-18 text-capitalize"
               label="Get quote"
               unelevated
               @click="submitForm">

        </q-btn>
      </div>
    </div>
  </q-form>
</template>

<script>
export default {
  name: "endowment-form",
  data() {
    return {
      form: {
        birth_date: '28/06/1991',
        gender: "M",
        income: "50",
        pincode:110003,
      },
      currentYear: new Date().getFullYear(),
      currentMonth: new Date().getMonth(),
      invest_options: [
        {label: '30 Hazar', value: 30000},
        {label: '40 Hazar', value: 40000},
        {label: '50 Hazar', value: 50000},
        {label: '60 Hazar', value: 60000},
        {label: '70 Hazar', value: 70000},
        {label: '80 Hazar', value: 80000},
        {label: '90 Hazar', value: 90000},
        {label: '1 Lac', value: 100000},
        {label: '2 Lac', value: 200000},
        {label: '3 Lac', value: 300000},
        {label: '4 Lac', value: 400000},
        {label: '5 Lac', value: 500000},
        {label: '6 Lac', value: 600000},
        {label: '7 Lac', value: 700000},
        {label: '8 Lac', value: 800000},
        {label: '9 Lac', value: 900000},
        {label: '10 Lac', value: 1000000},
        {label: '20 Lac', value: 2000000},
        {label: '25 Lac', value: 2500000},
        {label: '30 Lac', value: 3000000},
        {label: '40 Lac', value: 4000000},
        {label: '50 Lac', value: 5000000},
        {label: '60 Lac', value: 6000000},
        {label: '70 Lac', value: 7000000},
        {label: '80 Lac', value: 8000000},
        {label: '90 Lac', value: 9000000},
        {label: '1 Cr', value: 10000000},
        {label: '1.25 Cr', value: 12500000},
        {label: '1.5 Cr', value: 15000000},
        {label: '2 Cr', value: 20000000},
        {label: '3 Cr', value: 30000000},
        {label: '4 Cr', value: 40000000},
        {label: '5 Cr', value: 50000000},

      ],
      year_options: [
        {label: '5 years',value: 5,},
        {label: '6 years',value: 6,},
        {label: '7 years',value: 7,},
        {label: '8 years',value: 8,},
        {label: '9 years',value: 9,},
        {label: '10 years',value: 10,},
        {label: '11 years',value: 11,},
        {label: '12 years',value: 12,},
        {label: '13 years',value: 13,},
        {label: '14 years',value: 14,},
        {label: '15 years',value: 15,},
        {label: '16 years',value: 16,},
        {label: '17 years',value: 17,},
        {label: '18 years',value: 18,},
        {label: '19 years',value: 19,},
        {label: '20 years',value: 20,},
      ],
    }
  },
  computed:{
    pinValid(){
      return this.form.pincode.toString().length===6;
    },
  },
  methods: {
    submitForm() {
      this.$router.push({name: 'endowment-criterion'})
    },
    adultRuleValid(val){
      var age=this.$moment().diff(this.$moment(val,"DD/MM/YYYY"),'years',false)
      return age>=18
    },
  }
}
</script>

<style scoped>

</style>