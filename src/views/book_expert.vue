<template>
  <div>
    <div class="f-30 text-weight-bold text-center q-pt-xl">
      Book An Expert
    </div>
    <div class="text-center q-pb-xl f-24" style="color: #7D7A7A">
      Schedule a meeting to know about all the hidden terms of the insurance policies. It's free!
    </div>

    <div class="row q-pa-lg justify-center">
      <div class="col-12">
        <q-card style="max-width: 845px; box-shadow: 4px 4px 22px rgba(0, 0, 0, 0.1);"
                class="q-mx-auto shadow-3 br-10 q-mb-xl q-pa-lg-lg">
          <q-card-section>
            <div class="text-center text-weight-bold inter f-22">Give Us Your Details</div>
            <q-input label="Name" class="bg-input q-my-md" dense outlined></q-input>
            <q-input label="Mobile Number" class="bg-input q-my-md" dense outlined></q-input>
            <q-input label="Details" class="bg-input q-my-md" dense outlined type="textarea"></q-input>
            <div class="text-center">
              <q-btn color="theme-green"
                     unelevated
                     @click="dialog=true"
                     class="text-white br-10 text-capitalize f-18" size="lg">
                Preferred Time To Connect
              </q-btn>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <q-dialog v-model="dialog" full-width>
        <q-card>
          <q-card-section>
            <q-card-section class="row items-center q-pb-none">
              <div class="text-h6">Choose slot</div>
              <q-space />
              <q-btn icon="close" flat round dense v-close-popup />
            </q-card-section>
            <q-separator />
            <div class="row justify-center items-center">
              <q-btn flat dense label="Prev" @click="calendarPrev" />
              <q-separator vertical />
              <q-btn flat dense label="Next" @click="calendarNext" />
            </div>
            <q-separator />
            <q-calendar
                ref="calendar"
                v-model="selectedDate"
                view="week"
                locale="en-us"
                v-touch-swipe.mouse.left.right="handleSwipe"
                animated
                :disabled-before="disabledBefore"
                :interval-minutes="30"
                :interval-count="96"
                transition-prev="slide-right"
                time-clicks-clamped
                transition-next="slide-left"
                @click:time2="onToggleTime"
                style="height: 400px; overflow: hidden"
            />
          </q-card-section>
        </q-card>
      </q-dialog>
      <div class="col-12 col-md-6 col-lg-4 col-xl-3 q-pa-lg"
           v-for="(expert,idx) in experts" :key="idx">
        <q-card class="hover-white book-card">
          <div class="q-pt-sm">
            <q-img :src="expert.img" height="150px" contain ></q-img>
          </div>

          <q-card-section>
            <div class="text-center f-22 text-weight-bold">{{ expert.name }}</div>
            <div class="text-center f-22 text-grey q-pb-sm">{{ expert.position }}, {{ expert.company }}</div>
            <div class="f-18 q-pb-sm">About me: {{ expert.about }}</div>
            <div class="f-18 q-pb-sm">Employee No.: {{ expert.employee_no }}</div>
            <div class="q-gutter-sm q-py-sm f-18">
              <q-radio v-model="expert.type" color="theme-green" val="audio">Audio</q-radio>
              <q-radio v-model="expert.type" color="theme-green" val="video">Video</q-radio>
            </div>
            <q-select :options="languages" dense
                      outlined
                      class="bg-input q-pb-sm f-18 text-capitalize"
                      v-model="expert.lang"
                      label="Select Language"></q-select>
            <q-btn class="slot q-mb-md q-mt-sm" size="sm" outline color="theme-green">
              {{ expert.slot }} slots available
            </q-btn>
            <q-btn color="theme-green"
                   class="full-width text-capitalize br-10 active-theme-green"
                   size="lg"
                   outline>
              Schedule
            </q-btn>
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
import { QCalendar } from '@quasar/quasar-ui-qcalendar'



export default {
  name: "book_expert",
  components: {QuoteSection,QCalendar },
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
      ignoreNextSwipe: false ,// used for drag-and-drop
      today: new Date(),
      selectedDates: []
    }
  },
  created(){
    this.$store.dispatch('postZoho')
  },
  methods: {
    calendarNext () {
      this.$refs.calendar.next()
    },
    calendarPrev () {
      this.$refs.calendar.prev()
    },
    onToggleTime ({ scope }) {
      if (scope === undefined) {
        return
      }

      // make a copy of the timestamp
      const ts = QCalendar.copyTimestamp(scope.timestamp)

      // get date with time
      const t = QCalendar.getDateTime(ts)

      // toggle to/from array
      if (this.selectedDates.includes(t)) {
        // remove the date
        for (let i = 0; i < this.selectedDates.length; ++i) {
          if (t === this.selectedDates[i]) {
            this.selectedDates.splice(i, 1)
            break
          }
        }
      }
      else {
        // add the date if not outside
        if (scope.outside !== true) {
          this.selectedDates.push(t)
        }
      }
    },
    handleSwipe ({ evt, ...info }) {
      if (this.dragging === false) {
        if (info.duration >= 30 && this.ignoreNextSwipe === false) {
          if (info.direction === 'right') {
            this.calendarPrev()
          }
          else if (info.direction === 'left') {
            this.calendarNext()
          }
        }
        else {
          this.ignoreNextSwipe = false
        }
      }
      // stopAndPrevent(evt)
      evt.cancelable !== false && evt.preventDefault()
      evt.stopPropagation()
    },
  },
  computed:{
    disabledBefore () {
      // // find the monday of this week
      // if (this.today) {
      //  return this.today
      // }
      return undefined
    },
  },
  watch: {
    selectedDates (val) {
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