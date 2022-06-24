<template>
  <div class="filter q-py-lg">
    <div class="f-24 text-weight-bold q-mx-xl q-mb-sm">Filter</div>
    <div class="f-16 text-theme-green text-weight-bold q-mx-xl q-mb-sm">Room Rent</div>
    <div class="q-mb-md">
      <q-option-group
          :options="death_options"
          type="checkbox"
          color="theme-green"
          v-model="filter.room_rent"
          class="q-px-xl"
          @input="$emit('change',filter)"></q-option-group>
    </div>
    <div class="f-16 text-theme-green text-weight-bold q-mx-xl q-mb-sm">Hospitalization</div>
    <div class="q-mb-md">
      <q-option-group
          :options="hospitalization"
          type="checkbox"
          color="theme-green"
          v-model="filter.hospitalization"
          class="q-px-xl"
          @input="$emit('change',filter)"></q-option-group>
    </div>
    <div class="f-16 text-theme-green text-weight-bold q-mx-xl q-mb-sm">PED Waiting</div>
    <div class="q-mb-md">
      <q-option-group
          :options="ped_waiting"
          type="checkbox"
          color="theme-green"
          v-model="filter.ped_waiting"
          class="q-px-xl"
          @input="$emit('change',filter)"></q-option-group>
    </div>

    <!--        <div class="q-px-xs-xl q-px-sm-none q-py-md">-->
    <!--            <q-btn class="full-width bg-theme-green text-white br-10" label="Filter"></q-btn>-->
    <!--        </div>-->
  </div>
</template>

<script>
export default {
  name: "filter-policy",
  props:{
    type:{
      type:String,
      default:''
    }
  },
  mounted(){
    if(this.type==='health') {
      this.filter = this.$store.state.h_filter
    }
  },
  data() {
    return {
      filter:{
        room_rent:[],
        hospitalization:[],
        ped_waiting:[],
      },
     death_options: [
        {label: 'No Limit', value: "NL"},
        {label: 'Single Private Room', value: "SPR"},
        {label: 'Single Private Room (Upgradable)', value: "SPRU"},
        {label: '% of Sum Assured', value: "PSA"},
      ],
      hospitalization: [
        {label: 'OPD', value: 'opd'},
        {label: 'No Co-Payment', value: 'ncp'},
        {label: 'Maternity', value: 'maternity'},
        {label: 'Restoration', value: 'restoration'},
        {label: 'Ayush Benefit', value: 'ayush'},
      ],
      ped_waiting: [
        {label: 'Covered after 2 Years', value: 'CA2'},
        {label: 'Covered after 3 Years', value: 'CA3'},
        {label: 'Covered after 4 Years', value: 'CA4'},
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