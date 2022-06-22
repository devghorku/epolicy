<template>
  <div>
    <q-footer class="relative-position own-footer">
      <div class="q-px-lg q-pa-sm-xl q-pa-xs-md">
        <div class="row">
          <div class="col-12 q-mb-lg">
            <q-input outlined
                     v-model="email"
                     type="email"
                     placeholder="Enter your email address"
                     class="bg-white br-10 q-mx-auto f-16"
                     style="max-width: 832px;"
            >
              <template v-slot:append>
                <q-btn color="theme-green"
                       class="text-capitalize br-10 f-18 q-px-md-lg"
                       style="margin-right: -8px;height: 46px;"
                       size="md">
                  Subscribe
                </q-btn>
              </template>
            </q-input>
          </div>
          <div class="col-sm-6 col-lg-2 col-12 q-pa-xs-md">
            <div class="text-white f-16 q-pb-lg">Company Info</div>
            <div class="text-theme-light" v-html="company.address">
            </div>
          </div>
          <div class="col-sm-6 col-lg-3 col-12 q-pa-xs-md">
            <div class="text-white f-16 q-pb-lg">License</div>
            <p class="text-theme-light">
              <q-img :src="certificate"
                     @click="certificateModal=true"
                     class="cursor-pointer br-10"
                     style="max-width: 220px"
              >

              </q-img>
            </p>
          </div>
          <div class="col-md-4 col-6 q-pa-xs-md">
            <div class="text-white f-16 q-pb-lg">Resources</div>
            <div class="column">
              <a class="text-theme-light no-underline q-pb-sm t-link" href="https://www.irdai.gov.in/">
                IRDAI
              </a>
              <a class="text-theme-light no-underline q-pb-sm t-link" href="https://www.policyholder.gov.in/">
                IRDAI Consumer Education
              </a>
              <a class="text-theme-light no-underline q-pb-sm t-link" href="https://irdai.gov.in/ADMINCMS/cms/NormalData_Layout.aspx?page=PageNo226&mid=14.3">
                Integrated Grievance Management System (IGMS) IRDAI
              </a>
            </div>
          </div>
          <div class="col-md-3 col-6 q-pa-xs-md">
            <div class="text-white f-16 q-pb-lg">ePolicyMart</div>
            <div class="column">
              <a class="text-theme-light no-underline q-pb-sm t-link"
                 @click="disclaimerModal=true">
                Disclaimer
              </a>
              <a class="text-theme-light no-underline q-pb-sm t-link"
                 @click="privacyModal=true"
              >
                Privacy Policy
              </a>
              <a class="text-theme-light no-underline q-pb-sm t-link"
                 @click="termModal=true">
                Terms and Conditions
              </a>
            </div>
          </div>
        </div>
        <div class="row q-mt-xl">
          <div class="col-12 social-box ">
            <div class="f-16 text-center">Follow Us</div>
            <div class="q-py-md text-center">
              <q-btn round dense>
                <img src="../assets/images/home/fb.svg" alt="">
              </q-btn>
              <q-btn round dense>
                <img src="../assets/images/home/twitter.svg" alt="">
              </q-btn>
              <q-btn round dense>
                <img src="../assets/images/home/whatsapp.svg" alt="">
              </q-btn>
              <q-btn round dense>
                <img src="../assets/images/home/linkedin.svg" alt="">
              </q-btn>
              <q-btn round dense>
                <img src="../assets/images/home/youtube.svg" alt="">
              </q-btn>
            </div>
            <div :class="$q.screen.lt.sm?'text-left':'text-center'">
              Insurance is subject matter of solicitation. Please note that information shared by you may be shared with
              the insurance company. The information displayed on this website is of the insurers with whom our company
              has an agreement. Please refer to detailed terms and conditions before use of this site. For any
              grievances, write to grievance.redressal@epolicymart.com
            </div>
            <div class="q-mt-lg text-center">
              Copyright © ePolicyMart 2021. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
      <q-dialog v-model="refundModal">
        <q-card>
          <q-card-section>
            <div class="text-h6 text-bold">
              Cancellation and Refund
              <q-btn icon="close"
                     class="float-right text-negative"
                     round size="sm"
                     @click="refundModal=false"
              >
              </q-btn>
            </div>
          </q-card-section>
          <q-separator/>
          <q-card-section style="max-height: 50vh" class="scroll">
            <div class="text-h6 text-bold">Refund Policy</div>
            <p>In case of a refund due to an erroneous transaction or cancellation, the premium paid for an
              insurance product will be refunded via cheque or direct credit as per the policy of the
              Insurance provider, that you have chosen to buy the product from.</p>
            <div class="text-h6 text-bold">Cancellation Policy</div>
            <p>In case of a cancellation, the premium paid for an insurance product will be refunded via cheque
              or direct credit as per the policy of the Insurance provider, that you have chosen to buy the
              product from.</p>
          </q-card-section>
        </q-card>
      </q-dialog>
      <q-dialog v-model="privacyModal">
        <q-card>
          <q-card-section>
            <div class="text-h6 text-bold">
              Privacy Policies
              <q-btn icon="close"
                     class="float-right text-negative"
                     round size="sm"
                     @click="privacyModal=false"
              >
              </q-btn>
            </div>
          </q-card-section>
          <q-separator/>
          <q-card-section style="max-height: 50vh" class="scroll">
            <div v-html="privacy">

            </div>
          </q-card-section>
        </q-card>
      </q-dialog>
      <q-dialog v-model="termModal">
        <q-card>
          <q-card-section>
            <div class="text-h6 text-bold">
              Terms and Conditions
              <q-btn icon="close"
                     class="float-right text-negative"
                     round size="sm"
                     @click="termModal=false"
              >
              </q-btn>
            </div>
          </q-card-section>
          <q-separator/>
          <q-card-section style="max-height: 50vh" class="scroll">
            <div v-html="term">

            </div>
          </q-card-section>
        </q-card>
      </q-dialog>
      <q-dialog v-model="disclaimerModal">
        <q-card>
          <q-card-section>
            <div class="text-h6 text-bold">
              Disclaimer
              <q-btn icon="close"
                     class="float-right text-negative"
                     round size="sm"
                     @click="disclaimerModal=false"
              >
              </q-btn>
            </div>
          </q-card-section>
          <q-separator/>
          <q-card-section style="max-height: 50vh" class="scroll">
            <div v-html="disclaimer">

            </div>
          </q-card-section>
        </q-card>
      </q-dialog>
      <q-dialog v-model="certificateModal"
                :maximized="true"
                transition-show="slide-up"
                transition-hide="slide-down">
        <q-card>
          <q-card-section>
            <div class="text-h6 text-bold">
              License
              <q-btn icon="close"
                     class="float-right text-negative"
                     round size="sm"
                     @click="certificateModal=false"
              >
              </q-btn>
            </div>
          </q-card-section>
          <q-separator/>
          <q-card-section class="scroll" style="max-height: 90vh">
            <q-img :src="certificate"
            >
            </q-img>
          </q-card-section>
        </q-card>
      </q-dialog>
      <img :src="require('@/assets/images/footer-bg.svg')" class="tl">
      <img :src="require('@/assets/images/footer-bg-2.svg')" class="br">
    </q-footer>
  </div>

</template>

<script>
import {marked} from 'marked'
export default {
  name: "app-footer",
  data() {
    return {
      email: '',
      refundModal: false,
      privacyModal: false,
      termModal: false,
      disclaimerModal: false,
      certificateModal: false,
      privacy:'',
      term:'',
      disclaimer:'',
      company: {
        address: 'Vivaan Insurance Web Aggregator Pvt. Ltd. E3044 Raja ji Puram, Lucknow, 226017, UP India contact@epolicymart.com' +
            '<br><br>' +
            'CIN: <br>U66000UP2017PTC098967IRDAI Web Aggregator License No 010 Registration code IRDAI/INT/WBA/52/2018 valid till 22.08.2022'
      },
      certificate: require('../assets/images/home/CertificateofRegistration_ePolicyMart.jpg')
    }
  },
  async mounted(){
    await this.getData()
  },
  watch:{
    $route (){
      this.email=''
    }
  },
  methods:{
    async getData(){
      let res=await this.axios.get('https://pmart-cdn.s3.ap-south-1.amazonaws.com/privacy.md')
      this.privacy=marked(res.data)
      let res2=await this.axios.get('https://pmart-cdn.s3.ap-south-1.amazonaws.com/tnc.md')
      this.term=marked(res2.data)
      let res3=await this.axios.get('https://pmart-cdn.s3.ap-south-1.amazonaws.com/disclaimer.md')
      this.disclaimer=marked(res3.data)
    }
  }
}
</script>

<style scoped lang="scss">
.t-title {
  font-size: 18px;
  font-weight: bold;
  @media (max-width: $breakpoint-sm-max) {
    font-size: 12px;
  }
}

.t-paragraph {
  font-size: 16px;
  word-break: break-word;
  @media (max-width: $breakpoint-sm-max) {
    font-size: 11px;
  }
}

.t-link {
  cursor: pointer;

  &:hover {
    color: $theme-green;
  }
}

.social-box {
  img {
    width: 24px !important;
    height: 24px;
  }

  @media (max-width: $breakpoint-sm-max) {
    text-align: center;
    img {
      width: 20px !important;
      height: 20px;
    }
  }

  img:hover {
    filter: brightness(.5) sepia(2) hue-rotate(60deg) saturate(3);
  }
}
</style>
<style lang="scss">
.social-box {
  .q-btn {
    padding: 3px;

    .q-btn__wrapper {
      width: unset;
      height: unset;
    }
  }
}

.own-footer {
  background-color: #0B0D17 !important;
  position: relative;

  .tl, .br {
    position: absolute;
    width: 20vw;
  }

  .tl {

    top: 0;
    left: 0;
  }

  .br {
    bottom: 0;
    right: 0;
  }
}
</style>