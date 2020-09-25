<template>
  <div class="logo">
    <router-link :to="{name:'DataAnalysis'}">
      <!-- <LogoSvg alt="logo" /> -->
      <img src="/logo.png" alt="">
      <span>黄河防凌智慧平台</span>
      <!-- <h1 v-if="showTitle">{{ title }}</h1> -->
    </router-link>
  </div>
</template>

<script>
import LogoSvg from '@/assets/logo.svg?inline'

export default {
  name: 'Logo',
  components: {
    LogoSvg
  },
  props: {
    title: {
      type: String,
      default: '黄河防凌智慧平台-成果展示',
      required: false
    },
    showTitle: {
      type: Boolean,
      default: true,
      required: false
    }
  }
}
</script>
<style scoped>
.logo{
  margin-right:32px;
}
img{
  border-radius: 50%;
}
span{
  font-size: 16px;
  margin-left: 15px;
  color: white;
font-family: cursive;
}
</style>