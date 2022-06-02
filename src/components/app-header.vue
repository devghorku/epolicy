<template>
  <div>
    <q-header class="bg-white q-py-sm flex"
              :class="denseHeader?'shadow-head':$q.screen.lt.md?'':'shadow-head h-103'"
    >
      <q-toolbar class="gt-sm">
        <q-toolbar-title>
          <router-link to="/">
            <q-img
                :src="logo"
                class="logo"
            ></q-img>
          </router-link>

        </q-toolbar-title>

        <div class="flex nowrap items-center">
          <q-btn class="text-black q-mx-sm text-h6 text-capitalize" @click="gotoContact" flat>Contact Us</q-btn>
          <div>
            <q-btn icon-right="phone"
                   type="a"
                   href="tel:+08046810500"
                   class="text-theme-green q-mx-sm br-10 h-lg"
                   outline>
              <span class="text-theme-green q-pr-sm text-h6 ">08046810500</span>
            </q-btn>
          </div>
          <div>
            <q-btn class="bg-theme-green q-mx-sm text-capitalize br-10  h-lg"
                   to="/book-expert"
                   flat>
              <span class="text-white q-pl-sm text-h6">Book An Expert</span>
            </q-btn>
          </div>
          <div>
            <q-btn icon="format_align_right" class="h-lg br-10" color="cloud" flat >
              <q-menu :offset="[-15, 28]">
                <q-list style="min-width: 314px" class="bg-light menu-list q-py-sm">
                  <template  v-for="(item,idx) in menus">
                    <q-item clickable
                            :to="item.link"
                            v-if="!item.mobile"
                            :key="'menu-tem'+idx">
                      <q-item-section avatar>
                        <img :src="item.img" alt="menu-item"
                             width="38px"
                             class="menu-img"
                             height="38px">
                      </q-item-section>
                      <q-item-section class="text-h6">{{ item.text }}</q-item-section>
                    </q-item>
                  </template>


                </q-list>
              </q-menu>
            </q-btn>
          </div>
        </div>
      </q-toolbar>
      <q-toolbar class="lt-md">
        <q-btn flat
               icon="format_align_left"
               color="cloud"
               round
               class=" h-46 br-10">
          <q-menu :offset="[0, 0]">
            <q-list style="min-width: 314px" class="bg-light menu-list q-py-sm">
              <q-item clickable
                      :to="item.link"
                      v-for="(item,idx) in menus"
                      :key="'menu-tem'+idx">
                <q-item-section avatar>
                  <img :src="item.img" alt="menu-item"
                       width="38px"
                       class="menu-img"
                       height="38px">
                </q-item-section>
                <q-item-section class="text-h6">{{ item.text }}</q-item-section>
              </q-item>
              <q-item clickable
                      @click="gotoContact"
              >
                <q-item-section avatar>
                  <img :src="require('@/assets/images/menu/phone.svg')" alt="menu-item"
                       width="38px"
                       class="menu-img"
                       height="38px">
                </q-item-section>
                <q-item-section class="text-h6">Contact Us</q-item-section>
              </q-item>

            </q-list>
          </q-menu>
        </q-btn>
        <q-space></q-space>
        <q-img
            :src="logo"
            class="logo"
            v-if="denseHeader"
            @click="$router.push('/')"
        ></q-img>
        <q-space></q-space>
        <q-btn icon-right="phone"
               class="text-theme-green q-mx-sm br-10 h-lg lt-md"
               flat
               type="a"
               href="tel:+08046810500"
        >
        </q-btn>
      </q-toolbar>
      <q-img
          :src="logo"
          class="logo lt-md q-mx-auto"
          v-if="!denseHeader"
          @click="$router.push('/')"
      ></q-img>
    </q-header>

  </div>

</template>

<script>
export default {
  name: "app-header",
  data() {
    return {
      logo: require('../assets/images/logo.svg'),
      menus: [
        {text: 'Term', link: '/term', img: require('@/assets/images/menu/term.svg')},
        {text: 'Health', link: '/health', img: require('@/assets/images/menu/health.svg')},
        {text: 'Personal Accident', link: '/personal-accident', img: require('@/assets/images/menu/accident.svg')},
        {text: 'Endowment', link: '/404', img: require('@/assets/images/menu/endowment.svg')},
        {text: 'Critical Illness', link: '/critical-illness', img: require('@/assets/images/menu/critical.svg')},
        {text: 'Home Insurance', link: '/405', img: require('@/assets/images/menu/home.svg')},
        {text: 'Motor Insurance', link: '/406', img: require('@/assets/images/menu/motor.svg')},
        {text: 'About Us', link: '/about-us', img: require('@/assets/images/menu/user.svg'), mobile: true},

      ]
    }
  },
  computed: {
    isBackButton() {
      return false
    },
    denseHeader() {
      return ['term-criterion','health-criteron'].includes(this.$route.name)
    }

  },
  methods:{
    gotoContact(){
      if(this.$route.path !== '/'){
        this.$router.push('/')
        setTimeout(()=>{
          const el=document.getElementById('contactUs')
          if(el){
            const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({top: y, behavior: 'smooth'});
          }
        },1000)
      }else{
        const el=document.getElementById('contactUs')
        if(el){
          const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({top: y, behavior: 'smooth'});
        }
      }

    }
  }
}
</script>

<style scoped lang="scss">
.logo {
  max-width: 260px;
  @media (max-width: $breakpoint-xs-max) {
    max-width: 160px;
  }
}

.h-103 {
  height: 103px;
}

.shadow-head {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}
</style>
<style lang="scss">

.menu-list {
  .q-focus-helper {
    display: none;
  }

  .menu-img {
    border: 1px solid #7FA0C5;
    border-radius: 5px;
  }

  .q-item {
    height: 60px;
  }

  .q-item:hover,.q-item.q-router-link--exact-active {
    background-color: white !important;

    .menu-img {
      border: 1px solid $theme-green !important;
    }

    .q-item__section {
      color: $theme-green !important;
    }
  }

}

</style>