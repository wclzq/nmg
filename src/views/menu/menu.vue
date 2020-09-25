<template>
  <div class="container">
    <div class="menu">
      <div class="item left" @click="jump('left')">
        <img src="../../assets/menu/zs.svg" alt="成果应用与展示" />
        <span>成果应用与展示</span>
      </div>
      <div class="item right" @click="jump('right')">
        <img src="../../assets/menu/xx.svg" alt="信息查询" />
        <span>信息查询</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {}
  },
  methods: {
    jump (e) {
      console.log(e)
      if (e === 'right') {
        this.$router.push({
          path: '/infoserach'
        })
      } else {
        this.$router.push({
          path: '/datamanagement/resupload'
        })
      }
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
.menu {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item {
  width: 45%;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 25%;
  transition: width 0.5s ease;
}
.left {
  border-right: 1px gray solid;
}
.right{
  border-left: 1px gray solid;
}
img {
  width: 10%;
}
span {
  text-align: center;
  padding: 10px;
  font-size: 2em;
}
.item:hover {
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  cursor: pointer;
}
</style>
