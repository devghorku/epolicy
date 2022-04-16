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
        <div class="row">
          <div class="col-12 col-sm-6 col-xl-4 q-pa-sm" v-for="(policy,idx) in filteredPolicyList" :key="idx">
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
  name: "term-criterion",
  components: {CompareModal, PolicyCard, FilterPolicy},
  computed: {
    ...mapGetters(['policyList']),
    filteredPolicyList() {
      var data = this.policyList
      if (this.filter.room_rent.length>0) {
        data=data.filter(policy=>{
          let val=this.getFeatureValue(policy,'Room Rent Limit')
          return this.filter.room_rent.includes(val)
        })
      }

      return data
    }
  },
  data() {
    return {
      compareItem: [],
      compareModal: false,
      filter: {
        room_rent: [],
        hospitalization: [],
        ped_waiting: [],
      },
    }
  },

  methods: {
    setCompare(val, item) {
      console.log('hii')
      if (val && !this.compareItem.find(i => i.id === item.id)) {
        this.compareItem.push(item)
      } else {
        var idx = this.compareItem.findIndex(i => i.id === item.id)
        if (idx !== -1) {
          this.compareItem.splice(idx, 1)
        }
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
      this.filter = item
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