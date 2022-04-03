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
            <p>ePolicyMart.com respects the privacy of its users. We believe that the integrity of personal
              information is critical, and hence are committed to protecting our customers&rsquo; right to
              privacy.</p>
            <p>&nbsp;</p>
            <p><strong>Safeguarding your Policy</strong>: Information captured or voluntarily submitted on our
              website www.epolicymart.com while visiting, is secured. We do not trade, sell, disclose,
              transfer, share, transmit, lease or rent visitor information to any third party not specifically
              authorized by you to receive this information except as we have disclosed to you in this Privacy
              Policy.</p>
            <p>&nbsp;</p>
            <p><strong>Sharing your personal Information</strong>: ePolicyMart.com is committed to protecting
              the privacy of the users and hence abides by the IT Law. ePolicyMart.com may disclose your
              personal identifiable information such as - email id, mobile number, DOB, etc. only if:</p>
            <ul>
              <li>You authorize us.</li>
              <li>You permit us to establish communication with you via emails and/or calls regarding your
                queries and/or policy purchase.
              </li>
              <li>Law enforcement authorities ask us to share this information with them.</li>
              <li>Please note that by visiting our website, you allow us to share your crucial information
                with our partners/affiliates so that they can call and mail you regarding your queries.
              </li>
            </ul>
            <h2>&nbsp;</h2>
            <p><strong>Changes in Privacy Policy</strong>: ePolicyMart.com reserves the right to change its
              Privacy Policy as and when required, without prior notification. You are advised to read our
              latest Privacy Policy before you agree to it. ePolicyMart.com will not be responsible for any
              discrepancy once you agree to its Privacy Policy without going through it.</p>
            <p>&nbsp;</p>
            <p><strong>Third Party links</strong>: Our website <a
                href="http://www.epolicymart.com">www.epolicymart.com</a>
              may contain links to third-party websites that are neither controlled nor maintained by
              ePolicyMart.com. These third-party links are provided for your convenience only. Hence,
              ePolicyMart.com will not be responsible for your privacy and content if you click on these
              links, nor are we responsible for the privacy policy or practices of the third party websites
              linked to.</p>
            <p>&nbsp;</p>
            <p><strong>Cookies</strong>: Our Site may use &ldquo;cookies&rdquo; to enhance User experience. User&rsquo;s
              web browser places cookies on their hard drive for record-keeping purposes and sometimes to
              track information about them. User may choose to set their web browser to refuse cookies, or to
              alert you when cookies are being sent. If they do so, note that some parts of the Site may not
              function properly.</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p><strong>Legal</strong><strong>: </strong>ePolicyMart.com is bound by the law enforcement and
              regulatory investigation along with the third parties to enforce laws such as intellectual
              property rights, fraud and other rights with an aim to protect you and the community. Hence, in
              response to a verified request by law enforcement or other government officials relating to a
              criminal investigation or alleged illegal practices, ePolicyMart.com can disclose your name,
              DOB, mobile number, postal address, permanent address (street, city, state, PIN Code etc.),
              email address, User ID history, and other listing history. ePolicyMart.com strictly follows the
              norms of a non-disclosure agreement.</p>
            <p>As per the existing regulatory environment, ePolicyMart.com does not guarantee you that all of
              your personal information provided to it while registering will never be revealed in ways not
              otherwise described in this Privacy Policy.</p>
            <p>Furthermore, ePolicyMart.com also declares that if any information is sought by the governments
              or third parties under the urgent condition, it can share personal information about the
              customers with them.</p>
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
            <p>Looking to buy insurance online? Welcome to <a
                href="http://www.epolicymart.com">www.epolicymart.com</a>
              Operated by Vivaan Insurance Web Aggregator Private Limited, this site not only eases your
              insurance buying experience but ensures that you make an informed choice.ePolicyMart.com is an
              IRDAI approved Insurance Web Aggregator, providing a comparison platform among the products
              offered by a wide range of insurance companies partnered with us. We are not an Insurance
              Company but an insurance web aggregator licensed by the regulator under IRDA Web Aggregators
              regulation, 2017. Before proceeding to avail our services, you are requested to read, understand
              and accept the following terms published on this page and other conditions linked to this page.
            </p>
            <p><strong>Our Services</strong>: ePolicyMart.com website supports you to compare insurance plans
              from almost all insurance companies in India at a glance. We provide a comparison of various
              products on our website helping users to avoid surfing multiple websites of different insurance
              companies and filling in some documents. We help customers picking best-suited plans depending
              on their individual insurance requirement. We assist the user to complete all online
              documentation process and complete the payment process. Submitting the documents and making
              payment online is not a guarantee of getting an insurance policy contract. The final decision is
              to be taken by the respective insurance company. It may accept, decline or postpone your
              proposal basis their underwriting guidelines. ePolicyMart.com will ease your online insurance
              buying process by assisting and guiding you through the processes. In case you are not satisfied
              with the insurance plan opted, you need to intimate the insurance company directly within free
              look period. Your refund will be processed by the insurance company directly as per their refund
              guidelines. Some of the best things in life like insurance are not free. Service tax will be
              charged on the insurance premiums that you pay as per applicable guidelines and will be included
              in the premium rates that insurance companies charge. To know details about the exact fees and
              charges by various insurance companies, it is advisable that customers check their insurance
              proposal forms carefully.</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p><strong>Fees and Services Charges</strong>: ePolicyMart.com assist their users with expert
              guidance free of cost. There are zero/nil fees or service charges from the user.</p>
            <p>&nbsp;</p>
            <p><strong>Limitation of Liability</strong>: Limitation of Liability shall be limited to the amount
              you paid, if any, for the use of products and/or services. ePolicyMart.com will not be
              responsible for any direct, indirect, incidental, consequential or exemplary loss or damages
              which may be sustained by you as an outcome of using our resources, or as a result of any
              variations, data loss or fraud, cancellation, loss of access, or downtime to the full extent
              that the applicable limitation of liability laws applies.</p>
            <p>ePolicyMart.com does not warrant or guarantee the appropriateness, correctness or completeness of
              the Website Information; or Quality of the results gained from the usage of the website. To the
              maximum degree allowed by law, ePolicyMart.com has no liability about or arising out of the
              website Information and website commendations. You are solely responsible for the concluding
              choice for your insurance product, and you should take ample time to read through all
              information provided in before continuing. If you are in any uncertainty regarding a product or
              its terms, you should pursue additional advice from ePolicyMart.com or the pertinent
              participating insurance provider before finalizing your product.</p>
            <p>&nbsp;</p>
            <p><strong>Limitation of Warranties</strong>: We do not epitomize or warrant to you that the use of
              our resources:</p>
            <ul>
              <li>Will take care of your needs or requirements, the use of our resources will be continuous,
                well-timed, protected or free from errors.
              </li>
              <li>The information obtained by using our Resources will be accurate or reliable, and error
                free.
              </li>
              <li>Any flaws in the process or functionality of any resources we offer will be repaired or
                corrected.
              </li>
              <li>Any content downloaded or otherwise attained via use of our resources is done at your own
                choice and risk, and that you are solely accountable for any harm to your computer or other
                devices for any loss of data that may erupt from the download of such content. No
                information or advice ( expressed, implied, oral or written) acquired by you from us or
                through our resources we offer shall generate any warranty, guarantee, or conditions of any
                kind, apart from those specifically bordered in this User Agreement.
              </li>
            </ul>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p><strong>Privacy</strong>: Your privacy is vital to us, so for this we have our separate Privacy
              Policy to clarify in detail how we gather, achieve, process, protect, and stock your private
              information. It is advisable to read our privacy policy.</p>
            <p><strong>Copyrights/Trademarks</strong>: All content and materials available on ePolicyMart.com
              are the intellectual property of ePolicyMart.com and are safeguarded by the applicable copyright
              and trademark law of the country. Any unsuitable use, including but not limited to the
              reproduction, distribution, display or transmission of any content on this site is strictly
              forbidden unless precisely authorized by us.</p>
            <p><strong>Disclaimer</strong>: ePolicyMart.com has made its all possible efforts in a bid to ensure
              that the information, premium rates, and policy benefits, etc. shown on the Website is correct;
              however, we rely on the insurance companies in providing accurate information for us to assess
              their products. We provide plans comparison facility based on the information that we have been
              provided by the insurers so that you can assess the plan yourself, and make your own decision.
              ePolicyMart.com will not be responsible if there is any discrepancy in data shown on the
              Website.</p>
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
            <p>As a visitor of ePolicyMart.com and/or any third party websites, you should not assume that the
              owner of the <a href="http://www.epolicymart.com">www.epolicymart.com</a> has control over those
              websites. Hence, ePolicyMart.com disclaims all content shown on the third party websites. It
              also disclaims the validity and authenticity of the SMS and/or email sent from ePolicyMart.com,
              its partners or affiliates or/and any insurance companies. ePolicyMart.com also disclaims these
              emails are free of viruses or other harmful content. The service providers to this Website,
              irrespective of their alliances with ePolicyMart.com, are independent identities and not agents
              or intermediaries of ePolicyMart.com or its allies. ePolicyMart.com, in no event whatsoever,
              shall be liable for any losses incurred out of investments, any additional expense, omissions,
              delays or acts of any government or authority. We are in no way responsible to anyone for
              his/her investment decision, and every investor/policyholder shall be solely responsible for the
              consequences of his/her decision. ePolicyMart.com reserves the right to contact you via any
              medium, not limited to SMS, email, or phone call, in order to offer you any additional services
              that ePolicyMart.com would consider you eligible for, either as a customer or as a visitor. In
              case you have any query related to our Privacy Practices or this Policy, please contact us.</p>
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
  methods:{
    async getData(){
      let res=await this.axios.get('https://pmart-cdn.s3.ap-south-1.amazonaws.com/privacy.md')
      this.privacy=res.data
      let res2=await this.axios.get('https://pmart-cdn.s3.ap-south-1.amazonaws.com/tnc.md')
      this.term=res2.data
      this.disclaimer=(await this.axios.get('https://pmart-cdn.s3.ap-south-1.amazonaws.com/disclaimer.md')).data
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