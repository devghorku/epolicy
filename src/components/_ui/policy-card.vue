<template>
  <div class="q-px-lg-md q-px-md-xs q-py-md h-100">
    <q-card class="policy-card inter h-100">
      <div class="text-center relative-position" style="height: 80px">
        <div class="img-box flex">
          <q-img :src="$imgUrl+policy.providerLogo"
                 v-if="policy.providerLogo"
                 contain
                 width="100%"
                 height="100%"
          />
        </div>

        <div class="absolute lt-md" style="top:10px;right:5px;">
          <q-btn icon="more_vert" flat color="theme-green">
            <q-menu self="top end" :offset="[-50,-30]">
              <div class="text-right">
                <q-btn v-close-popup icon="close" flat>
                </q-btn>
              </div>
              <div >
                <q-btn class="text-decorated f-14 text-capitalize"
                       flat
                       color="theme-green">
                  Policy Brochure
                </q-btn>
              </div>
              <div>
                <q-btn class="text-decorated f-14 text-capitalize"
                       flat
                       color="theme-green">
                  Policy Terms & Conditions
                </q-btn>
              </div>
              <div class="q-pb-md q-pt-xs q-px-xs">
                <q-checkbox
                    v-model="compare"
                    color="theme-green"
                    @input="$emit('compare',compare,policy)"
                >
                  <div class="f-16">Compare</div>
                </q-checkbox>
              </div>
            </q-menu>
          </q-btn>
        </div>
      </div>
      <q-card-section class="q-py-sm">
        <div class="text-center f-30 f-md-22 text-weight-bold ">{{ policy.providerName }}</div>
        <div class="text-center f-30 f-md-22 text-weight-bold" style="color: #FFA412;">
          {{ policy.productName }}
        </div>
        <div class="q-py-md">
          <q-list>
            <q-item v-for="(feature,idx) in features" :key="idx">
              <q-item-section avatar top>
                <q-icon color="theme-green" name="check_circle"/>
              </q-item-section>
              <q-item-section>
                <q-item-label class="f-16">
                  {{ feature.name }}
                  <q-tooltip>
                    {{ feature.tooltip }}
                  </q-tooltip>
                </q-item-label>
                <q-item-label caption style="color: #1A3359;" class="f-14">
                  {{ feature.value }}
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item class="text-center lt-md">
              <q-btn style="color: #8C8C8C;line-height: 16px;"
                     class="full-width text-capitalize"
                     @click="expanded=!expanded"
                     flat>
                <div>
                  <div>
                    <q-icon :name="expanded?'expand_less':'expand_more'"
                    ></q-icon>
                  </div>
                  <div>View {{expanded?'Less':'All'}}</div>
                </div>

              </q-btn>
            </q-item>
          </q-list>
        </div>
        <div>
          <q-btn class="full-width"
                 color="theme-green text-capitalize br-10"
                 :size="$q.screen.gt.md?'lg':'md'"
                 unelevated
                 @click="purchaseModal=true"
          >
            ₹{{ policy.yearlyPremium }} Anually
          </q-btn>
        </div>
        <div class="f-22 f-md-16 text-center text-weight-bold q-py-xs">
          ₹{{ policy.coverUsed }}
        </div>
        <div class="border"></div>
        <div class="gt-sm">
          <div class="text-center">
            <q-btn class="text-decorated text-capitalize f-16 f-md-14"
                   push
                   target="_blank"
                   flat
                   type="a"
                   color="theme-green"
                   :href="$imgUrl+policy.policyBrochure">
              Policy Brochure
            </q-btn>
          </div>
          <div class="text-center">
            <q-btn class="text-decorated text-capitalize f-16 f-md-14"  push
                   target="_blank"
                   flat
                   type="a"
                   color="theme-green"
                   :href="$imgUrl+policy.tcBrochure">
              Policy Terms & Conditions
            </q-btn>
          </div>
          <div class="text-center q-pt-lg-lg q-pb-md q-pt-sm">
            <q-checkbox
                v-model="compare"
                color="theme-green "
                size="lg"
                @input="$emit('compare',compare,policy)"
            >
              <div class="f-16">Compare</div>
            </q-checkbox>
          </div>
        </div>

      </q-card-section>

    </q-card>
    <q-dialog v-model="purchaseModal">
      <purchase-modal @close="purchaseModal=false" :policy-item="policy"></purchase-modal>
    </q-dialog>
  </div>

</template>

<script>
import PurchaseModal from "../_modal/purchase-modal";
export default {
  name: "policy-card",
  components: {PurchaseModal},
  props: {
    policy: {
      type: Object,
      default: () => {
      }
    }
  },
  data(){
    return{
      compare:false,
      expanded:false,
      purchaseModal:false
    }
  },
  computed:{
    features(){
      let feature=this.policy.featureGroups.find(item=>item.name==='Display Features')
      if(this.$q.screen.gt.sm){

        return  feature?feature.productFeatures:[]
      }
      else if(this.policy){
        return this.expanded?feature.productFeatures:feature.productFeatures.slice(0,3)
      }
      return []
    }
  }

}
</script>

<style scoped lang="scss">
.policy-card{
  border-radius: 20px;
  box-shadow: 4px 4px 22px rgba(0, 0, 0, 0.1);


  .border{
    border-bottom: 1px dashed $theme-green;
    margin: 10px 0;
  }

  .q-item__section--avatar{
    min-width: 40px!important;
  }
}
.text-decorated{
  text-decoration: underline;
}
.img-box{
  width: 150px;
  height: 100px;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.11);
  border-radius: 10px;
  background: #FFFFFF;
  padding: 10px;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: -30px;
  transform: translateX(-50%);
}
</style>