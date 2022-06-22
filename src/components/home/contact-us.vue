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
                         placeholder="example"
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
                         :rules="[val => !!val || 'Field is required',v => /.+@.+\..+/.test(v) || 'E-mail must be valid',]"
                >
                </q-input>
              </div>
              <div class="col-12">
                <label>Mobile</label>
                <q-input outlined
                         v-model="contactForm.phone"
                         class="q-mb-md q-mr-md bg-light br-10"
                         dense
                         maxlength="10"
                         placeholder="+91"
                         @keypress="phoneno"
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
    isValidEmail(val) {
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val) || 'Invalid email';
    },
    submit() {
      if (this.$refs.form.validate()) {
        console.log(this.contactForm)
      }
    },
    phoneno(e) {
      var a = [];
      var k = e.which;

      for (let i = 48; i < 58; i++)
        a.push(i);
      this.contactForm.phone=a
      if (!(a.indexOf(k) >= 0))
        e.preventDefault();
    }
  }
}
</script>

<style scoped>

</style>