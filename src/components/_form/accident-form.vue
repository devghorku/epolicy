<template>
  <q-form>
    <div class="row">
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
        <label class="f-14">Date of Birth</label>
        <q-input dense
                 class="custom-input q-mb-md bg-input"
                 outlined
                 v-model="form.birth_date"
                 mask="##/##/####"
                 readonly
                 error-message="Please enter valid age >=18 years"
                 :error="!adultRuleValid(form.birth_date)"
                 @click.prevent="$refs.birth_date.show()">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy ref="birth_date" transition-show="scale"
                             transition-hide="scale">
                <q-date v-model="form.birth_date" default-view="Years" mask="DD/MM/YYYY"
                        :navigation-max-year-month="`${currentYear}/${currentMonth+1}`">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat></q-btn>
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
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

      <div class="col-12 q-px-xs-xl q-px-sm-none q-pt-md">
        <q-btn class="full-width bg-theme-green text-white br-10 f-18 text-capitalize"
               label="Get quote"
               @click="submitForm">

        </q-btn>
      </div>
    </div>
  </q-form>
</template>

<script>
export default {
  name: "accident-form",
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
        birth_date: ['28/06/1991'],
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
        {label: "up to 5 Lakh", value: "5"},
        {label: "5 - 10 Lakh", value: "10"},
        {label: "10 - 20 Lakh", value: "20"},
        {label: "20 - 50 Lakh", value: "50"},
        {label: "50 Lakh - 1 Cr", value: "100"},
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
        'Carpentor',
        'Cash carrying employees',
        'Catering',
        'Circus Personnel',
        'Circus Workers and Stunt Artist',
        'Clerk',
        'Company Director',
        'Construction workers',
        'Consultant',
        'Consultants working in office premises',
        'Contractor',
        'Cricketer',
        'Defence',
        'Delivery Personnel',
        'Dental practitioners',
        'Designers',
        'Desk Job',
        'Doctor',
        'Domestic Help',
        'Drivers and Conductors',
        'Engineer',
        'Farmer',
        'Field Salesman',
        'Fire work cracker production',
        'Fisherman',
        'Footballer',
        'Forestry Operations',
        'Garage Mechanic',
        'Glassware manufacturing',
        'Goldsmith',
        'Home Maker',
        'Honey gathering',
        'Housemaker',
        'Housewife',
        'Hunters',
        'Ice Hockey',
        'Jockey',
        'Journalist',
        'Key Maker',
        'LABORATORY ASSISTANTS',
        'Lawyer',
        'Machine Operator',
        'Mason',
        'Mechanics',
        'Midwives',
        'Mountaineer',
        'Nurse',
        'Office Employees',
        'Office Executives',
        'Oil Extraction',
        'Other Engineers Not working in Desk Job',
        'Other people working in hospitals',
        'Others',
        'Packaging industry personnel',
        'Paid Driver',
        'Pest Control workers',
        'Petrol Station Pump attendant',
        'Pharmacists',
        'Photographer',
        'Physiotherapists',
        'Plantation workers',
        'Politicians',
        'Polo',
        'Porter',
        'Postman',
        'Principal',
        'Printing press work',
        'Private Job',
        'Professional Atheletes',
        'Public Job',
        'Racing',
        'Retired',
        'River Rafting',
        'Salaried',
        'Sanitation workers',
        'School Going students',
        'Self Employed',
        'Shop Owner',
        'Shopkeepers',
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
        'Winter sports',
        'engaged in racing on wheels or horseback',
        'Accountant/Auditors/CA',
        'Agriculture/Farmer/Dairy farmer',
        'Armed Professionals(Police/CRPF/Army/Navy/Airforce)',
        'Ballooning/Hang gliding',
        'Business Owners(Part of Management)',
        'Contractors/Builders',
        'Chefs/Commercial Kitchen Workers',
        'Civil Servant/Bureaucrats',
        'College/University Students',
        'Construction workers/Contractors/Builders',
        'Health care workers(Non Vet)',
        'Hospitality and Tourism Sector Workers(Non Desk Jobs)',
        'Home Service Providers(Carpenter/Electricians/Plumbers)',
        'Industrial Workers(Non Hazard workers)',
        'Industrial Workers(Hazard workers)',
        'Lawyers/Judge/Other legal professionals',
        'Loading and unloading/Headload workers',
        'Newspaper Vendor/Milk Vendor',
        'Property Owner/Landlord',
        'Quarry work/ Stone Crushing',
        'Artist/Painter/writers',
        'Security Officers/Guard',
        'Shop Salesman/Shop Assistants',
        'Workers in Garment Industry/Handloom',
        'WOOD PROCESSING-WORKERS',
        'Civil Servant/Bureaucrats',
        'Sub - Contracter',
      ]
    }
  },
  computed:{
    pinValid(){
      return this.form.pincode.toString().length===6;
    },
  },
  methods: {
    submitForm() {
      this.$router.push({name: 'personal-accident-criterion'})
    },
    adultRuleValid(val){
      var age=this.$moment().diff(this.$moment(val,"DD/MM/YYYY"),'years',false)
      return age>=18
    },
  }
}
</script>

<style scoped>

</style>