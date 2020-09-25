<template>
  <div id="map" ref="rootmap">
    <a-button type="primary" style="" size="large" class="erect"> 显示封开河 </a-button>
    <div @click="$refs.LeftTop.open()" class="lc" style="left: 10px; top: 125px">河段累计里程</div>
    <div @click="$refs.rightTop.open()" class="lc" style="right: 10px; top: 125px">最大槽蓄水增量</div>
    <div @click="$refs.RightBottom.open()" class="lc" style="right: 10px; top: 415px">槽蓄水增量</div>
    <div @click="$refs.LeftBottom.open()" class="lc" style="left: 10px; top: 415px">蓄水情况</div>
    <!-- <a-tree checkable :selectable="false" v-model="layerCheckedKeys" :treeData="layerLableData" /> -->
    <!-- <button @click="change_img">切换影像底图</button>
      <button @click="change_vec">切换街道底图</button>
      <button @click="getAdd">获取当前坐标</button>
      <button @click="clear">清除</button> -->
    <!-- <a-button type="primary" style="position: absolute; top: 125px; left: 85px; z-index: 999;width:50px"><a-icon type="plus" /> </a-button>
      <a-button type="primary" style="position: absolute; top: 125px; left: 150px; z-index: 999;width:50px"><a-icon type="minus" /> </a-button>
      <a-button type="primary" style="position: absolute; top: 125px; left: 215px; z-index: 999;width:50px"><a-icon type="environment" /> </a-button>
      <a-button type="primary" style="position: absolute; top: 125px; left: 85px; z-index: 999;width:50px"><a-icon type="plus" /> </a-button>
      <a-button type="primary" style="position: absolute; top: 125px; left: 85px; z-index: 999;width:50px"><a-icon type="plus" /> </a-button> -->
    <right-top ref="rightTop" class="right-top"></right-top>
    <right-bottom ref="RightBottom" class="right-bottom"></right-bottom>
    <left-bottom ref="LeftBottom" class="left-bottom"></left-bottom>
    <left-top ref="LeftTop" class="left-top"></left-top>
    <map-btn class="map-btn"></map-btn>
    <HBWSK class="hbwsk"></HBWSK>
    <WLBHFHQ class="wlbhfhq"></WLBHFHQ>
    <SHHKSWZ class="shhkswz"></SHHKSWZ>
    <BTSWZ class="btswz"></BTSWZ>
    <TDGSWZ class="tdgswz"></TDGSWZ>
    <WJZSK class="wjzsk"></WJZSK>
    <div id="test">

    </div>
  </div>
</template>

<script>
import 'ol/ol.css'
import { Map, View } from 'ol'
import { format, GeoJSON, WFS } from 'ol/format'
import GML2 from 'ol/format/GML2'
import { bbox } from 'ol/loadingstrategy'
import Feature from 'ol/Feature'
import Point from 'ol/geom/Point'
import TileLayer from 'ol/layer/Tile'
import Vector from 'ol/layer/Vector'
import transform from 'ol/proj/transforms'
import XYZ from 'ol/source/XYZ'
import OSM from 'ol/source/OSM'
import VectorSource from 'ol/source/Vector'
import Style from 'ol/style/Style'
import Icon from 'ol/style/Icon'
import Stroke from 'ol/style/Stroke'
import TileArcGISRest from 'ol/source/TileArcGISRest'
import Draw from 'ol/interaction/Draw'
import RightTop from './modals/RightTop'
import RightBottom from './modals/RightBottom'
import LeftBottom from './modals/LeftBottom'
import HBWSK from './modals/HBWSK'
import WLBHFHQ from './modals/WLBHFHQ'
import SHHKSWZ from './modals/SHHKSWZ'
import BTSWZ from './modals/BTSWZ'
import TDGSWZ from './modals/TDGSWZ'
import WJZSK from './modals/WJZSK'



import LeftTop from './modals/LeftTop'
import MapBtn from './modals/MapBtn'
export default {
  components: {
    RightTop,
    RightBottom,
    LeftBottom,
    LeftTop,
    MapBtn,
    HBWSK,
    WLBHFHQ,
    SHHKSWZ,
    BTSWZ,
    TDGSWZ,
    WJZSK
  },
  data() {
    return {
      map: null,
      DT: 'img',
      layerList: [],
      layerCheckedKeys: [],
      layerLableData: [
        { title: '湖泊', key: 'hp' },
        { title: '中国地图', key: 'zgdt' },
        { title: '省会', key: 'sh' },
      ],
    }
  },
  mounted() {
    document.getElementById('test').style.minHeight = document.documentElement.clientHeight - 110 + 'px'

    var mapcontainer = this.$refs.rootmap
    document.getElementById('map').style.minHeight = document.documentElement.clientHeight - 110 + 'px'
    // var shenghui = new TileLayer({
    //   Style: null,
    //   name: '省会',
    //   id: 'sh',
    //   visible: false,
    //   source: new TileArcGISRest({
    //     projection: 'EPSG:4326',
    //     url: 'http://localhost:6080/arcgis/rest/services/chinamap/MapServer'
    //   })
    // })
    // var zgdt = new Vector({
    //   Style: null,
    //   name: '中国地图',
    //   id: 'zgdt',
    //   visible: false,
    //   source: new VectorSource({
    //     strategy: bbox,
    //     url: function(extent) {
    //       return (
    //         'http://localhost:6080/arcgis/services/MyMapService/MapServer/WFSServer?service=wfs&version=1.1.0&request=getfeature&typename=MapServer&outputFormat=gml2&EPSG:4326&bbox=' +
    //         extent.join(',')
    //       )
    //     },
    //     format: new WFS({
    //       gmlFormat: new GML2({
    //         srsName: 'EPSG:4326',
    //         featureNS: 'http://localhost:6080/arcgis/services/MyMapService/MapServer/WFSServer',
    //         featureType: 'MyMapService'
    //       })
    //     })
    //   })
    // })
    var hopotime = new TileLayer({
      Style: null,
      name: '湖泊',
      id: 'hp',
      visible: false,
      source: new TileArcGISRest({
        projection: 'EPSG:4326',
        url: 'http://182.61.41.212:6080/arcgis/rest/services/东营河务局/黄河下游东营区局/MapServer',
      }),
    })

    // vectorLayer = new Vector({ //初始化矢量图层
    //   source: new GeoJSON({
    //     projection: 'EPSG:4326',
    //     url: 'http://182.61.41.212:6080/arcgis/rest/services/东营河务局/黄河下游东营区局/MapServer'   //从文件加载边界等地理信息
    //   })
    //   })

    var img = new TileLayer({
      Style: null,
      visible: true,
      name: 'img',
      source: new XYZ({
        url: 'http://t0.tianditu.com/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=061137212d518fb0097762bd82bfc7a9',
      }),
    })
    var map_cva = new TileLayer({
      Style: null,
      name: 'cva',
      visible: false,
      source: new XYZ({
        url: 'http://t0.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=061137212d518fb0097762bd82bfc7a9',
      }),
    })
    var map_vec = new TileLayer({
      Style: null,
      visible: false,
      name: 'cva',
      source: new XYZ({
        url: 'http://t0.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=061137212d518fb0097762bd82bfc7a9',
      }),
    })
    this.layerList = [img, map_cva, map_vec, hopotime]
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        ...this.layerList,
      ],
      view: new View({
        projection: 'EPSG:4326', //使用这个坐标系
        center: [118.145816, 37.265234], //深圳
        zoom: 12,
        minZoom: 4,
      }),
    })

    this.map.on('singleclick', function (e) {
      console.log(e.coordinate)
      // 		alert(ol.proj.transform(e.coordinate, 'EPSG:3857', 'EPSG:4326'));

      //         // 通过getEventCoordinate方法获取地理位置，再转换为wgs84坐标，并弹出对话框显示
      // 		alert(map.getEventCoordinate(e.originalEvent));
      //         alert(ol.proj.transform(map.getEventCoordinate(e.originalEvent), 'EPSG:3857', 'EPSG:4326'));

      //         var lonlat = map.getCoordinateFromPixel(e.pixel);
      // 		alert(lonlat);
      //         alert(ol.proj.transform(lonlat,"EPSG:3857", "EPSG:4326")); //由3857坐标系转为4326
      //
    })
  },
  methods: {
    getAdd() {
      console.log(this.map.getLayers())
      this.map.getLayers().forEach((item) => {
        console.log(item)
      })
    },

    showLayers(value) {
      this.clear()
      this.layerList.forEach((item) => {
        value.forEach((element) => {
          if (element === item.get('id')) {
            item.setVisible(true)
          }
        })
      })
    },
    clear() {
      this.layerList.forEach((item) => {
        if (this.DT === item.get('name')) {
        } else {
          item.setVisible(false)
        }
      })
    },
    change_img() {
      this.map.getLayers().forEach((item) => {
        if (item.get('name') === 'img') {
          item.setVisible(true)
        } else if (item.get('name') === 'cva') {
          item.setVisible(false)
        }
      })
      this.DT = 'img'
    },
    change_vec() {
      this.map.getLayers().forEach((item) => {
        if (item.get('name') === 'cva') {
          item.setVisible(true)
        } else if (item.get('name') === 'img') {
          item.setVisible(false)
        }
      })
      this.DT = 'cva'
    },
  },
  watch: {
    layerCheckedKeys(value) {
      this.showLayers(value)
    },
  },
}
</script>

<style lang="less">
#map {
  height: 100%;
}
/*隐藏ol的一些自带元素*/
.ol-attribution,
.ol-zoom {
  display: none;
}
#tools {
  position: absolute;
  width: 98%;
  margin: 0 auto;
  height: 500px;
  z-index: 1;
}
.lc {
  padding: 15px 10px;
  z-index: 999;
  text-align: center;
  position: absolute;
  width: 41px;
  font-size: 16px;
  border-radius: 4px;
  color: #fff;
  background-color: rgba(4, 80, 206, 0.6);
  border-color: rgba(4, 80, 206, 0.6);
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
}
.erect {
  position: absolute;
  bottom: 50px;
  left: 15px;
  z-index: 999;
  background-color: rgba(4, 80, 206, 0.6);
  border-color: rgba(4, 80, 206, 0.6);
}
.lc:hover,
.erect:hover {
  cursor: pointer;
  color: #fff;
  background-color: #40a9ff;
  border-color: #40a9ff;
}
.lc:active,
.erect:active {
  background-color: #2478c5;
  border-color: #2478c5;
}
.right-top {
  position: absolute;
  right: 10px;
  top: 125px;
  z-index: 1000;
}
.right-bottom {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
}
.left-bottom {
  position: absolute;
  left: 10px;
  top: 415px;
  z-index: 1000;
}
.left-top {
  position: absolute;
  left: 10px;
  top: 125px;
  z-index: 1000;
}
.map-btn {
  position: absolute;
  top: 125px;
  left: 85px;
  z-index: 999;
  button {
    background-color: rgba(4, 80, 206, 0.6);
    width: 50px;
    margin-right: 15px;
  }
}
#test{
  width: 100%;
  position: absolute;
  z-index: 888;
  background-image: url('./test.png');
  background-size: cover;
  background-position-y: -200px;
}
.hbwsk{
  position: absolute;
  left: 200px;
  bottom: 125px;
  z-index: 999;
}
.wlbhfhq{
  position: absolute;
  left: 260px;
  bottom: 360px;
  z-index: 900;
}
.shhkswz{
  position: absolute;
  left: 960px;
  bottom: 460px;
  z-index: 900;
}
.btswz{
   position: absolute;
  left: 1340px;
  bottom: 400px;
  z-index: 900;
}
.tdgswz{
   position: absolute;
  left: 1680px;
  bottom: 410px;
  z-index: 900;
}
.wjzsk{
    position: absolute;
  left: 1300px;
  bottom: 110px;
  z-index: 900;
}
</style>