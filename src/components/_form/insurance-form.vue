<template>
  <q-form>
    <div class="row">
      <div class="col-12 col-md-5">
        <label class="f-14">Property Type</label>
        <div>
          <q-radio v-model="formLife.gender" val="male" label="Owned" color="theme-green"/>
          <q-radio v-model="formLife.gender" val="female" label="Rented" color="theme-green"/>
        </div>

      </div>
      <div class="col-12 col-md-7">
        <label class="f-14">Structure</label>
        <div>
          <q-radio v-model="formLife.smoke" val="1" label="Content" color="theme-green"/>
          <q-radio v-model="formLife.smoke" val="2" label="Structure & Content" color="theme-green"/>
        </div>
      </div>
      <div class="col-12">
        <label class="f-14">Area Of Building/Flat</label>
        <q-select outlined
                  v-model="formLife.cover"
                  :options="cover_options"
                  dense
                  class="custom-select q-mb-md bg-input"
        >
        </q-select>
      </div>
      <div class="col-12">
        <label class="f-14">Rate Per Square Feet</label>
        <q-select outlined
                  v-model="formLife.policy_term"
                  :options="cover_options"
                  dense
                  class="custom-select q-mb-md bg-input">
        </q-select>
      </div>
      <div class="col-12">
        <label class="f-14">Total Value Of Building</label>
        <q-select outlined
                  v-model="formLife.income_range"
                  :options="cover_options"
                  dense
                  class="custom-select q-mb-md bg-input"
        >
        </q-select>
      </div>
      <div class="col-12">
        <label class="f-14">Total Value Of Content</label>
        <q-select outlined
                  v-model="formLife.income_range3"
                  :options="cover_options"
                  dense
                  class="custom-select q-mb-md bg-input"
        >
        </q-select>
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
  name: "insurance-form",
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
      this.$router.push({name: 'home-insurance-criterion'})
    }
  }
}
</script>

<style scoped>

</style>