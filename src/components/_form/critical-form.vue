<template>
  <q-form>
    <div class="row">
      <div class="col-12">
        <label class="f-14">Cover</label>
        <q-select outlined
                  v-model="formLife.cover"
                  :options="cover_options"
                  dense
                  class="custom-select q-mb-md bg-input"
        >
        </q-select>
      </div>
      <div class="col-12">
        <label class="f-14">Pincode</label>
        <q-input outlined
                  v-model="formLife.policy_term"
                  dense
                  class="q-mb-md bg-input">
        </q-input>
      </div>

      <div class="col-12">
        <label class="f-14">Date of Birth</label>
        <q-input dense
                 outlined
                 class="custom-select q-mb-md bg-input"
                 v-model="formLife.birth_date"
                 mask="date"
                 >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy ref="qDateProxy" transition-show="scale"
                             transition-hide="scale">
                <q-date v-model="formLife.birth_date" default-view="Years">
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
        <label class="f-14">Annual Income</label>
        <q-input outlined
                  v-model="formLife.income_range"
                  dense
                 type="number"
                  class="q-mb-md bg-input"
        >
        </q-input>
      </div>
      <div class="col-12">
        <label class="f-14">Employment</label>
        <div>
          <q-radio v-model="formLife.smoke" val="yes" label="Yes" color="theme-green"/>
          <q-radio v-model="formLife.smoke" val="no" label="No" color="theme-green"/>
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
  name: "critical-form",
  data() {
    return {
      formLife: {
        birth_date: null,
        gender:'male',
        smoke:'yes'
      },
      cover_options: [
        {
          label: 'Option 1',
          value: '1',
        },
        {
          label: 'Option 2',
          value: '2',
        }
      ],
    }
  },
  methods: {
    submitForm() {
      this.$router.push({name: 'critical-illness-criterion'})
    }
  }
}
</script>

<style scoped>

</style>