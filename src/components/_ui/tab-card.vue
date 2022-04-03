<template>
    <q-card class="my-card"
            @click="$emit('change',slide.link)"
            :class="{'active':active}"
    >
      <div class="q-pa-md-sm q-pa-xs-sm">
        <q-img :src="slide.img" class="img"/>
      </div>
      <q-card-section class="q-pa-md-sm q-pa-xs-xs">
        <div class="text-center">{{ slide.text }}</div>
      </q-card-section>
    </q-card>
</template>

<script>
export default {
  name: "slide-card",
  props: {
    slide: {
      type: Object,
      default: () => {
      }
    },
    active: {
      type:Boolean,
      default:false
    }
  }
}
</script>

<style scoped lang="scss">

.my-card {
  cursor: pointer;
  min-width: 150px;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  background: #FFFFFF;
  margin: 15px;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.11);
  border-radius: 6.5px;
  /* Rectangle 992 */
  &:hover,&.active{
    outline: 1px solid $theme-green;
    box-sizing: border-box;
    color: $theme-green;
  }


  .img {
    height: 48px;
    width: 48px;
    overflow: hidden;
  }

}

</style>