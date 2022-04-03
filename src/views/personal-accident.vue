<template>
  <div class="faq">
    <div class="row items-center">
      <div class="col-md-7 col-12 q-pa-sm-xl q-pa-xs-md text-center">
        <div class="f-30 text-weight-bold q-mb-lg">
          <span class="text-theme-green">Personal Accident</span> Insurance Plan
        </div>
        <q-img
            :src="bannerImg"
            spinner-color="white"
            style="max-width: 90%;margin: auto"
        ></q-img>
      </div>
      <div class="col-md-5 col-12 q-pa-sm-lg q-pa-xs-md">
        <q-card class="shadow-inset q-pa-sm-lg q-pa-xs-md gt-sm" >
          <q-card-section>
            <div class="text-center f-24 q-pb-md text-weight-bold">Quote Criterion</div>
            <accident-form/>
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
                Personal Accident Insurance Quotes
              </div>
              <q-card-section>
                <accident-form/>
              </q-card-section>
            </q-card>
          </q-dialog>
        </div>
      </div>
    </div>
    <plan-works class="bg-light" :plans="plans"></plan-works>
    <faq class="bg-theme-green" :faqs="faqs" :headline="definition"/>
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
import AccidentForm from "../components/_form/accident-form";

export default {
  name: "term",
  components: {AccidentForm, PlanWorks, QuoteSection, Faq},
  data() {
    return {
      dialog:false,
      bannerImg: require('@/assets/images/term & health/accident.svg'),
      plans: [
        {
          idx: 1,
          text: '<strong>35 years</strong><br> Anil chooses a PA Plan of 10 lacs for 1 year. Anil makes a premium payment. ',
          img: require('@/assets/images/step/1.png')
        },
        {
          idx: 2,
          text: '<strong>3<sup>rd</sup> month</strong><br>Some unexpected ACCIDENT  happens, Anil gets Disabled.',
          img: require('@/assets/images/step/2.png')
        },
        {
          idx: 3,
          text: '<strong>Anil gets proper Treatment.</strong><br>Anil informs Insurer, register claim & provide proper documentation.',
          img: require('@/assets/images/step/3.png')
        },
        {
          idx:4,
          text: '<strong>Anil gets compensation</strong>',
          img: require('@/assets/images/step/4.png')
        }
      ],
      definition:"Personal Accident Insurance offers financial compensation in the event of bodily injuries leading to total/partial disability or death caused due to accidents. ",
      faqs: [
        {
          q: 'Q1 : What is an Accident?',
          ans: 'An accident is an unfortunate incident that happens unexpectedly and unintentionally, typically resulting in damage or injury.'
        },
        {
          q: 'Q2 : What is Personal Accident Insurance?',
          ans: "A Personal accident cover helps you in case you suffer an accident that leads to a serious injury or death. With a personal accident policy, in these cases, you will get a specific lump sum amount. It will act as a financial safety net for you and your family, as it also covers the costs for hospitalization because of the accident."
        },
        {
          q: 'Q3 : What are the benefits of a personal accident policy?',
          ans: 'A personal accident policy will cover you in case of accidental death, permanent disability, partial disability, and many other things like ambulance and hospitalization costs. You can also add your entire family under the policy and protect them from any unexpected incidents as well.'
        },
        {
          q: 'Q4 : How is the premium calculated in a personal accident policy? ',
          ans: 'There are many factors which determine the premium of your Personal Accident insurance. Some of these are, the nature of your occupation, your income & age.'
        },
        {
          q: 'Q5 : Does the personal accident policy cover death?',
          ans: "Yes, it does. In the case that you suffer an accidental death, your dependents will get the sum insured amount if accidental death is covered in the plan."
        },
        {
          q: 'Q6 : What is accidental death cover? ',
          ans: "An accident can be both emotionally & financially devastating for the dependent family members. In case of fatal injuries, the entire sum assured is paid to the nominee"
        },
        {
          q: 'Q7 : What is permanent total disability cover?',
          ans: 'In case an accident results in permanent disabilities or lifelong impairment such as loss of both the limbs, then a specified sum assured is paid to the policyholder.'
        },
        {
          q: 'Q8 : What is permanent partial disability cover? ',
          ans: 'If bodily injuries, resulting in permanent partial disabilities, then a certain percentage of the benefit is paid to the insured.'
        },
        {
          q: 'Q9 : What is temporary total disability cover?',
          ans:'In case the insured meets with temporary total disabilities and is bedridden, then the insurer will provide a weekly allowance to recompense the loss of income. The insured can also utilize this claim amount to pay the EMIs, in case there is a loss of earnings.'
        },
        {
          q: 'Q10 : Why should I buy a personal accident cover if I already have a life insurance policy?',
          ans:'While a life insurance policy will offer your dependents benefits in the case of your death, a personal accident policy, will also protect you against any financial risks due to accidents, like hospital costs, loss of income after an injury, or security in case of a permanent total disability. '
        },
        {
          q:'Q11 : Do I still need a personal accident policy if I already have health insurance?',
          ans:'A standard health insurance policy is actually different from a personal accident policy. A health insurance will cover you in case of any illness and things like hospitalization costs are usually cashless or reimbursed to you. But, with a personal accident cover, you will get a lump sum amount to help you out at a time when financial support is needed.'

        },
        {
          q:'Q12 : Is there any age limit for a personal accident policy?',
          ans:'The main person being insured under a personal accident policy should be above 18 years old, and generally under 70 years. Dependent children can also be covered under the policy up to 25 years.'

        },
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