<template>
  <div class="faq">
    <div class="row items-center">
      <div class="col-md-7 col-12 q-pa-sm-xl q-pa-xs-md text-center">
        <div class="f-30 text-weight-bold q-mb-lg">
          <span class="text-theme-green">Home</span> Insurance Plan
        </div>
        <q-img
            :src="bannerImg"
            spinner-color="white"
            style="max-width: 100%;margin: auto"
        ></q-img>
      </div>
      <div class="col-md-5 col-12 q-pa-sm-lg q-pa-xs-md">
        <q-card class="shadow-inset q-pa-sm-lg q-pa-xs-md gt-sm" >
          <q-card-section>
            <div class="text-center f-24 q-pb-md text-weight-bold">Quote Criterion</div>
            <insurance-form></insurance-form>
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
                Home Insurance Quotes
              </div>
              <q-card-section>
                <insurance-form></insurance-form>
              </q-card-section>
            </q-card>
          </q-dialog>
        </div>
      </div>
    </div>
    <plan-works class="bg-light" :plans="plans"></plan-works>
    <faq class="bg-theme-green" :faqs="faqs"/>
    <div>
      <div class="f-30 text-weight-bold text-center q-py-xl">Click to get a quote</div>
      <quote-section></quote-section>
    </div>
    <div class="tr-svg">
      <svg width="336" height="439" viewBox="0 0 336 439" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-63.2048 303.072L301.033 407.137L209.037 39.6654L-63.2048 303.072Z" stroke="white" stroke-opacity="0.1" stroke-width="50"/>
        <path d="M324.075 281.536C331.264 282.875 337.207 275.929 334.772 269.033L294.734 155.665C292.298 148.769 283.311 147.096 278.557 152.653L200.396 244.011C195.642 249.568 198.686 258.187 205.876 259.526L324.075 281.536Z" stroke="white" stroke-opacity="0.8"/>
      </svg>
    </div>
  </div>

</template>

<script>
import Faq from "../components/faq";
import QuoteSection from "../components/quote-section";
import PlanWorks from "../components/plan-works";
import InsuranceForm from "../components/_form/insurance-form";

export default {
  name: "term",
  components: {InsuranceForm, PlanWorks, QuoteSection, Faq},
  data() {
    return {
      dialog:false,
      bannerImg: require('@/assets/images/term & health/insurance.png'),
      plans: [
        {
          idx: 1,
          text: 'Lörem ipsum hypoktig lyll i plasa prenedorade sor: det vill säga monosk.',
          img: require('@/assets/images/step/1.png')
        },
        {
          idx: 2,
          text: 'Lörem ipsum hypoktig lyll i plasa prenedorade sor: det vill säga monosk.',
          img: require('@/assets/images/step/2.png')
        },
        {
          idx: 3,
          text: 'Lörem ipsum hypoktig lyll i plasa prenedorade sor: det vill säga monosk.',
          img: require('@/assets/images/step/3.png')
        },
        {
          idx:4,
          text: 'Lörem ipsum hypoktig lyll i plasa prenedorade sor: det vill säga monosk.',
          img: require('@/assets/images/step/4.png')
        }
      ],
      faqs: [
        {
          q: 'Q1 : Do I need Term Insurance?',
          ans: 'In case you have dependents that are fully, or even partially,' +
              ' dependent on your income, you may need Term life insurance.'
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
              'Calculator to get the ideal amount of coverage.<br/><br/>However, it is a suggested ' +
              'amount you may choose the lower amount depending on the premium amount.'
        },
        {
          q: 'Q4 : What policy term should I Choose?',
          ans: '<span class="text-primary">The duration till you have more than enough to cover ' +
              'your current and future ' +
              'liabilities </span>or till the retirement age or the highest possible term available.'
        },
        {
          q: 'Q5 : Which premium payment option to Choose?',
          ans: "<p>The market offers 3 types of products based on premium payment frequency.</p> " +
              "<ol> <li><strong>Single Payment </strong>- Pay the lump sum SINGLE PREMIUM once at " +
              "the start of the policy and get coverage for the full policy term.</li> " +
              "<li><strong>Limited Payments</strong> - Pay the premium for a shorter-term other " +
              "than the full policy duration. For instance - Pay for the first 20 years " +
              "but remain covered for the whole 30 years for a 30 years policy.</li> " +
              "<li><strong>Regular Payments </strong>&ndash; The option of paying the premium " +
              "for the full policy term.</li> </ol> <p>&nbsp;The limited and regular " +
              "payments can be paid monthly, quarterly, halfyearly or Yearly.</p> " +
              "<p>We suggest to opt either Regular or Limited Premium Payment options " +
              "as they do not drain out your money at once and still get you the same " +
              "coverage as a single premium.</p>"
        },
        {
          q: 'Q6 : What are the factors affecting the term insurance premium?  ',
          ans: "<p>Premium, being the price of the policy, apart from the cover provided, " +
              "is subject to change with numerous factors such as:</p> <ol> <li>Age</li> " +
              "<li>Gender</li> <li>Health history</li> <li>Smoking or not</li> " +
              "<li>Hobbies</li> <li>Occupation</li> </ol>"
        },
        {
          q: 'Q7 : Will I get the sum assured chosen by me or the premium shown on the website?',
          ans: 'The insurance company will do underwriting based on your proposal ' +
              '( Filled application form + Premium). The insurance company may ' +
              'quote a higher premium or give a lower sum assured based on your ' +
              'financial and medical  status as compared to standard rates shown ' +
              'on our website. You will have the choice to reject the revised terms ' +
              'offered by the Life insurance company and get you money back.'
        },
        {
          q: 'Q8 : Do I get any tax benefits?',
          ans: 'The premium paid for term insurance is tax-exempted under section 80(C) of IT act, 1961 ' +
              'and the sum assured received is tax-free under section 10D(D) of IT act, 1961. ' +
              'Though, tax laws are subject to change.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.faq{
  position: relative;
}
.tr-svg{
  position: absolute;
  z-index:0;
  bottom: 10%;
  left:0;
}
</style>