<template>
  <div class="row items-center q-py-xl">
    <div class="col-sm-5 col-md-6 col-lg-7 col-12 q-py-xs-xl text-center gt-xs">
      <q-img
          :src="contactImg"
          spinner-color="white"
          contain
          style="max-width: 60%;max-height: 530px"
      ></q-img>
    </div>
    <div class="col-sm-7 col-md-6 col-lg-5 col-12 q-pa-sm-xl q-pa-xs-md" id="contactUs">
      <q-form ref="form">
        <q-card class="shadow-inset">
          <q-card-section class="q-pa-lg-xl q-pa-lg">
            <div class="f-36 f-md-30 text-weight-bold q-py-sm"
                 :class="{'text-center':$q.screen.xs}"
            >
              Contact Us
            </div>
            <div class="row">
              <div class="col-12">
                <label>Name</label>
                <q-input outlined
                         v-model="contactForm.name"
                         class="q-mb-md q-mr-md bg-light br-10"
                         dense
                         @keypress="onlyText($event)"
                         placeholder="Name"
                         :rules="[v => !!v || 'Field is required']"
                >
                </q-input>
              </div>

              <div class="col-12">
                <label>Email</label>
                <q-input outlined
                         type="email"
                         v-model="contactForm.email"
                         class="q-mb-md q-mr-md bg-light br-10"
                         dense
                         placeholder="example@gmail.com"
                         :rules="[v => !!v || 'Field is required',v => /.+@.+\..+/.test(v) || 'E-mail must be valid',]"
                >
                </q-input>
              </div>
              <div class="col-12">
                <label>Mobile</label>
                <q-input outlined
                         v-model="contactForm.phone"
                         class="q-mb-md q-mr-md bg-light br-10 phone"
                         dense
                         placeholder="+91"
                         maxlength="10"
                         @keypress="check($event)"
                         :rules="[v => !!v || 'Field is required',v => /\d{10}/.test(v) || 'Must be 10 digit']"
                >
                </q-input>
              </div>
              <div class="col-12">
                <label>Message</label>
                <q-input
                    outlined
                    class="q-mb-md q-mr-md bg-light br-10"
                    v-model="contactForm.message"
                    placeholder="type here"
                    type="textarea"
                ></q-input>
              </div>
              <div class="col-12 q-px-xs-xl q-px-sm-none">
                <q-btn class="full-width bg-theme-green text-white text-capitalize br-10"
                       size="lg"
                       @click="submit"
                       label="Submit"/>
              </div>
            </div>
          </q-card-section>

        </q-card>

      </q-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact-us",
  data() {
    return {
      contactForm: {email: ''},
      contactImg: require('../../assets/images/contact.svg'),
    }
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        console.log(this.contactForm)
      }
    },
    check(e) {
      if (e.which < 48 || e.which > 57) e.preventDefault()
    },
    onlyText(e) {
      var key = e.keyCode;
      if (key >= 48 && key <= 57) {
        e.preventDefault();
      }
    }
  }
}
</script>

<style lang="scss">
.phone{
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}
</style>