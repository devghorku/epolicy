<template>
  <div class="faq">
    <div class="row items-center">
      <div class="col-md-7 col-12 q-pa-sm-xl q-pa-xs-md text-center">
        <div class="f-30 text-weight-bold q-mb-lg">
          <span class="text-theme-green">Endowment</span> Insurance Plan
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
            <endowment-form/>
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
                Endowment Insurance Quotes
              </div>
              <q-card-section>
                <endowment-form/>
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
import PlanWorks from "../components/plan-works";
import EndowmentForm from "../components/_form/endowment-form";

export default {
  name: "term",
  components: {EndowmentForm, PlanWorks, QuoteSection, Faq},
  data() {
    return {
      dialog: false,
      bannerImg: require('@/assets/images/term & health/endowment.png'),
      plans: [
        {
          idx: 1,
          text: '<strong>35 years</strong><br/>' +
              'Anil chooses a endowment Plan of 10 lacs for 10 years. ',
          img: require('@/assets/images/step/1.png')
        },
        {
          idx: 2,
          text: '<strong>35-45 years</strong>',
          img: require('@/assets/images/step/2.png'),
          noBullet:true
        },
        {
          idx: 3,
          text: '<strong>10<sup>th</sup> years</strong><br/>' +
              'Anil paid all his premium. ',
          img: require('@/assets/images/step/3.png')
        },
        {
          idx:5,
          text: '<strong>20<sup>th</sup> years</strong><br/>' +
              'Anil gets lump sum at the end of the 20th year. ',
          img: require('@/assets/images/step/4.png')
        }
      ],
      definition: 'Endowment insurance is a policy that aims to combine the features of a life insurance and a financial plan, usually a college education for the child of the insured.',
      faqs: [
        {
          q: 'Q1 : What is Endowment Insurance?',
          ans: 'Endowment plan is a life insurance policy which provides you with a combination of both i.e.: an insurance cover, as well as a savings plan. It helps you in saving regularly over a specific period of time, so that you are able to get a lump sum amount on policy maturity, if the policyholder survives the policy term.'
        },
        {
          q: 'Q2 : Why should you buy an Endowment Insurance Plan?',
          ans: "It can help you build your financial pool with regular savings. The money received at maturity can be used for various short- and long-term financial goals, such as a child’s education, buying a car, post-retirement goals, and more. It also helps you protect your family financially, in case of an unfortunate event, through the in-built life cover."
        },
        {
          q: 'Q3 : What are the types of Endowment Insurance Plan?',
          ans: 'There are four types of Endowment Insurance Plan that you can choose from<br/><br/>' +
              '<ol class="list-bold"><li class="q-mb-sm"> <strong>Unit Linked Endowment Plan</strong> – Under Unit Linked policies, the insurance premiums are bifurcated into multiple units held under a specific investment fund which can be chosen by the policyholders.</li>' +
              '<li class="q-mb-sm"> <strong> Full/With Profit Endowment Plan</strong> – Under this plan, the basic amount i.e., sum assured will be provided to the policy holder. This amount is guaranteed right from the start of the policy. However, the final payout provided is comparatively higher depending on the bonuses announced from time to time by the company. The bonuses once declared form a part of the policy are paid out in the event of death of the policyholder or maturity of the policy.</li>' +
              '<li class="q-mb-sm">  <strong> Low-Cost Endowment Plan</strong> – This type of endowment plan was designed with an intention of allowing the policyholder to accumulate the funds which have to be paid after a specified time period, usually mortgage.</li>' +
              '<li class="q-mb-sm"> <strong>  Non-Profit Endowment Plan </strong>– These are endowment plans which do not participate in the profits generated by the company (bonuses). However, in order to make them competitive against other products, companies offer guaranteed additions in these plans which help in generating returns for the policy holder.</li>' +
              '</ol>'
        },
        {
          q: 'Q4 : What are the features of an Endowment Insurance Plan?',
          ans: '<ol class="list-bold"><li class="q-mb-sm"> <strong>Death along with Survival benefits:</strong> In case of demise of the insured, the beneficiary/nominee of the policy gets the sum assured along with bonuses. Also, the insured is allowed to get the sum assured if he/she outlives the policy.</li>' +
              '<li class="q-mb-sm"> <strong>Higher returns:</strong> An endowment policy is helpful in building a corpus for the future and providing financial protection to your family. The payout for survival benefit and death benefit of an endowment plan is higher than that of a pure life insurance policy i.e. Term Plans.</li>' +
              '<li class="q-mb-sm"> <strong>Premium payment frequency:</strong> The policyholder can make payment of the premium based on the policy chosen by him/her. Payment can be done on monthly, quarterly, half-yearly, and on yearly basis..</li>' +
              '<li class="q-mb-sm"> <strong>Flexibility in Cover:</strong> Riders like critical illness, total permanent disability, and accidental death can be added to the base plan and enhance the life cover. In addition to this, there are a few plans that offer waiver in the premium payment on total permanent disability or critical illness.</li>' +
              '<li class="q-mb-sm"> <strong>Tax Benefits:</strong> The policyholder is entitled to get tax exemption on both premium payments, maturity and final payouts under the Section 80C and Section 10(10D) of the Income Tax Act, 1961.</li>' +
              '<li class="q-mb-sm"> <strong>Low Risk:</strong> Traditional Endowment policies are considered safer as compared to the other investment options such as the Mutual Fund or the ULIP’s because the amount here is not directly invested in equity funds or the stock market.</li>' +
              '</ol>'
        },
        {
          q: 'Q5 : What are the benefits of an Endowment Insurance Plan?',
          ans: '<ol class="list-bold"><li class="q-mb-sm"> <strong>Provides Insurance Cover:</strong> An endowment policy provides insurance cover during the policy term.</li>' +
              '<li class="q-mb-sm"> <strong>Lump sum payout:</strong> It provides a lump sum payout when the policy matures (i.e. at the end of the policy term)</li>' +
              '<li class="q-mb-sm"> <strong>Serves with a dual purpose:</strong> An endowment policy serves you with a dual purpose as it not only works as an insurance policy but also offers you with long term investment benefit.</li>' +
              '<li class="q-mb-sm"> <strong>Provides you with a Tax Benefit:</strong> You are entitled to get tax exemption on both premium payments, maturity and final payouts under the Section 80C and Section 10(10D) of the Income Tax Act, 1961.</li>' +
              '<li class="q-mb-sm"> <strong>Offers Low-Risk Investments:</strong> When it comes to investing, endowment policies are considered as a relatively safer option than other types of investments.</li>' +
              '<li class="q-mb-sm"> <strong> Offers Long-term savings:</strong> An endowment policy offers long term savings. You can choose a policy term ranging from 10, 15, 20, 30 to 40 years.</li>' +
              '<li class="q-mb-sm"> <strong>Provides option to add riders:</strong> With Endowment policies, you get an option to enhance your policy by opting for additional riders like critical illnesses, waiver of premium, family income benefit, accidental death benefit, and accidental permanent total / partial disability benefit.</li>' +
              '<li class="q-mb-sm"> <strong>Additional Bonuses:</strong> Insurance companies also declare bonuses. Here, the bonus is the extra amount of money added to the proceeds, which is distributed to a policyholder by an insurer.</li>' +
              '</ol>'
        },
        {
          q: 'Q6 : What are bonuses under the Endowment Insurance Plan? ',
          ans: '<ol class="list-bold"><li class="q-mb-sm"> <strong>Reversionary Bonus:</strong> This is the additional money that is added to the amount payable on maturity or death with profit policy. Also, once a reversionary bonus is announced, it cannot be withdrawn even if the policy matures or on the death of the insured person.</li>' +
              '<li class="q-mb-sm"> <strong>Terminal Bonus:</strong> The insurance company will add a discretionary amount of money after completion of a fixed term say 10 or 15 years to the payment made on the maturity of an insurance policy or on the death of an insured person.</li>' +
              '</ol>'
        },
        {
          q: 'Q7 : Who should buy an Endowment Insurance Plan?',
          ans: '<ol><li class="q-mb-sm">An endowment policy is suitable for anyone from a young professional to a senior citizen. Most of us have family responsibilities that we need to take care of. Also, most of us have long term non-negotiable goals that need to be achieved no matter what.</li>' +
              '<li class="q-mb-sm">If you are looking for a low-risk plan with the two-in-one benefit of insurance and investment, go for an endowment policy.</li>' +
              '<li class="q-mb-sm">If you are looking for lump sum maturity for long-term goals, an endowment plan is suitable for you.</li>' +
              '<li class="q-mb-sm">If you want to save small amounts of money over the long-term and get tax benefits, an endowment policy is best for you.</li>' +
              '<li class="q-mb-sm">If you want zero risks in an investment, an endowment plan is the one you should consider.</li>' +
              '</ol>'
        },
        {
          q: 'Q8 : What are the riders available under an Endowment Insurance Plan?',
          ans: 'The following benefits can be chosen with an endowment plan, these are optional.' +
              '<ol class="list-bold"><li class="q-mb-sm"> <strong> Critical Illness:</strong> If the policyholder is diagnosed with a critical illness like cancer, heart attack, kidney failure, etc. The policyholder will get a lump sum amount.</li>' +
              '<li class="q-mb-sm"> <strong>Accidental Death:</strong> When the policyholder opts for this additional rider, the insurer will pay accidental death benefit in addition to the Death Benefit to be given to the beneficiary.</li>' +
              '<li class="q-mb-sm"> <strong>Disability:</strong> The disability rider proves to be highly beneficial to the policyholder if he/she suffers from a partial or permanent disability.</li>' +
              '<li class="q-mb-sm"> <strong>Waiver of premium:</strong> Through this rider the insured is not liable to pay the premiums of the endowment policy in case the policyholder suffers from a critical illness or is permanently disabled.</li>' +
              '<li class="q-mb-sm"> <strong>Hospital Cash Benefit:</strong> Hospital cash benefit provides you for daily allowance as well as post – hospitalization benefits, in case of hospitalization of the policyholder.</li></ol>'

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