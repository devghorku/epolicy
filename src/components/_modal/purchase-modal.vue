<template>
  <q-card style="width: 600px" v-if="policyItem" class="q-pa-md">
    <div class="q-pa-sm f-24 text-weight-bold inter text-center">
      Purchase Policy
      <q-btn icon="close"
             class="float-right text-grey"
             outline
             round size="sm"
             @click="$emit('close')"
      >
      </q-btn>
    </div>
    <q-separator></q-separator>

    <q-card-section>
      <div class="text-center">
        <q-img :src="$imgUrl+policyItem.providerLogo" width="120px"></q-img>
      </div>
      <div class="text-center q-mb-lg f-24 f-sm-20 text-weight-bold inter">
        <div>{{ policyItem.providerName }}</div>
        <div class="text-warning">{{ policyItem.productName }}</div>
      </div>
      <div>
        <q-form ref="form">
         <div class="row">
           <div class="col-12">
             <label class="f-14">Name</label>
             <q-input outlined
                      v-model="form.name"
                      dense
                      :rules="[val => !!val || 'Field is required']"
                      placeholder="Enter your name"
                      class="q-mb-md bg-input"
             >
             </q-input>
           </div>
           <div class="col-12">
             <label class="f-14">Mobile</label>
             <q-input outlined
                      v-model="form.mobile"
                      dense
                      :rules="[val => !!val || 'Field is required']"
                      placeholder="Enter your mobile number"
                      class="q-mb-md bg-input"
             >
             </q-input>
           </div>
           <div class="col-12">
             <label class="f-14">email</label>
             <q-input outlined
                      v-model="form.email"
                      dense
                      type="email"
                      :rules="[val => !!val || 'Field is required',v => /.+@.+\..+/.test(v) || 'E-mail must be valid',]"
                      placeholder="Enter your Email"
                      class="q-mb-md bg-input"
             >
             </q-input>
           </div>
           <div class="col-12">
             <q-checkbox v-model="form.agree" color="theme-green" :rules="[val => !!val || 'Field is required']">
               I have read Terms Conditions & Privacy Policy documents
             </q-checkbox>
             </div>
         </div>
        </q-form>
      </div>
      <div class="text-center q-mt-md">
        <q-btn color="theme-green text-capitalize q-ma-sm q-px-lg-lg"
               outline
               @click="$emit('close')">
          Cancel
        </q-btn>
        <q-btn color="theme-green text-capitalize q-ma-sm q-px-lg-lg"
               @click="submit"
               unelevated>
          Confirm
        </q-btn>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "purchase-modal",
  props: {
    policyItem: {
      type: Object,
      default: () => {
      }
    }
  },
  data(){
    return{
      form:{
        agree:false,
        email:'',
        mobile:'',
        name:''
      }
    }
  },
  methods: {
    async submit(){
      if(this.$refs.form.validate()) {
        try {
          this.form.premium = this.policyItem.yearlyPremium;
          this.form.productId = this.policyItem.productId;
          let res = await this.axios.post('https://www.epolicymart.com/api/products/term/buy', this.form)
          console.log(res)
        } catch (e) {
          console.log(e)
        }
      }


    }
  }
}
</script>

<style scoped>

</style>