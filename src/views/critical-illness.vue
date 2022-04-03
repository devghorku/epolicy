<template>
  <div class="faq">
    <div class="row items-center">
      <div class="col-md-7 col-12 q-pa-sm-xl q-pa-xs-md text-center">
        <div class="f-30 text-weight-bold q-mb-lg">
          <span class="text-theme-green">Critical Illness</span> Insurance Plan
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
            <critical-form/>
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
                Critical Illness Insurance Quotes
              </div>
              <q-card-section>
                <critical-form/>
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
import CriticalForm from "../components/_form/critical-form";

export default {
  name: "term",
  components: {CriticalForm, PlanWorks, QuoteSection, Faq},
  data() {
    return {
      dialog:false,
      bannerImg: require('@/assets/images/term & health/critical.png'),
      plans: [
        {
          idx: 1,
          text: '<strong>35 years</strong><br/>' +
              'Anil chooses a CI Plan of 10 lacs for 1 year. Anil makes a premium payment. Anil chooses a CI Plan of 10 lacs for 1 year. Anil makes a premium payment. ',
          img: require('@/assets/images/step/1.png')
        },
        {
          idx: 2,
          text: '<strong>3<sup>rd</sup> Month</strong><br/>First diagnosis of Critical illness,Anil gets hospitalized. ',
          img: require('@/assets/images/step/2.png')
        },
        {
          idx: 3,
          text: '<strong>Anil gets proper Treatment.</strong><br/>Anil informs Insurer, register claim & provide proper documentation.',
          img: require('@/assets/images/step/3.png')
        },
        {
          idx: 4,
          text: '<strong>Anil gets compensation.</strong>',
          img: require('@/assets/images/step/4.png')
        }
      ],
      definition:"Critical Illness provides the lump sum on diagnosis of Illness covered under the plan.",
      faqs: [
        {
          q: 'Q1 : What is an illness?',
          ans: 'Illness means a sickness or a disease or pathological condition leading to the impairment of normal physiological function and requires medical Treatment.<br/><br/>' +
              '<strong>a) Acute condition </strong>- Acute condition is a disease, illness or injury that is likely to respond quickly to treatment which aims to return the person to his or her state of health immediately before suffering the disease/illness/ injury which leads to full recovery.\n' +
              '<br/><br/> <strong>b) Chronic condition </strong>- A chronic condition is defined as a disease, illness, or injury that has one or more of the following characteristics:\n' +
              '<br/><ul class="list-none"> <li>i. it needs ongoing or long-term monitoring through consultations, examinations, check-ups, and /or tests</li>' +
              '<li>ii. it needs ongoing or long-term control or relief of symptoms</li>' +
              ' <li>iii. it requires rehabilitation for the patient or for the patient to be specially trained to cope with it</li>' +
              '<li>iv. it continues indefinitely</li>' +
              ' <li>v. it recurs or is likely to recur.</li></ul>'
        },
        {
          q: 'Q2 : What is Critical Illness Insurance?',
          ans: "Critical Illness Insurance is a policy that pays out a lump sum amount upto the sum insured upon diagnosis of a critical illness covered under the policy."
        },
        {
          q: 'Q3 : Why should I purchase Critical Insurance Illness?',
          ans: 'Critical Illness Insurance provides you and your family, the additional financial security on diagnosis of a critical illness. The policy provides a lump sum amount which could be used for: costs of the care and treatment, recuperation aids, debts pay-off, any lost income due to a decreasing ability to earn and for a change in lifestyle.'
        },
        {
          q: 'Q4 : What are the benefits under the Critical Insurance Illness plan? ',
          ans: 'The company will pay the sum insured as lump-sum on first diagnosis of any of the Critical Illnesses stated in the respective policies, provided that the insured person survives a period of 30 days from the date of the first diagnosis. The number of critical illnesses covered are based on insurer-wise policies.'
        },
        {
          q: 'Q5 : Is there any eligibility criteria for purchasing Critical Illness Insurance?',
          ans: "Critical Illness policy covers individuals in the age group of 18 years to 65 years."
        },
        {
          q: 'Q6 : When can the insured claim the plans’ benefit?  ',
          ans: "You can avail of the plan benefit on detection of any critical illness that happens after 90 days of policy issue or revival date"
        },
        {
          q: 'Q7 : What do you mean by pre – existing Diseases? ',
          ans: 'Any condition, ailment or injury or related condition(s) for which insured person had signs or symptoms and/or was diagnosed and/or received medical advice/treatment within 48 months prior to your first policy with the company is termed as pre-existing diseases.'
        },
        {
          q: 'Q8 : What is the free look period of the Critical Illness Insurance?',
          ans: 'You have a period of 15 days from the date of the receipt of the policy document. Policies sold through Distance Marketing will have a free look period for 30 days.'
        },
        {
          q: 'Q9 : What is the grace period of the Critical Illness Insurance?',
          ans:'Grace period for this plan is 30 days. The policy will remain in force during the grace period without losing out on continuity benefits like waiting periods and coverage of pre-existing diseases. Coverage is not available for the period for which no premium is received. If any premium goes unpaid at the end of the grace period, the policy shall lapse.',

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