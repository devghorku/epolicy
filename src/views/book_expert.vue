<template>
  <div>
    <!--        <div class="f-30 text-weight-bold text-center q-pt-xl">-->
    <!--            Book An Expert-->
    <!--        </div>-->
    <!--        <div class="text-center q-pb-xl f-24" style="color: #7D7A7A">-->
    <!--            Schedule a meeting to know about all the hidden terms of the insurance policies. It's free!-->
    <!--        </div>-->
    <div class="row q-ma-md items-center wrap">
    <q-btn icon="arrow_back" unelevated @click="$router.go(-1)">
    </q-btn>
    </div>
    <div class="row q-pa-lg justify-center">
      <div class="col-12">
        <q-card style="max-width: 1340px; box-shadow: 4px 4px 22px rgba(0, 0, 0, 0.1);"
                class="q-mx-auto shadow-3 br-10 q-mb-xl q-pa-lg-lg">
          <q-card-section>
            <iframe width='100%' height="750px"
                    src='https://epolicymart-epolicymart.zohobookings.in/portal-embed#/customer/epolicymart'
                    frameborder='0'
                    allowfullscreen=''></iframe>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <quote-section></quote-section>
  </div>
</template>

<script>
import QuoteSection from "../components/quote-section";
import '@quasar/quasar-ui-qcalendar/dist/index.css'


export default {
  name: "book_expert",
  components: {QuoteSection},
  data() {
    return {
      dialog: false,
      languages: ['English', 'Hindi'],
      experts: [
        {
          id: 1,
          name: 'Istiak Ahmed',
          position: 'CEO',
          company: 'Avito',
          about: 'I am your support manager',
          employee_no: '#2323',
          slot: 2,
          img: require('@/assets/images/male.png'),
          type: 'audio',
          lang: 'English'
        },
        {
          id: 1,
          name: 'Alia Mananda',
          position: 'SSE',
          company: 'Avito',
          about: 'I am your helping manager',
          employee_no: '#2323',
          slot: 2,
          type: 'audio',
          img: require('@/assets/images/female.png'),
          lang: 'English'
        },
      ],
      selectedDate: '',
      dragging: false, // used for drag-and-drop
      ignoreNextSwipe: false,// used for drag-and-drop
      today: new Date(),
      selectedDates: []
    }
  },
  methods: {},
  computed: {
    disabledBefore() {
      // // find the monday of this week
      // if (this.today) {
      //  return this.today
      // }
      return undefined
    },
  },
  watch: {
    selectedDates(val) {
      /* eslint-disable-next-line */
      console.log('selected dates:', val)
    }
  }
}
</script>

<style scoped lang="scss">
.book-card {
  border-radius: 20px;
  box-shadow: 4px 4px 22px rgba(0, 0, 0, 0.1);
  max-width: 400px;

  &:hover {
    outline: 1px solid #5DAC31;
    box-shadow: 4px 4px 22px rgba(93, 172, 49, 0.1), inset 4px 4px 22px rgba(0, 0, 0, 0.1);
  }

  .slot {
    border-left: 4px solid $theme-green;
    border-radius: 0 5px 5px 0;
    box-sizing: border-box;
  }
}

.active-theme-green:hover, .active-theme-green:focus {
  background: $theme-green !important;
  color: white !important;
}
</style>