<template>
  <div>
    <div class="row q-ma-md items-center wrap">
      <q-btn icon="arrow_back" unelevated @click="$router.go(-1)">
      </q-btn>
      <q-space></q-space>
      <div class="text-weight-bold f-36 f-md-30 f-xs-22 text-center"
      >
        Quote Criterion
      </div>
      <q-space></q-space>
      <q-btn color="theme-green"
             class="text-capitalize comp-btn"
             size="lg"
              v-if="compareItem.length>0"
             @click="compareModal=true"
      >
        Compare
      </q-btn>
    </div>
    <div class="row q-my-md">
      <div class="col-12 col-md-4 relative-position">
        <filter-policy class="filter-sticky-box gt-sm q-my-md"></filter-policy>
        <div class="filter-fixed-box lt-md">
          <q-btn icon="tune" color="theme-green" class="filter-btn">
            <q-menu :offset="[0, -40]" class="bg-purple">
              <div class="text-right" style=" background: #F7F9FB;">
                <q-btn v-close-popup icon="close" flat>
                </q-btn>
              </div>
              <filter-policy class=""></filter-policy>
            </q-menu>
          </q-btn>
        </div>
      </div>
      <div class="col-12 col-md-8 q-pt-xl q-pt-md-none">
        <div class="row">
          <div class="col-12 col-sm-6 col-xl-4 q-pa-sm" v-for="(policy,idx) in policyList" :key="idx">
            <policy-card :policy="policy" @compare="setCompare"></policy-card>
          </div>
        </div>
      </div>
    </div>
    <q-dialog v-model="compareModal">
      <compare-modal @close="compareModal=false" :compare-item="compareItem"></compare-modal>
    </q-dialog>
  </div>

</template>

<script>
import FilterPolicy from "@/components/_ui/filter-policy";
import PolicyCard from "@/components/_ui/policy-card";
import {mapGetters} from 'vuex'
import CompareModal from "@/components/_modal/compare-modal";

export default {
  name: "accident-criterion",
  components: {CompareModal, PolicyCard, FilterPolicy},
  computed: {
    ...mapGetters(['policyList'])
  },
  data() {
    return {
      compareItem: [],
      compareModal: false,
    }
  },

  methods: {

    setCompare(val, item) {
      if(!val && this.compareItem.findIndex(i => i.productId === item.productId)){
        var idx = this.compareItem.findIndex(i => i.productId === item.productId)
        if (idx !== -1) {
          this.compareItem.splice(idx, 1)
        }
      }
      else if(this.compareItem.length>=3){
        this.$q.notify({
          message: "Can't compare more than 3",
          color: 'negative'
        })
      }
      else if (val && !this.compareItem.find(i=>i.productId===item.productId)) {
        this.compareItem.push(item)
      }
    },
  }
}
</script>

<style scoped>
.filter-sticky-box {
  border-radius: 0 20px 20px 0;
  position: sticky;
  top: 110px;
  background: #F7F9FB;
}

.filter-fixed-box {
  position: fixed;
  left: 0;
  top: 155px;
  z-index: 2;
}

.filter-btn {
  border-radius: 0 10px 10px 0;
}
</style>