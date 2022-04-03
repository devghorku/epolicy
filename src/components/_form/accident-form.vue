<template>
  <q-form>
    <div class="row">
      <div class="col-12">
        <label class="f-14">Annual Income</label>
        <q-input outlined
                 v-model="formLife.income"
                 type="number"
                 dense
                 class="custom-select q-mb-md bg-input"
        >
        </q-input>
      </div>
      <div class="col-12">
        <label class="f-14">Cover</label>
        <q-select outlined
                  v-model="formLife.cover"
                  :options="cover_options"
                  dense
                  class="custom-select q-mb-md bg-input"
        >
        </q-select>
      </div>

      <div class="col-12">
        <label class="f-14">Date of Birth</label>
        <q-input dense
                 outlined
                 class="custom-select q-mb-md bg-input"
                 v-model="formLife.birth_date"
                 mask="date"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy ref="qDateProxy" transition-show="scale"
                             transition-hide="scale">
                <q-date v-model="formLife.birth_date" default-view="Years">
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
        <label class="f-14">Occupation</label>
        <q-select outlined
                 v-model="formLife.occupation"
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
                 v-model="formLife.pincode"
                 type="text"
                 dense
                 class="custom-select q-mb-md bg-input"
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
      formLife: {
        birth_date: null,
        gender: 'male',
        smoke: 'yes'
      },
      cover_options: [
        {
          label: 'Option 1',
          value: '1',
        },
        {
          label: 'Option 2',
          value: '2',
        }
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
  methods: {
    submitForm() {
      this.$router.push({name: 'personal-accident-criterion'})
    }
  }
}
</script>

<style scoped>

</style>