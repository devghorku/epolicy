<template>
  <q-card style="width: 600px">

    <q-card-section class="flex flex-wrap justify-between items-center ">
      <div class="flex flex-wrap justify-center items-center">
        <q-card v-for="(policy,idx) in compareItem" :key="idx" class="relative-position q-mr-lg q-my-lg">
          <q-card-section horizontal>
            <q-img :src="$imgUrl+policy.providerLogo" width="60px" class="col q-ma-sm" contain></q-img>
            <q-card-section>
              <div class="text-section"><strong>{{ policy.productName }}</strong></div>
              <div class="text-section">{{ policy.providerName }}</div>
            </q-card-section>
          </q-card-section>
          <q-btn icon="close" round
                 size="xs"
                 class="absolute close-btn"
                 color="theme-green"
                 @click="$emit('compare',false,policy)"
          >
          </q-btn>
        </q-card>
      </div>

      <div class="flex items-center">
        <q-btn color="theme-green text-capitalize" size="lg"
               unelevated
               :disable="!(compareItem.length>1 && compareItem.length<4)"
               @click="compareFinal"
               class="q-mx-md">
          Compare
        </q-btn>
        <q-btn class="float-right text-grey q-mx-md"
               flat

               @click="$emit('close')"
        >
          Close
        </q-btn>
      </div>

    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "compare-modal",
  props: {
    compareItem: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    compareFinal() {
      this.$store.commit('set_policy', this.compareItem)
      this.$emit('close')
      this.$router.push('/compare')
    }
  }
}
</script>

<style scoped>
.close-btn{
  right:-10px;
  top:-10px;
}
.text-section{
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>