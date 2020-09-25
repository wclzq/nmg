<template>
  <div class="container">
    <div class="main">
      <div class="item left" @click="jump('content')">
        <img src="../../assets/menu/gl.svg" alt="内容管理" />
        <span>内容管理</span>
      </div>
      <div class="item right" @click="jump('res_upload')">
        <img src="../../assets/menu/sc.svg" alt="成果数据上传" />
        <span>成果数据上传</span>
      </div>
      <div class="item bottom-left" @click="jump('check_upload')">
        <img src="../../assets/menu/sjsb.svg" alt="检测数据上报" />
        <span>检测数据上报</span>
      </div>
      <div class="item bottom-right" @click="jump('map')">
        <img src="../../assets/menu/ditu.svg" alt="地图发布与管理" />
        <span>地图发布与管理</span>
      </div>
      <div class="item center" @click="jump('info_search')">
        <img src="../../assets/menu/cx_center.svg" alt="信息查询" />
        <span>信息查询</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'information',
  data () {
    return {}
  },
  methods: {
    jump (e) {
      console.log(e)
      switch (e) {
        case 'map':
          console.log(0)
          this.$router.push({
            name: 'infomap'
          })
          break
        default:
          console.log('default')
          break
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
  display: flex;
  justify-content: center;
  align-items: center;
}
.main {
  width: 45%;
  min-height: 700px;
  min-width: 700px;
  padding-top: 45%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
}
.item {
  width: 49.9%;
  height: 49.9%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 transition: width 0.5s, height 0.5s, transform 0.5s;
}
.item:not(.center) {
  border-radius: 50%;
}
.left {
  border-bottom: 1px gray solid;
  border-right: 1px gray solid;
}
.right {
  border-bottom: 1px gray solid;
  border-left: 1px gray solid;
}
.bottom-right {
  border-left: 1px gray solid;
  border-top: 1px gray solid;
}
.bottom-left {
  border-top: 1px gray solid;
  border-right: 1px gray solid;
}
.left,
.right {
  top: 0;
}
.right,
.bottom-right {
  left: 49.9%;
}
.bottom-left,
.bottom-right {
  top: 49.9%;
}
.center {
  background: rgba(240, 242, 245);
  border: 1px gray solid;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  transform: translate(-50%, -50%); /*向左向上分别平移自身的一半*/
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
}
.item:hover {
  background: rgb(180, 177, 177);
   width: 55%;
  height: 55%;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 5px 5px 5px rgb(124, 122, 122);
}
span {
  padding: 7px;
}
</style>
