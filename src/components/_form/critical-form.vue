<template>
  <q-form>
    <div class="row">
      <div class="col-12">
        <label class="f-14">Cover</label>
        <q-select outlined
                  v-model="form.cover"
                  :options="cover_options"
                  dense
                  class="custom-select q-mb-md bg-input"
        >
        </q-select>
      </div>
      <div class="col-12">
        <label class="f-14">Pincode</label>
        <q-input outlined
                 v-model="form.pincode"
                 dense
                 type="number"
                 error-message="Please enter valid pincode"
                 :error="!pinValid"
                 class="q-mb-md bg-input"
        >
        </q-input>
      </div>

      <div class="col-12">
        <label class="f-14">Date of Birth</label>
        <q-input dense
                 outlined
                 class="q-mb-md bg-input"
                 v-model="form.dob"
                 mask="##/##/####"
                 readonly
                 error-message="Please enter valid age >=18 years"
                 :error="!adultRuleValid"
                 @click="$refs.qDateProxy.show()"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy ref="qDateProxy" transition-show="scale"
                             transition-hide="scale">
                <q-date v-model="form.dob" default-view="Years" mask="DD/MM/YYYY"
                        :navigation-max-year-month="`${currentYear}/${currentMonth+1}`">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat/>
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
      <div class="col-12">
        <label class="f-14">Annual Income Range</label>
        <q-select outlined
                  v-model="form.income"
                  :options="incomeOptions"
                  dense
                  emit-value
                  map-options
                  class="custom-select q-mb-md bg-input"
        >
        </q-select>
      </div>
      <div class="col-12">
        <label class="f-14">Occupation</label>
        <q-select outlined
                  v-model="form.occupation"
                  type="text"
                  dense
                  :options="occupations"
                  class="custom-select q-mb-md bg-input"
        >
        </q-select>
      </div>
      <div class="col-12 q-px-xs-xl q-px-sm-none q-pt-md">
        <q-btn class="full-width bg-theme-green text-white br-10 f-18 text-capitalize"
               label="Get quote"
               unelevated
               @click="submitForm">

        </q-btn>
      </div>
    </div>
  </q-form>
</template>

<script>
export default {
  name: "critical-form",
  data() {
    return {
      currentYear: new Date().getFullYear(),
      currentMonth: new Date().getMonth(),
      adult_no: 1,
      child_no: 0,
      form: {
        cover: 500000,
        income: "50",
        pincode:110003,
        childrenDobs: [],
        dob: "28/06/1991",
        gender: 'male',
        smoke: 'yes'
      },
      cover_options: [
        {label: '5 Lac', value: 500000},
        {label: '10 Lac', value: 1000000},
        {label: '15 Lac', value: 1500000},
        {label: '20 Lac', value: 2000000},
        {label: '25 Lac', value: 2500000},
        {label: '30 Lac', value: 3000000},
        {label: '35 Lac', value: 3500000},
        {label: '40 Lac', value: 4000000},
        {label: '45 Lac', value: 4500000},
        {label: '50 Lac', value: 5000000},
        {label: '60 Lac', value: 6000000},
        {label: '70 Lac', value: 7000000},
        {label: '80 Lac', value: 8000000},
        {label: '90 Lac', value: 9000000},
        {label: '1 Cr', value: 10000000},
        {label: '1.5 Cr', value: 15000000},
        {label: '2 Cr', value: 20000000},

      ],
      incomeOptions: [
        {label: "up to 5 Lac", value: "5"},
        {label: "5 - 10 Lac", value: "10"},
        {label: "10 - 20 Lac", value: "20"},
        {label: "20 - 50 Lac", value: "50"},
        {label: "50 Lac - 1 Cr", value: "100"},
        {label: "1Cr - 5 Cr", value: "500"},
        {label: "> 5 Cr", value: "1000"}
      ],
      occupations: [
        'Accountant',
        'Airline Crew and Airport Ground Staff',
        'Architect',
        'Banker',
        'Big Game Hunting',
        'Blacksmith',
        'Businessman',
        'Banking',
        'Carpenter',
        'Cash carrying employee',
        'Catering',
        'Circus Personnel',
        'Circus Workers and Stunt Artist',
        'Clerk',
        'Company Director',
        'Construction worker',
        'Consultant',
        'Consultant working in office premise',
        'Contractor',
        'Cricketer',
        'Defence',
        'Delivery Personnel',
        'Dental practitioner',
        'Designer',
        'Desk Job',
        'Doctor',
        'Domestic Help',
        'Driver and Conductor',
        'Engineer',
        'Farmer',
        'Field Salesman',
        'Fire work cracker production',
        'Fisherman',
        'Footballer',
        'Forestry Operation',
        'Garage Mechanic',
        'Glassware manufacturing',
        'Goldsmith',
        'Home Maker',
        'Honey gathering',
        'Housemaker',
        'Housewife',
        'Hunter',
        'Ice Hockey',
        'Jockey',
        'Journalist',
        'Key Maker',
        'Laboratory Assistant',
        'Lawyer',
        'Machine Operator',
        'Mason',
        'Mechanic',
        'Midwife',
        'Mountaineer',
        'Nurse',
        'Office Employee',
        'Office Executive',
        'Oil Extraction',
        'Other Engineer Not working in Desk Job',
        'Other people working in hospital',
        'Other',
        'Packaging industry personnel',
        'Paid Driver',
        'Pest Control worker',
        'Petrol Station Pump attendant',
        'Pharmacist',
        'Photographer',
        'Physiotherapist',
        'Plantation worker',
        'Politician',
        'Polo',
        'Porter',
        'Postman',
        'Principal',
        'Printing press work',
        'Private Job',
        'Professional Athlete',
        'Public Job',
        'Racing',
        'Retired',
        'River Rafting',
        'Salaried',
        'Sanitation worker',
        'School Going student',
        'Self Employed',
        'Shop Owner',
        'Shopkeeper',
        'Skiing',
        'Software Engineer',
        'Student',
        'Teacher',
        'Technician',
        'Tennis Player',
        'Unemployed',
        'Veterinary Doctor',
        'Wall Painter',
        'Welding',
        'Winter sport',
        'Engaged in racing on wheels or horseback',
        'Accountant/Auditor/CA',
        'Agriculture/Farmer/Dairy farmer',
        'Armed Professionals(Police/CRPF/Army/Navy/Airforce)',
        'Ballooning/Hang gliding',
        'Business Owners(Part of Management)',
        'Contractor/Builder',
        'Chef/Commercial Kitchen Worker',
        'Civil Servant/Bureaucrat',
        'College/University Student',
        'Construction worker/Contractor/Builder',
        'Health care worker(Non Vet)',
        'Hospitality and Tourism Sector Workers(Non Desk Job)',
        'Home Service Provider(Carpenter/Electrician/Plumber)',
        'Industrial Worker(Non Hazard worker)',
        'Industrial Worker(Hazard worker)',
        'Lawyer/Judge/Other legal professional',
        'Loading and unloading/Headload worker',
        'Newspaper Vendor/Milk Vendor',
        'Property Owner/Landlord',
        'Quarry work/ Stone Crushing',
        'Artist/Painter/writer',
        'Security Officer/Guard',
        'Shop Salesman/Shop Assistant',
        'Worker in Garment Industry/Handloom',
        'Wood Processing Worker',
        'Civil Servant/Bureaucrat',
        'Sub - Contracter',
      ]
    }
  },
  computed:{
    pinValid(){
      return this.form.pincode.toString().length===6;
    },
    adultRuleValid(){
      var age=this.$moment().diff(this.$moment(this.form.dob,"DD/MM/YYYY"),'years',false)
      return age>=18
    },
  },
  methods: {
    submitForm() {
      this.$router.push({name: 'critical-illness-criterion'})
    }
  }
}
</script>

<style scoped>

</style>