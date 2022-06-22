<template>
  <q-form ref="form">
    <div class="row">
      <div class="col-12">
        <label class="f-14">Cover</label>
        <q-select outlined
                  v-model="form.cover"
                  :options="cover_options"
                  dense
                  emit-value
                  map-options
                  class="custom-select q-mb-md bg-input"
        >
        </q-select>
      </div>
      <div class="col-12">
        <label class="f-14">Policy Term</label>
        <q-select outlined
                  v-model="form.term"
                  :options="termOptions"
                  dense
                  emit-value
                  map-options
                  class="custom-select q-mb-md bg-input">
        </q-select>
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
        <label class="f-14">Date of Birth</label>
        <q-input dense
                 outlined
                 class="q-mb-md bg-input"
                 v-model="form.dob"
                 mask="##/##/####"
                 readonly
                 :rules="[
    (val) => adultRuleValid || 'Please enter valid age >=18 years.',
  ]"
                 @click="$refs.qDateProxy.show()"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy ref="qDateProxy" transition-show="scale"
                             transition-hide="scale">
                <q-date v-model="form.dob" default-view="Years"
                        mask="DD/MM/YYYY"
                        :navigation-max-year-month="`${currentYear}/${pad(currentMonth+1)}`">
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
        <label class="f-14">Gender</label>
        <div>
          <q-radio v-model="form.gender" val="M" label="Male" color="theme-green"/>
          <q-radio v-model="form.gender" val="F" label="Female" color="theme-green"/>
        </div>

      </div>
      <div class="col-12">
        <label class="f-14">Smoker</label>
        <div>
          <q-radio v-model="form.isSmoker" val="Y" label="Yes" color="theme-green"/>
          <q-radio v-model="form.isSmoker" val="N" label="No" color="theme-green"/>
        </div>
      </div>
      <div class="col-12 q-px-xs-xl q-px-sm-none q-pt-md">
        <q-btn class="full-width bg-theme-green text-white br-10 f-18 text-capitalize"
               label="Get quote"
               unelevated
               @click.prevent="submitForm">

        </q-btn>

      </div>
    </div>
  </q-form>
</template>

<script>
export default {
  name: "term-form",
  data() {
    return {
      form: {
        cover: 5000000,
        dob: "28/06/1991",
        income: "50",
        gender: 'M',
        isSmoker: 'N',
        term: 10
      },
      cover_options: [
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
        {label: '10 Cr', value: 100000000},
        {label: '15 Cr', value: 150000000},
        {label: '20 Cr', value: 200000000},
        {label: '25 Cr', value: 250000000},
        {label: '30 Cr', value: 300000000},
        {label: '40 Cr', value: 400000000},
        {label: '50 Cr', value: 500000000},
        {label: '60 Cr', value: 600000000},
        {label: '70 Cr', value: 700000000},
        {label: '80 Cr', value: 800000000},
        {label: '90 Cr', value: 900000000},
        {label: '100 Cr', value: 1000000000},
      ],
      incomeOptions: [
        {label: "up to 5 Lac", value: "5"}, {label: "5 - 10 Lac", value: "10"}, {
          label: "10 - 20 Lac",
          value: "20"
        }, {label: "20 - 50 Lac", value: "50"}, {label: "50 Lac - 1 Cr", value: "100"}, {
          label: "1Cr - 5 Cr",
          value: "500"
        }, {label: "> 5 Cr", value: "1000"}
      ],
      currentYear: new Date().getFullYear(),
      currentMonth: new Date().getMonth()
    }
  },
  computed: {
    adultRuleValid() {
      var age = this.$moment().diff(this.$moment(this.form.dob, "DD/MM/YYYY"), 'years', false)
      return age >= 18
    },
    termOptions() {
      let options = []
      for (let i = 5; i < 86; i++) {
        options.push({label: i + ' Years', value: i},)
      }
      return options
    },

  },
  methods: {
    submitForm() {
      this.$refs.form.validate().then(success => {
        if (success) {
          this.$store.commit("set_term_form", this.form)
          this.$router.push({name: 'term-criterion'})
        }
      })
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