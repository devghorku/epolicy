<template>
  <q-form ref="form">
    <div class="row">
      <div class="col-12">
        <label class="f-14">Cover</label>
        <q-select outlined
                  v-model="form.cover"
                  :options="cover_options"
                  dense
                  map-options
                  emit-value
                  class="custom-select q-mb-md bg-input"
        >
        </q-select>
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
        <label class="f-14">Annual Income Range</label>
        <q-select outlined
                  v-model="form.income"
                  :options="incomeOptions"
                  dense
                  emit-value
                  map-options
                  class="custom-select q-mb-md bg-input"
        >
        </q-select>
      </div>
      <div class="col-12">
        <label class="f-14">Number of Adults</label>
        <q-select outlined
                  v-model="adult_no"
                  :options="[1,2]"
                  dense
                  class="custom-select q-mb-md bg-input"
        >
        </q-select>
      </div>
      <div class="col-12">
        <label class="f-14">Number of Children</label>
        <q-select outlined
                  v-model="child_no"
                  :options="[0,1,2,3,4]"
                  dense
                  class="custom-select q-mb-md bg-input"
        >
        </q-select>
      </div>
      <div class="col-12" v-for="(i,idx) in adult_no" :key="'adult'+i">
        <div>Adult {{ i }} :Date Of Birth</div>
        <q-input dense
                 class="custom-input q-mb-md bg-input"
                 outlined
                 v-model="form.adultsDobs[idx]"
                 mask="##/##/####"
                 readonly
                 :rules="[
    (val) => adultRuleValid(form.adultsDobs[idx]) || 'Please enter valid age >=18 years.',
  ]"
                 @click.prevent="$refs['qDateAdult'+i][0].show()">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy :ref="'qDateAdult'+i" transition-show="scale"
                             transition-hide="scale">
                <q-date v-model="form.adultsDobs[idx]" default-view="Years" mask="DD/MM/YYYY"
                        :navigation-max-year-month="`${currentYear}/${pad(currentMonth+1)}`">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat></q-btn>
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
      <div class="col-12" v-for="(i,idx) in child_no" :key="'child'+i">
        <div>Child {{ i }} :Date Of Birth</div>
        <q-input stack-label
                 outlined
                 v-model="form.childrenDobs[idx]"
                 dense
                 class="custom-input q-mb-md bg-input"
                 mask="##/##/####"
                 readonly
                 :rules="[
    (val) => childRuleValid(form.childrenDobs[idx]) || 'Please enter valid age <18 years',
  ]"
                 @click="$refs['qDateChild'+i][0].show()">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy :ref="'qDateChild'+i" transition-show="scale"
                             transition-hide="scale">
                <q-date v-model="form.childrenDobs[idx]" default-view="Years" mask="DD/MM/YYYY"
                        :navigation-max-year-month="`${currentYear}/${pad(currentMonth+1)}`">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat></q-btn>
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
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
import {mapGetters} from 'vuex'
export default {
  name: "health-form",
  data() {
    return {
      form: {
        cover: 500000,
        gender: "M",
        income: "50",
        pincode: 110003,
        adultsDobs: ['28/06/1991'],
        childrenDobs: []
      },
      currentYear: new Date().getFullYear(),
      currentMonth: new Date().getMonth(),
      adult_no: 1,
      child_no: 0,
      cover_options: [
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
        {label: '15 Lac', value: 1500000},
        {label: '20 Lac', value: 2000000},
        {label: '25 Lac', value: 2500000},
        {label: '30 Lac', value: 3000000},
        {label: '40 Lac', value: 4000000},
        {label: '50 Lac', value: 5000000},
        {label: '60 Lac', value: 6000000},
        {label: '70 Lac', value: 7000000},
        {label: '75 Lac', value: 7500000},
        {label: '80 Lac', value: 8000000},
        {label: '90 Lac', value: 9000000},
        {label: '1 Cr', value: 10000000},

      ],
      incomeOptions: [
        {label: "up to 5 Lac", value: "5"},
        {label: "5 - 10 Lac", value: "10"},
        {
          label: "10 - 20 Lac",
          value: "20"
        },
        {label: "20 - 50 Lac", value: "50"},
        {label: "50 Lac - 1 Cr", value: "100"}, {
          label: "1Cr - 5 Cr",
          value: "500"
        }, {label: "> 5 Cr", value: "1000"}
      ],
    }
  },
  computed: {
    pinValid() {
      return this.form.pincode.toString().length === 6;
    },
    ...mapGetters(['getHealthForm'])
  },
  mounted() {
    this.form = this.getHealthForm ? this.getHealthForm : {
      cover: 500000,
      gender: "M",
      income: "50",
      pincode: 110003,
      adultsDobs: ['28/06/1991'],
      childrenDobs: []
    }
  },
  methods: {
    submitForm() {
      this.$refs.form.validate().then(success => {
        if (success) {
          this.$store.commit("set_health_form", this.form)
          this.$router.push({name: 'health-criterion'})
        }
      })
    },
    adultRuleValid(val) {
      var age = this.$moment().diff(this.$moment(val, "DD/MM/YYYY"), 'years', false)
      return age >= 18
    },
    childRuleValid(val) {
      var age = this.$moment().diff(this.$moment(val, "DD/MM/YYYY"), 'years', false)
      return age < 18
    },

    pad(val) {
      if (val < 10) {
        return '0' + val
      }
      return val
    },

  }
}
</script>

<style scoped>

</style>