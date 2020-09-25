<template>
  <div :hidden="visible">
    <div class="button">
        <span>最大槽蓄水增量</span>
      <a-icon @click="rightTopClose" class="close" type="fullscreen-exit" />
    </div>
    <div id="line"></div>
  </div>
</template>
<script>
import echarts from 'echarts'
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
      var myChart = echarts.init(document.getElementById('line'))
      // Generate data
      var category = []
      var dottedBase = +new Date()
      var lineData = []
      var barData = []
      var line2=[]

      for (var i = 0; i < 20; i++) {
        var date = new Date((2000+i)+'')
        category.push([date.getFullYear()]+'年')
        var b = Math.random() * 200
        var d = Math.random() * 200
        barData.push(Math.floor((Math.random()*15)+1))
        lineData.push(Math.floor((Math.random()*15)+1))
        line2.push(Math.floor((Math.random()*15)+1))
      }
        
      // option
     var option = {
        backgroundColor: '#0f375f',
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        legend: {
          data: ['后巴-三段', '后三-头段', '后巴-头段'],
          textStyle: {
            color: '#ccc',
          },
        },
        xAxis: {
          data: category,
          axisLine: {
            lineStyle: {
              color: '#ccc',
            },
          },
          name:'年份'
        },
        yAxis: {
          splitLine: { show: false },
          axisLine: {
            lineStyle: {
              color: '#ccc',
            },
          },
          name:'最大槽蓄水增量'
        },
        series: [
          {
            name: '后巴-三段',
            type: 'line',
            smooth: true,
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 15,
            data: lineData,
          },
          {
            name: '后三-头段',
            type: 'bar',
            barWidth: 10,
            itemStyle: {
              barBorderRadius: 5,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#14c8d4' },
                { offset: 1, color: '#43eec6' },
              ]),
            },
            data: barData,
          },
          {
            name: '后巴-头段',
            type: 'line',
            barWidth: 10,
            itemStyle: {
              barBorderRadius: 5,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: 'rgb(63,167,220)' },
                { offset: 1, color: 'rgb(63,167,220)' },
              ]),
            },
            data: line2,
          },
          {
            name: '',
            type: 'bar',
            barGap: '-100%',
            barWidth: 10,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: 'rgba(255,255,255,1)' },
                { offset: 0.2, color: 'rgba(255,255,255,1)' },
                { offset: 1, color: 'rgba(255,255,255,1)' },
              ]),
            },
            z: -12,
            data: lineData,
          },
          {
            name: '后巴-头段',
            type: 'pictorialBar',
            symbol: 'rect',
            itemStyle: {
              color: '#0f375f',
            },
            symbolRepeat: true,
            symbolSize: [12, 4],
            symbolMargin: 1,
            z: -10,
            data: lineData,
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
#line {
  height: 600px;
  width: 800px;
}
.button {
  width: 800px;
  height: 50px;
  background: rgb(15, 55, 95);
  border-bottom: 1px solid rgb(48, 223, 204);
  line-height: 50px;
  font-size: 26px;
  color: #30dfcc;
  span{
      font-size: 16px;
      margin-left: 10px;
      color:rgb(255, 255, 255);
  }
}
.close {
  float: right;
  margin-right: 12px;
  margin-top: 12px;
}
.close:hover {
  color: rgb(255, 255, 255);
}
</style>