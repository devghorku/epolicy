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
    </div>
    <div class="row q-my-md">

      <div class="col-12 q-pt-xl q-pt-md-none">
        <div class="text-center" v-if="loading">
          <q-spinner
              color="primary"
              size="3em"
          />
        </div>
        <div class="row" v-else-if="policyList.length>0">
          <div class="col-12 col-sm-6 col-xl-3 col-md-4 q-pa-sm" v-for="(policy,idx) in policyList" :key="idx">
            <policy-card :policy="policy" @compare="setCompare" style="height: 100%" :compare-item="compareItem"></policy-card>

          </div>
        </div>
        <div class="text-center text-theme-green f-20 text-weight-bold" v-else>
          No results, change your criteria and try again.
        </div>
      </div>
    </div>
  <q-dialog v-model="compareModal" position="bottom" full-width :seamless="true">
      <compare-modal @close="compareModal=false" :compare-item="compareItem"  @compare="setCompare"></compare-modal>
    </q-dialog>
  </div>

</template>

<script>
import PolicyCard from "@/components/_ui/policy-card";
import {mapGetters} from 'vuex'
import CompareModal from "@/components/_modal/compare-modal";

export default {
  name: "term-criterion",
  components: {CompareModal, PolicyCard},
  computed: {
    ...mapGetters(['getTermForm'])
  },
  data() {
    return {
      loading:false,
      policyList:[],
      compareItem: [],
      compareModal: false,
    }
  },
  async mounted(){
    await this.getData()
  },
  methods: {
    async getData(){
      this.loading=true
      const res = await this.axios.post('products/term/search',this.getTermForm)
      this.policyList=res.data
      this.loading=false
    },
    setCompare(val, item) {
      if(!val){
        this.compareItem=this.compareItem.filter(i => i.productId !== item.productId)
      }else {
        if (this.compareItem.length >= 3) {
          this.$q.notify({
            message: "Can't compare more than 3",
            color: 'negative'
          })
        } else if (!this.compareItem.find(i => i.productId === item.productId)) {
          this.compareItem.push(item)
        }
      }
      this.compareModal = this.compareItem.length > 0;
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