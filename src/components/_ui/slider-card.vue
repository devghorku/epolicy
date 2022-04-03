<template>
  <div>
    <q-card class="my-card">
      <div class="q-pa-md-md q-pa-xs-sm">
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
  cursor: pointer;
  width: 215px;
  min-height: 260px;
  margin: 15px;
  border-radius: 20px;
  font-size: 20px;
  line-height: 24px;


  .img {
    height: 115px;
    overflow: hidden;
  }

  @media (max-width: $breakpoint-xs-max) {
    width: 150px;
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