<template>
  <div class="q-pa-md-xl q-pa-xs-sm">
    <div class="row">
      <q-btn icon="arrow_back" unelevated @click="$router.go(-1)">
      </q-btn>
      <q-space></q-space>
      <div class="f-36 f-md-30 text-weight-bold">Compare Quotes</div>
      <q-space></q-space>
    </div>
    <q-card bordered class="compare-card q-mt-lg" flat>
      <div class="row">
        <div class="col-12 table-responsive">
          <table class="custom-table">
            <tbody>
            <tr>
              <td>Features</td>
              <td v-for="(insurance,c_idx) in comparePolicyList" :key="'col_'+c_idx">
                <div  class="text-center">
                  <img :src="$imgUrl+insurance.providerLogo"
                       class="insurance-img"
                       alt="">
                  <div class="f-24 text-weight-bold text-warning">
                    {{insurance.productName}}
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>Premium</td>
              <td v-for="(insurance,c_idx) in comparePolicyList" :key="'col2_'+c_idx">
                <q-btn class="" color="theme-green br-10 full-width" size="lg" unelevated>
                  &#x20B9; {{insurance.yearlyPremium}} Anually
                </q-btn>
              </td>
            </tr>
            <tr v-for="(field,r_idx) in mapInsurance.keys" :key="'row'+r_idx">
              <td>{{ field }}</td>
              <td v-for="(ins,c_idx) in mapInsurance.insurances" :key="'col'+r_idx+'_'+c_idx"
              >
                  {{ ins[field]?ins[field]:'' }}
              </td>
            </tr>
            </tbody>
          </table>
        </div>
<!--        <div class="col-12 mobile-only q-py-sm q-px-sm">-->
<!--          <table class="custom-table-mobile w-100">-->
<!--            <tbody>-->
<!--            <template v-for="(field,r_idx) in fields">-->
<!--              <tr :key="'row'+r_idx"-->
<!--                  v-if="field.type !== 'name'"-->
<!--                  :class="{'bg-primary text-white':field.type === 'name' || field.type === 'img'}"-->
<!--              >-->
<!--                <td colspan="2"-->
<!--                    class="text-weight-bold text-subtitle1">-->
<!--                  {{ field.label }}-->
<!--                </td>-->
<!--              </tr>-->
<!--              <tr :key="'row_tr'+r_idx"-->
<!--                  class="text-center"-->
<!--                  :class="{'bg-primary text-white':field.type === 'name' || field.type === 'img'}">-->
<!--                <td v-for="(insurance,c_idx) in comparePolicyList" :key="'col'+r_idx+'_'+c_idx"-->
<!--                    :class="[field.td_class,selectedInsurance === insurance.id?'selected':'']"-->
<!--                >-->
<!--                  <div v-if="field.type === 'name'">-->
<!--                    <div>-->
<!--                      <div>{{ insurance[field.key] }}</div>-->
<!--                      <div class="q-my-xs">-->

<!--                        <input type="radio"-->
<!--                               hidden-->
<!--                               v-model="selectedInsurance"-->
<!--                               :value="insurance.id"-->
<!--                               :id="'radio_'+insurance.id"-->
<!--                        >-->
<!--                        <label-->
<!--                            class="i-select-mobile text-white"-->
<!--                            :for="'radio_'+insurance.id"-->
<!--                        >-->
<!--                          select-->
<!--                        </label>-->
<!--                      </div>-->
<!--                      <div>-->
<!--                        <router-link to="#" class="no-underline text-white">-->
<!--                          learn more-->
<!--                        </router-link>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                  <div v-else-if="field.type === 'price'">-->
<!--                    <div class="text-theme-green flex justify-center items-center">-->
<!--                      <span class="q-pr-sm text-h6">&#x20B9;</span>-->
<!--                      <span class="text-h4">{{ insurance[field.key] }}</span>-->
<!--                    </div>-->
<!--                    <div style="opacity: 0.5" class="text-theme-text">-->
<!--                      <small>per month</small>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                  <div v-else-if="field.type === 'img'">-->
<!--                    <img :src="insurance[field.key]" class="insurance-img">-->
<!--                  </div>-->
<!--                  <div v-else-if="field.type === 'boolean'">-->
<!--                    <q-icon name="check_circle" v-if="insurance[field.key]"-->
<!--                            class="text-theme-green text-h6"></q-icon>-->
<!--                    <q-icon name="cancel" v-else class="text-h6" color="orange-8"></q-icon>-->
<!--                  </div>-->
<!--                  <div v-else>-->
<!--                    {{ insurance[field.key] }}-->
<!--                  </div>-->
<!--                </td>-->
<!--              </tr>-->
<!--            </template>-->

<!--            </tbody>-->
<!--          </table>-->
<!--        </div>-->
      </div>
    </q-card>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "compare",
  computed: {
    ...mapGetters(['comparePolicyList']),
    mapInsurance(){
      let keys=[];
      let compareItems=[];
      this.comparePolicyList.forEach(policy=>{
        let features=policy.featureGroups.find(feature=>feature.name==='Compare Features')
        if(features){
          var tmp = {};
          features.productFeatures.forEach(i=> {
            tmp[i.name]=i.value;
          })
          compareItems.push(tmp)
          let arr_fetaure_keys=features.productFeatures.map(i=>i.name)
          keys=[...keys,...arr_fetaure_keys]
        }
      })
      return {keys:keys,insurances:compareItems}
    }
  },
  data() {
    return {
      selectedInsurance: null,
    }
  },

  mounted() {
    const slider = document.querySelector('.table-responsive');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
    });
  }
}
</script>

<style scoped lang="scss">
.compare-card {
  border-radius: 15px;
  overflow: hidden;
}

.table-responsive {
  overflow-x: auto;

  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
}

.custom-table {
  max-width: 100%;
  min-width: 100%;
  overflow-y: hidden;
  overflow-x: auto;
  border-collapse: collapse !important;
  font-size: 18px;
  .i-select {
    border: 1px solid $theme-green;
    padding: 3px 20px;
    border-radius: 6px;
    cursor: pointer;
    color: $theme-green;

    &:hover {
      background: lighten($theme-green, 50%);
    }
  }

  input[type=radio]:checked + label {
    background: $theme-green;
    color: white;
  }

  td.selected::after {
    background-color: #E9EAEC;
    content: '';
    left: 0;
    top: 0;
    position: absolute;
    width: 100%;
    z-index: 0;
    height: 100%;
  }
  tr:nth-child(odd){
    background: #EFF1F3;
    td:first-child {
      background: #EFF1F3;
      box-shadow: -0.5px 0 0 #BDBDBD inset;
    }
  }
  tr:nth-child(even){
    td:first-child {
      background: white;
      box-shadow: -0.5px 0 0 #BDBDBD inset;
    }
  }
  tr:first-child{
    background: #1A3359!important;
    td:first-child{
      background: #1A3359!important;
      color: white;
      font-size: 24px;
    }
  }

  td {
    padding: 25px 15px;
    min-width: 22vw;
    z-index: 2;
    &:not(:last-child), &:not(:first-child) {
      border-right: 1px solid #BDBDBD;
    }

    &:not(:first-child) {
      cursor: grabbing;
      cursor: -webkit-grabbing;
      background: transparent;
      position: relative;

      div {
        background: transparent;
        position: relative;
        z-index: 1;
      }
    }


  }


  td:first-child {
    position: sticky !important;
    width: 22vw;
    left: 0;
    z-index: 10;
    overflow: hidden;
    font-weight: bold;
  }

  @media (max-width: $breakpoint-xs-max) {
    td {
      font-size: 11px;

      .text-h4 {
        font-size: 1.2rem;
      }

      .text-h6 {
        font-size: 0.8rem;
      }
    }
  }
}

.insurance-img {
  max-width: 150px;
}

.custom-table-mobile {
  border-collapse: collapse;
  width: 100%;

  td, th {
    border: 1px solid #bcb7b7;
    padding: 10px;
  }

  .i-select-mobile {
    border: 1px solid $theme-green;
    padding: 3px 20px;
    border-radius: 6px;
    cursor: pointer;
    color: $theme-green;

    &:hover {
      background: lighten($theme-green, 50%);
    }
  }

  input[type=radio]:checked + label {
    background: $theme-green;
    color: white;
  }

}
</style>