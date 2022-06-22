<template>
  <div class="faq">
    <div class="row items-center">
      <div class="col-md-7 col-12 q-pa-sm-xl q-pa-xs-md text-center">
        <div class="f-30 text-weight-bold q-mb-lg">
          <span class="text-theme-green">Term</span> Insurance Plan
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
            <term-form/>
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
                Term Insurance Quotes
              </div>
              <q-card-section>
                <term-form/>
              </q-card-section>
            </q-card>
          </q-dialog>
        </div>
      </div>
    </div>
<!--    <plan-works class="bg-light" :plans="plans"></plan-works>-->
    <term-calculator class="bg-light"/>
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
import TermCalculator from "../components/term/term-calculator";
import Faq from "../components/faq";
import QuoteSection from "../components/quote-section";
import TermForm from "../components/_form/term-form";
// import PlanWorks from "../components/plan-works";

export default {
  name: "term",
  components: { TermForm, QuoteSection, Faq, TermCalculator},
  data() {
    return {
      dialog: false,
      bannerImg: require('@/assets/images/term & health/Term page top illustration.svg'),
      plans: [
        {
          idx: 1,
          text: '<strong>35 years</strong><br/>' +
              'Anil chooses term Plan with a life cover of 1 Crore for 30 years.',
          img: require('@/assets/images/step/1.png')
        },
        {
          idx: 2,
          text: '<strong>35 - 65 years</strong>',
          img: require('@/assets/images/step/2.png'),
          noBullet:true
        },
        {
          idx: 3,
          text: '<strong>65 years</strong><br/>After his unfortunate death, the life cover is payable to the nominee.',
          img: require('@/assets/images/step/3.png')
        },
        {
          idx: 4,
          text: '<strong>Anil’s Wife</strong><br/>The nominee gets lump sum or monthly income  after Anil’s death.',
          img: require('@/assets/images/step/4.png')
        }
      ],
      definition:'Term insurance provides financial protection to your family at the most affordable rates. In case of unfortunate death of the insured during the policy term chosen it pays the death benefit to the Nominee.',
      faqs: [
        {
          q: 'Q1 : Do I need Term Insurance?',
          ans: 'In case you have dependents that are fully, or even partially, dependent on your income, you may need term life insurance.'
        },
        {
          q: 'Q2 : What is the benefit of buying term insurance over any other type of policy?',
          ans: "Term Insurance provides you with high coverage by charging comparatively lower premiums." +
              " Typically you can get of Sum Assured of Rs. 1 Cr at around Rs. 500/month " +
              "if you are aged 30. Though, the exact amounts may depend on the policy you choose. " +
              "<br/><br/>It is pure protection plan with no maturity or surrender value and hence " +
              "premium rates are less as compared to other life insurance products for " +
              "a given Sum Assured."
        },
        {
          q: 'Q3 : How much insurance should I buy?',
          ans: 'Depending on different factors like the number of dependents, ' +
              'the standard of living, educational needs, credit and other financial ' +
              'responsibilities, the amount of cover can be decided. Try our Sum Assured ' +
              'Calculator to get the ideal amount of coverage.<br/><br/>However, it is suggested Sum Assured and ' +
              'you may choose the sum assured depending on the amount of premium you want to pay.'
        },
        {
          q: 'Q4 : What policy term should I Choose?',
          ans: 'The policy term should be till you accumulate more than enough to cover your current and future liabilities or till the retirement age or the highest possible term available.'
        },
        {
          q: 'Q5 : Which premium payment option to Choose?',
          ans: "<p>The market offers 3 types of premium payment option.</p> " +
              "<ol> <li><strong>Single Payment </strong>- Pay the lump sum SINGLE PREMIUM once at " +
              "the start of the policy and get coverage for the full policy term.</li> " +
              "<li><strong>Limited Payments</strong> - Pay the premium for a shorter-term other " +
              "than the full policy duration. For instance - Pay for the first 20 years " +
              "but remain covered for the whole 30 years for a 30 years policy.</li> " +
              "<li><strong>Regular Payments </strong>&ndash; The option of paying the premium " +
              "for the full policy term.</li> </ol> <p>&nbsp;The limited and regular " +
              "payments can be paid monthly, quarterly, halfyearly or Yearly. </p> " +
              "<p>We suggest opting either Regular or Limited Premium Payment option.</p>"
        },
        {
          q: 'Q6 : What are the factors affecting the term insurance premium?  ',
          ans: "<p>The Premium payable for a given sum assured may vary based on:</p> <ol> <li>Age</li> " +
              "<li>Gender</li> <li>Health history</li> <li>Smoker / Non - Smoker</li> " +
              "<li>Hobbies</li> <li>Occupation</li> </ol>"
        },
        {
          q: 'Q7 : Will I get the sum assured chosen by me or the premium shown on the website?',
          ans: 'The insurance company will do underwriting based on your proposal (Filled Proposal form and payment of premium). The insurance company may quote a higher premium or give a lower sum assured based on your medical and health status as compared to standard rates displayed on our website. You will have the choice to reject the revised terms offered by the Life insurance company and get the refund.'
        },
        {
          q: 'Q8 : Do I get any tax benefits?',
          ans: 'The premium paid for term insurance is tax-exempted under section 80(C) of IT act, 1961, and the sum assured received is tax-free under section 10(10D) of IT act 1961. Though, tax laws are subject to change.'
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