<template>
  <div>
    <q-card class="my-card">
      <div class="q-px-md-sm q-py-md-md q-pa-xs-sm">
        <q-img :src="slide.img" class="img" contain/>
      </div>
      <q-card-section>
        <div class="text-center">{{ slide.name }}</div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "slide-card",
  props: {
    slide: {
      type: Object,
      default: () => {
      }
    }
  }
}
</script>

<style scoped lang="scss">
.my-card {
  cursor: grab!important;
  //width: 165px;
  min-height: 200px;
  margin: 10px;
  border-radius: 20px;
  font-size: 16px;
  line-height: 24px;


  .img {
    height: 55px;
    overflow: hidden;
  }

  @media (max-width: $breakpoint-xs-max) {
    //width: 150px;
    min-height:180px;
    margin: 8px;
    font-size: 11px;
    .img {
      height: 80px;
      overflow: hidden;
    }
  }
}

</style>