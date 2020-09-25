<template>
  <div :hidden="visible">
    <div class="button">
        <span>槽蓄水增量</span>
      <a-icon @click="rightTopClose" class="close" type="fullscreen-exit" />
    </div>
    <div id="cir"></div>
  </div>
</template>
<script>
import echarts from 'echarts'
import echartsGL from 'echarts-gl'
export default {
  data() {
    return {
      visible: true,
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    open() {
      this.visible = false
    },
    handleOk() {},
    init() {
      // Generate data
      var myChart = echarts.init(document.getElementById('cir'))

      var date = [
        '2000年',
        '2002年',
        '2004年',
        '2006年',
        '2008年',
        '2010年',
        '2012年',
        '2014年',
        '2016年',
        '2018年',
        '2020年',
        '2000年',
        '2000年'
      ]
      var site = ['后巴-三段', '后三-头段', '后巴-头段']
        
      var data = [
        [0, 0, 5],
        [0, 1, 4],
        [0, 2, 18],
        [1, 0, 15],
        [1, 1, 14],
        [1, 2, 7],
        [2, 0,10],
        [2, 1, 11],
        [2, 2, 8],
        [3, 0, 12],
        [3, 1, 14],
        [3, 2, 4],
        [4, 0, 5],
        [4, 1, 13],
        [4, 2, 8],
        [5, 0, 15],
        [5, 1, 11],
        [5, 2, 8],
        [6, 0, 9],
        [6, 1, 4],
        [6, 2, 8],
        [7, 0, 15],
        [7, 1, 4],
        [7, 2, 18],
        [8, 0, 5],
        [8, 1, 14],
        [8, 2, 8],
        [9, 0, 15],
        [9, 1, 4],
        [9, 2, 6],
        [10, 0, 10],
        [10, 1, 14],
        [10, 2, 8]
        
        
      ]
     var option = {
        tooltip: {},
        visualMap: {
          max: 20,
          inRange: {
            color: [
              '#313695',
            //   '#4575b4',
            //   '#74add1',
            //   '#abd9e9',
            //   '#e0f3f8',
            //   '#ffffbf',
              '#fee090',
            //   '#fdae61',
            //   '#f46d43',
            //   '#d73027',
              '#a50026',
            ],
          },
        },
        xAxis3D: {
          type: 'category',
          data: date,
          name:'年份'
        },
        yAxis3D: {
          type: 'category',
          data: site,
          name:'位置'
        },
        zAxis3D: {
          type: 'value',
          name:'槽蓄水增量'
        },
        grid3D: {
          boxWidth: 200,
          boxDepth: 80,
          light: {
            main: {
              intensity: 1.2,
            },
            ambient: {
              intensity: 0.3,
            },
          },
        },
        series: [
          {
            type: 'bar3D',
            data: data.map(function (item) {
              return {
                value: [item[0], item[1], item[2]],
              }
            }),
            shading: 'color',

            label: {
              show: false,
              textStyle: {
                fontSize: 16,
                borderWidth: 1,
              },
            },

            itemStyle: {
              opacity: 0.4,
            },

            emphasis: {
              label: {
                textStyle: {
                  fontSize: 20,
                  color: '#900',
                },
              },
              itemStyle: {
                color: '#900',
              },
            },
          },
        ],
      }
      myChart.setOption(option)
    },
    rightTopClose() {
      this.visible = true
    },
  },
}
</script>
<style lang="less" scoped>
#cir {
  height: 650px;
  width: 1200px;
  background: rgba(255, 255, 255,1);

}
.button {
  width: 1200px;
  height: 50px;
  background: rgba(255, 255, 255,1);
  border-bottom: 1px solid rgba(48, 223, 204,1);
  line-height: 50px;
  font-size: 26px;
  color: #30dfcc;
  span{
      font-size: 16px;
      margin-left: 10px;
      color: rgb(15, 55, 95);
  }
}
.close {
  float: right;
  margin-right: 12px;
  margin-top: 12px;
}
.close:hover {
  color: rgb(15, 55, 95);
}
</style>