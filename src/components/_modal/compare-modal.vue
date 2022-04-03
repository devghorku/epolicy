<template>
  <q-card style="width: 600px">
    <div class="q-pa-md f-24 text-weight-bold inter">
      You have selected {{compareItem.length}} banks
      <q-btn icon="close"
             class="float-right text-grey"
             outline
             round size="sm"
             @click="$emit('close')"
      >
      </q-btn>
    </div>

    <q-card-section>
      <div class="flex flex-wrap justify-center">
        <div v-for="(policy,idx) in compareItem" :key="idx">
          <q-img  :src="$imgUrl+policy.providerLogo" width="120px" class="q-ma-sm"></q-img>
        </div>
      </div>

      <div class="text-center q-mt-md">
        <q-btn color="theme-green text-capitalize" unelevated @click="compareFinal">
          Compare
        </q-btn>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "compare-modal",
  props:{
    compareItem:{
      type:Array,
      default:()=>[]
    }
  },
  methods:{
    compareFinal(){
      this.$store.commit('set_policy',this.compareItem)
      this.$emit('close')
      this.$router.push('/compare')
    }
  }
}
</script>

<style scoped>

</style>