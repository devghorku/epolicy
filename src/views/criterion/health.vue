<template>
  <div>
    <div class="row q-ma-md q-pb-lg-lg items-center wrap">
      <q-btn icon="arrow_back" unelevated @click="$router.go(-1)">
      </q-btn>
      <q-space></q-space>
      <div class="text-weight-bold f-36 f-md-30 f-xs-22 text-center"
      >
        Quote Criterion
      </div>
      <q-space></q-space>
      <q-btn color="theme-green"
             class="text-capitalize"
             size="lg"
             unelevated v-if="compareItem.length>0"
             @click="compareModal=true"
      >
        Compare
      </q-btn>
    </div>
    <div class="row q-my-md">
      <div class="col-12 col-md-4 relative-position">
        <filter-policy class="filter-sticky-box gt-sm q-my-md" @change="filterChange"></filter-policy>
        <div class="filter-fixed-box lt-md">
          <q-btn icon="tune" color="theme-green" class="filter-btn">
            <q-menu :offset="[0, -40]" class="bg-purple">
              <div class="text-right" style=" background: #F7F9FB;">
                <q-btn v-close-popup icon="close" flat>
                </q-btn>
              </div>
              <filter-policy class="" @change="filterChange"></filter-policy>
            </q-menu>
          </q-btn>
        </div>
      </div>
      <div class="col-12 col-md-8 q-pt-xl q-pt-md-none">
        <div class="text-center" v-if="loading">
          <q-spinner
              color="primary"
              size="3em"
          />
        </div>
        <div class="row" v-else-if="policyList.length>0">
          <div class="col-12 col-xl-4 col-sm-6 q-pa-sm"
               v-for="(policy,idx) in filteredPolicyList" :key="idx">
            <policy-card :policy="policy" @compare="setCompare" style="height: 100%"></policy-card>
          </div>
        </div>
        <div class="text-center text-theme-green f-20 text-weight-bold" v-else>
          No results, change your criteria and try again.
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
  name: "term-criterion",
  components: {CompareModal, PolicyCard, FilterPolicy},
  computed: {
    ...mapGetters(['getHealthForm']),
    filteredPolicyList() {
      var data = this.policyList
      console.log(this.filter.room_rent)
      if (this.filter.room_rent.length>0) {
        data=data.filter(policy=>{
          let val=this.getFeatureValue(policy,'Room Rent Limit')
          return this.filter.room_rent.includes(val)
        })
      }
      if(this.filter.ped_waiting.length>0){
        data=data.filter(policy=>{
          let val=this.getFeatureValue(policy,'PED Waiting Period')
          return this.filter.ped_waiting.includes(val)
        })
      }
      if(this.filter.hospitalization.length>0){
        data=data.filter(policy=>{
          let hosp=[];
          if(this.getFeatureValue(policy,'OPD') === 'Y'){
            hosp.push('opd')
          }
          if(this.getFeatureValue(policy,'No Co-Payment') === 'Y'){
            hosp.push('ncp')
          }
          if(this.getFeatureValue(policy,'Maternity') === 'Y'){
            hosp.push('maternity')
          }
          if(this.getFeatureValue(policy,'Restoration Benefit') === 'Y'){
            hosp.push('restoration')
          }
          if(this.getFeatureValue(policy,'Ayush Benefit') === 'Y'){
            hosp.push('ayush')
          }
          console.log(this.filter.hospitalization,hosp)
          return this.filter.hospitalization.every( ai => hosp.includes(ai) )
        })
      }
      return data
    }
  },
  data() {
    return {
      loading:false,
      policyList:[],
      compareItem: [],
      compareModal: false,
      filter: {
        room_rent: [],
        hospitalization: [],
        ped_waiting: [],
      },
    }
  },
  async mounted(){
    await this.getData()
  },
  methods: {
    async getData(){
      this.loading=true
      const res = await this.axios.post('products/health/search',this.getHealthForm)
      this.policyList=res.data
      this.loading=false
    },
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
    getProductFeature(product) {
      let d = product.featureGroups.find(item => item.name === 'Filters')
      if (d) {
        return d.productFeatures
      } else return []
    },
    getFeatureValue(product,name){
      let feature = this.getProductFeature(product)
      let sub_feature=feature.find(item=>item.name===name)
      if(sub_feature){
        return sub_feature.value
      }
    },
    filterChange(item) {
      this.filter = item;
      console.log(this.filter.room_rent)
    }
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