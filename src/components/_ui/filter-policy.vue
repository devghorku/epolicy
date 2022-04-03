<template>
  <div class="filter q-py-lg">
    <div class="f-24 text-weight-bold q-mx-xl q-mb-sm">Filter</div>
    <div class="f-16 text-theme-green text-weight-bold q-mx-xl q-mb-sm">Death Benefit</div>
    <div class="q-mb-md">
      <q-option-group
          :options="death_options"
          type="checkbox"
          color="theme-green"
          v-model="filter.death_options"
          class="q-px-xl"
      />
    </div>
    <div class="f-16 text-theme-green text-weight-bold q-mx-xl q-mb-sm">Hospitalization</div>
    <div class="q-mb-md">
      <q-option-group
          :options="hospitalization"
          type="checkbox"
          color="theme-green"
          v-model="filter.hospitalization"
          class="q-px-xl"
      />
    </div>
    <div class="f-16 text-theme-green text-weight-bold q-mx-xl q-mb-sm">PED Waiting</div>
    <div class="q-mb-md">
      <q-option-group
          :options="ped_waiting"
          type="checkbox"
          color="theme-green"
          v-model="filter.ped_waiting"
          class="q-px-xl"
      />
    </div>

    <!--        <div class="q-px-xs-xl q-px-sm-none q-py-md">-->
    <!--            <q-btn class="full-width bg-theme-green text-white br-10" label="Filter"></q-btn>-->
    <!--        </div>-->
  </div>
</template>

<script>
export default {
  name: "filter-policy",
  data() {
    return {
      filter:{
        death_options:[],
        hospitalization:[],
        ped_waiting:[],
      },
     death_options: [
        {label: 'No Limit', value: 1},
        {label: 'Single Private Room', value: 2},
        {label: 'Single Private Room (Upgradable)', value: 3},
        {label: '% of Sum Assured', value: 4},
      ],
      hospitalization: [
        {label: 'OPD', value: 1},
        {label: 'No Co-Payment', value: 2},
        {label: 'Maternity', value: 3},
        {label: 'Restoration', value: 4},
        {label: 'Ayush Benefit', value: 5},
      ],
      ped_waiting: [
        {label: 'Covered after 2 Years', value: 1},
        {label: 'Covered after 3 Years', value: 2},
        {label: 'Covered after 4 Years', value: 3},
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.filter {
  background: #F7F9FB;
}
</style>