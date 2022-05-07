<template>
  <div  class="q-layout-container" >
    <div
        class="q-layout-container flex justify-center q-pb-xl"
    >
      <div v-for="slide in menus" :key="slide.name">
        <slide-card :slide="slide" @change="slideClick"
                    :active="$route.path===slide.link">
        </slide-card>
      </div>
    </div>
  </div>

</template>

<script>
import SlideCard from "./_ui/tab-card";
export default {
  name: "quote-section",
  components: {SlideCard},
  data(){
    return{
      menus: [
        {text: 'Term', link: '/term', img: require('@/assets/images/menu/term.svg')},
        {text: 'Health', link: '/health', img: require('@/assets/images/menu/health.svg')},
        {text: 'Personal Accident', link: '/personal-accident', img: require('@/assets/images/menu/accident.svg')},
        {text: 'Endowment', link: '/404', img: require('@/assets/images/menu/endowment.svg')},
        {text: 'Critical Illness', link: '/critical-illness', img: require('@/assets/images/menu/critical.svg')},
        // {text: 'Home Insurance', link: '/home-insurance', img: require('@/assets/images/menu/home.svg')},
        // {text: 'Motor Insurance', link: '/motor-insuranc', img: require('@/assets/images/menu/motor.svg')},

        {text: 'Home Insurance', link: '/404', img: require('@/assets/images/menu/home.svg')},
        {text: 'Motor Insurance', link: '/404', img: require('@/assets/images/menu/motor.svg')},
      ]
    }
  },
  methods:{
    slideClick(link){
      this.$router.push(link)
    }
  }
}
</script>

<style scoped>

</style>