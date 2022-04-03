<template>
  <div class="row">
    <div class="col-md-4 col-12 q-pa-sm-xl q-pa-xs-md text-center">

      <q-img
          :src="bannerImg"
          spinner-color="white"
          class="q-my-md"
          style="max-width: 60%;"
      ></q-img>
    </div>
    <div class="col-md-8 col-12 q-pa-sm-xl q-pa-xs-md">
      <div class="justify-between q-pb-md text-white flex">
        <div class="f-36 f-md-30">Frequently Asked Question</div>
        <q-btn class="q-ml-sm text-capitalize br-10"
               type="a"
               outline
               push
               target="_blank"
               href="mailto:Contact@epolicymart.com">Send Us An Email</q-btn>
      </div>
      <p class="text-white f-16 inter q-pb-lg" style="line-height: 30px" v-if="headline">
        {{
          headline
        }}
      </p>
      <q-list bordered class="rounded-borders bg-white faq q-px-md" padding>
        <q-expansion-item
            :label="faq.q"
            expanded-icon="remove_circle_outline"
            class="q-py-md"
            header-class="text-weight-bold"
            expand-icon="add_circle_outline"
            v-for="(faq,idx) in faqs"
            :key="idx"
        >
          <q-card>
            <q-card-section v-html="faq.ans">
            </q-card-section>
          </q-card>
        </q-expansion-item>

      </q-list>
    </div>
  </div>
</template>

<script>
export default {
  name: "term-faq",
  props: {
    faqs: {
      type: Array,
      default: () => {
      }
    },
    headline:{
      type:String,
      default:''
    }
  },
  data() {
    return {
      bannerImg: require('../assets/images/term & health/Frequently asked questions.svg'),
    }
  }
}
</script>

<style lang="scss">
.faq {
  .q-expansion-item:not(:last-child) {
    border-bottom: 1px solid #C6C6C6;
  }
}
</style>