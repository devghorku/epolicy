<template>
  <div class="faq">
    <div class="row items-center">
      <div class="col-md-7 col-12 q-pa-sm-xl q-pa-xs-md text-center">
        <div class="f-30 text-weight-bold q-mb-lg">
          <span class="text-theme-green">Health</span> Insurance Plan
        </div>
        <q-img
            :src="bannerImg"
            spinner-color="white"
            style="max-width: 100%;margin: auto"
        ></q-img>
      </div>
      <div class="col-md-5 col-12 q-pa-sm-lg q-pa-xs-md">
        <q-card class="shadow-inset q-pa-sm-lg q-pa-xs-md gt-sm">
          <q-card-section>
            <div class="text-center f-24 q-pb-md text-weight-bold">Quote Criterion</div>
            <health-form/>
          </q-card-section>
        </q-card>
        <div class="text-center lt-md">
          <q-btn color="theme-green q-mb-md" @click="dialog=true">
            Get Quote
          </q-btn>
          <q-dialog v-model="dialog">
            <q-card>
              <div class="text-right">
                <q-btn icon="close" unelevated @click="dialog=false">
                </q-btn>
              </div>
              <div class="f-23 text-center">
                Health Insurance Quotes
              </div>
              <q-card-section>
                <health-form/>
              </q-card-section>
            </q-card>
          </q-dialog>
        </div>
      </div>
    </div>
<!--    <plan-works class="bg-light" :plans="plans"></plan-works>-->
    <faq class="bg-theme-green" :faqs="faqs" :headline="definition"/>
    <div>
      <div class="f-30 text-weight-bold text-center q-py-xl">Click to get a quote</div>
      <quote-section></quote-section>
    </div>
    <div class="tr-svg">
      <svg width="336" height="439" viewBox="0 0 336 439" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-63.2048 303.072L301.033 407.137L209.037 39.6654L-63.2048 303.072Z" stroke="white"
              stroke-opacity="0.1" stroke-width="50"/>
        <path
            d="M324.075 281.536C331.264 282.875 337.207 275.929 334.772 269.033L294.734 155.665C292.298 148.769 283.311 147.096 278.557 152.653L200.396 244.011C195.642 249.568 198.686 258.187 205.876 259.526L324.075 281.536Z"
            stroke="white" stroke-opacity="0.8"/>
      </svg>
    </div>
  </div>

</template>

<script>
import Faq from "../components/faq";
import QuoteSection from "../components/quote-section";
// import PlanWorks from "../components/plan-works";
import HealthForm from "../components/_form/health-form";

export default {
  name: "term",
  components: {HealthForm, QuoteSection, Faq},
  data() {
    return {
      dialog: false,
      bannerImg: require('@/assets/images/term & health/Health Page top illustration.svg'),
      plans: [
        {
          idx: 1,
          text: '<strong>35 years</strong><br> Anil chooses Health Plan of 10 lacs for 1 year. Anil makes a premium payment. ',
          img: require('@/assets/images/step/1.png')
        },
        {
          idx: 2,
          text: '<strong>3<sup>rd</sup> month</strong> <br>Some unexpected illness  happens, Anil has option to get admitted in the Network hospital or Non - Network Hospital.',
          img: require('@/assets/images/step/2.png')
        },
        {
          idx: 3,
          text: '<strong>Anil gets proper Treatment.</strong><br>Anil informs Insurer, register claim, insurer validates & provide proper documentation.',
          img: require('@/assets/images/step/3.png')
        },
        {
          idx: 4,
          text: '<strong>Anil gets cashless treatment in Network Hospital or gets reimbursement from Non- Network Hospital.</strong>',
          img: require('@/assets/images/step/4.png')
        }
      ],
      definition: "A medical insurance policy, also called health insurance, covers medical expenses for illnesses or injuries. It reimburses your bills or pays the medical care provider directly on your behalf. ",
      faqs: [
        {
          q: 'Q1 : What is Health Insurance?',
          ans: 'Health insurance is a type of policy that covers your medical expenses. Depending upon its terms, a health insurance policy can cover your hospitalisation expenses, day care expenses, ICU expenses, and medicine costs etc.'
        },
        {
          q: 'Q2 : What are the types of Health Insurance policies?',
          ans: "<strong>Individual Health Plan</strong> – Under an individual health insurance plan, each member has their own sum insured amount." +
              "<br/><br/><strong>Family Floater Health Plan</strong>– A family floater plan allows you to cover your family members under a single policy and everybody shares the sum insured amount.",
        },
        {
          q: 'Q3 : What are network hospitals?',
          ans: 'A network hospital is a hospital that ties up with your insurance provider and allows you to avail of cashless medical treatment. These network hospitals are also known as Cashless Network Hospitals.'
        },
        {
          q: 'Q4 : What is a cashless facility?',
          ans: 'The network hospitals, when charging the insurance company directly for the hospitalization and other covered expenses of the policyholder, it is called the cashless facility as the insured does not have to pay for his/her medical expenses directly.'
        },
        {
          q: 'Q5 : Is pre-existing illness covered? ',
          ans: "Generally, any pre-existing illness is excluded from the coverage for a fixed duration from the start of the policy. You can read the terms of your policy to know how early the policy covers the pre-existing illness."
        },
        {
          q: 'Q6 : What is co-pay?',
          ans: "It is the sharing of claims between the insurer and the insured. A co-pay is a clause in the policy when an insurance company pay a major portion of the claim and the other portion is borne by the policyholder themselves. Co-Pay will generally be optional at younger ages but can be compulsory in case you join a health insurance plan after a certain age e.g 60 years."
        },
        {
          q: 'Q7 : What are the things I should consider before buying my health insurance policy? ',
          ans: 'Before buying any policy, you should be clear about your medical needs, the sum insured, terms and features of the policy, exclusions, availability of network hospitals and customers’ experience with the company and the policy.'
        },
        {
          q: 'Q8 : Are there any tax benefits that I can avail?',
          ans: 'As per Section 80D of the IT Act, 1961, the amount paid as the premium for a health insurance plan is deductible from the taxable income. Where, Rs. 25,000 is the maximum limit for this deductible amount for other than senior citizens. For senior citizens the maximum limit of deductible amount is Rs. 50,000. Though, tax laws are subject to change.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.faq {
  position: relative;
}

.tr-svg {
  position: absolute;
  z-index: 0;
  bottom: 10%;
  left: 0;
}
</style>