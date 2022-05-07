<template>
    <q-form>
                        <div class="row">
                            <div class="col-12">
                                <q-select outlined
                                          v-model="form.current_liability"
                                          :options="liabilities"
                                          class="custom-select q-mb-md"
                                          stack-label
                                          label="Current Liability"
                                >
                                </q-select>
                            </div>
                            <div class="col-12">
                                <q-select outlined
                                          v-model="form.annual_income"
                                          :options="incomes"
                                          class="custom-select q-mb-md"
                                          stack-label
                                          label="Annual Income"
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
        data(){
            return{
                form: {
                  dob: "28/06/1991",
                },
                liabilities: [
                  {label: '10 Lac', value: 1000000},
                  {label: '20 Lac', value: 2000000},
                  {label: '30 Lac', value: 3000000},
                  {label: '40 Lac', value: 4000000},
                  {label: '50 Lac', value: 5000000},
                  {label: '60 Lac', value: 6000000},
                  {label: '70 Lac', value: 7000000},
                  {label: '80 Lac', value: 8000000},
                  {label: '1 Cr', value: 10000000},
                ],
              incomes: [
                {label: '3 Lac', value: 500000},
                {label: '4 Lac', value: 500000},
                {label: '5 Lac', value: 500000},
                {label: '7 Lac', value: 500000},
                {label: '10 Lac', value: 1000000},
                {label: '15 Lac', value: 1500000},
                {label: '20 Lac', value: 2000000},
                {label: '30 Lac', value: 3000000},
                {label: '40 Lac', value: 4000000},
                {label: '50 Lac', value: 5000000},
                {label: '60 Lac', value: 6000000},
                {label: '70 Lac', value: 7000000},
                {label: '80 Lac', value: 8000000},
                {label: '1 Cr', value: 10000000},
              ],
            }
        },
      computed:{
        adultRuleValid(){
          var age=this.$moment().diff(this.$moment(this.form.dob,"DD/MM/YYYY"),'years',false)
          return age>=18
        },
        sum_assured(){
          return 1000000
        }
      }
    }
</script>

<style scoped>

</style>