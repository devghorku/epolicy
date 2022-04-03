<template>
  <div class="row testimonial items-center">
    <div class="col-md-6 col-12">
      <div class="img-section">
        <div class="text-weight-bold f-36 f-md-30 q-pb-lg"
             :class="{'text-center':$q.screen.lt.sm}"
        >
          Clientele Testimonials
        </div>
        <q-img :src="require('@/assets/images/testimonial.svg')" class="gt-xs"></q-img>
      </div>

    </div>
    <div class="col-md-6 col-12 q-px-lg">
      <div class="t-card">
        <VueSlickCarousel v-bind="settings" ref="testCarousel">
          <div v-for="(slide,idx) in testimonials"
               :key="idx"
               class="t-single-card"
          >
            <div class="q-pa-md">
              <svg width="53" height="40" viewBox="0 0 53 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5.10787 36.1576C2.07788 33.0163 0.451094 29.4931 0.451094 23.7819C0.451094 13.732 7.67895 4.72443 18.1898 0.270894L20.8168 4.22768C11.0061 9.40768 9.08805 16.1296 8.3232 20.3678C9.90291 19.5695 11.971 19.291 13.9978 19.4748C19.3047 19.9543 23.4879 24.2068 23.4879 29.4931C23.4879 32.1585 22.4031 34.7147 20.4722 36.5994C18.5413 38.4841 15.9225 39.543 13.1918 39.543C10.0353 39.543 7.01706 38.136 5.10787 36.1576ZM34.5253 36.1576C31.4953 33.0163 29.8685 29.4931 29.8685 23.7819C29.8685 13.732 37.0964 4.72443 47.6072 0.270894L50.2342 4.22768C40.4235 9.40768 38.5055 16.1296 37.7406 20.3678C39.3203 19.5695 41.3884 19.291 43.4152 19.4748C48.7221 19.9543 52.9023 24.2068 52.9023 29.4931C52.9023 32.1585 51.8176 34.7147 49.8867 36.5994C47.9558 38.4841 45.3369 39.543 42.6062 39.543C39.4498 39.543 36.4315 38.136 34.5223 36.1576H34.5253Z"
                    fill="#C1DFB2"/>
              </svg>

            </div>
            <div class="text-center q-px-xl"
            >
              {{ slide.text }}
            </div>
            <div class="q-pt-lg f-24 text-center">{{ slide.name }}</div>
            <div class="q-pa-md text-right">
              <svg width="53" height="41" viewBox="0 0 53 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M47.8921 36.7709C50.9221 33.6296 52.5489 30.1064 52.5489 24.3952C52.5489 14.3453 45.321 5.33771 34.8102 0.884176L32.1832 4.84096C41.9939 10.021 43.912 16.7429 44.6768 20.9811C43.0971 20.1828 41.029 19.9043 39.0022 20.0881C33.6953 20.5676 29.5121 24.8201 29.5121 30.1064C29.5121 32.7718 30.5969 35.328 32.5278 37.2127C34.4587 39.0974 37.0775 40.1562 39.8082 40.1562C42.9647 40.1562 45.9829 38.7493 47.8921 36.7709ZM18.4747 36.7709C21.5047 33.6296 23.1315 30.1064 23.1315 24.3952C23.1315 14.3453 15.9036 5.33771 5.39279 0.884176L2.76582 4.84096C12.5765 10.021 14.4945 16.7429 15.2594 20.9811C13.6797 20.1828 11.6116 19.9043 9.58477 20.0881C4.27787 20.5676 0.0976562 24.8201 0.0976562 30.1064C0.0976563 32.7718 1.18242 35.328 3.11331 37.2127C5.0442 39.0974 7.66306 40.1562 10.3938 40.1562C13.5502 40.1562 16.5685 38.7493 18.4777 36.7709H18.4747Z"
                    fill="#C1DFB2"/>
              </svg>
            </div>
            <div>
              <img :src="slide.img" alt="" class="img"/>
            </div>
            <div class="goNext">
            </div>
          </div>
        </VueSlickCarousel>
        <div class="prev" @click="$refs.testCarousel.prev()">
          <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.300781" y="0.681641" width="43.7287" height="43.4327" rx="7" fill="#7BBC58"/>
            <path
                d="M26.4766 13.0722V31.7239C26.4766 32.2834 25.8516 32.5957 25.425 32.2493L13.984 22.9234C13.6565 22.6565 13.6565 22.1425 13.984 21.8727L25.425 12.5469C25.8516 12.2004 26.4766 12.5128 26.4766 13.0722Z"
                fill="white"/>
          </svg>
        </div>
        <div class="next" @click="$refs.testCarousel.next()">
          <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="43.7287" height="43.4327" rx="7" transform="matrix(-1 0 0 1 44.0977 0.697266)"
                  fill="#7BBC58"/>
            <path
                d="M17.9219 13.0879V31.7396C17.9219 32.299 18.5468 32.6114 18.9734 32.2649L30.4144 22.9391C30.7419 22.6721 30.7419 22.1581 30.4144 21.8884L18.9734 12.5625C18.5468 12.216 17.9219 12.5284 17.9219 13.0879Z"
                fill="white"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'


export default {
  name: "testimonial",
  components: {VueSlickCarousel},
  data() {
    return {
      settings: {
        "centerPadding": "20px",
        "focusOnSelect": false,
        "infinite": true,
        "speed": 500,
        "variableWidth": false,
        "dots": false,
        "arrows": true,
      },
      testimonials: [
        {
          id: 1,
          name: 'Aishe Chakraborthy',
          img: require('@/assets/images/aishe.svg'),
          text: "Got good & hassle - free deal without any agent calling or speaking to anyone."
        },
        {
          id: 1,
          name: 'Arpit Gupta',
          img: require('@/assets/images/aishe.svg'),
          text: "Got good & hassle - free deal without any agent calling or speaking to anyone."
        },
        {
          id: 1,
          name: 'Sapna Khandelwal',
          img: require('@/assets/images/aishe.svg'),
          text: "The services provided by Epolicymart are extremely helpful in making the right choice."
        },
        {
          id: 1,
          name: 'Gaurav Jain',
          img: require('@/assets/images/aishe.svg'),
          text: "Very simple to use, friendly website."
        },
        {
          id: 1,
          name: 'Gargi Gupta',
          img: require('@/assets/images/aishe.svg'),
          text: "I appreciate your support in explaining all details with patience. Thank you so much."
        },
        {
          id: 1,
          name: 'Vipin Joshi',
          img: require('@/assets/images/aishe.svg'),
          text: "I’m glad that I got to know about Epolicymart from a colleague. Team is really helpful in suggesting the best plan according to the requirements."
        }
      ]
    }
  }
}

</script>

<style lang="scss">
.testimonial {
  min-height: 500px;
  @media (max-width: $breakpoint-sm) {
    min-height:unset!important;
  }
.slick-slide{
  padding: 0 20px;
}
  .img-section {
    max-width: 400px;
    margin: 30px auto;
  }

  .t-card {
    margin: 30px auto;
    max-width: 500px;
    position: relative;

    .prev{
      position: absolute;
      top:35%;
      left:5px;
      z-index: 4;
      cursor: pointer;
    }
    .next{
      position: absolute;
      top:35%;
      right:-12px;
      z-index: 4;
      cursor: pointer;
    }
    .slick-arrow{
      display: none!important;
    }
  }

  .t-single-card {
    max-width: 480px;
    //height: 385px;
    position: relative;
    margin: 10px 10px 100px;
    background: #E8F3E2;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.22);
    .img {
      position: absolute;
      bottom: -105px;
      z-index: 3;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>