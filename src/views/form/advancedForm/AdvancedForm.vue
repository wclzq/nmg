<template>
  <!-- <div>
    <a-card class="card" title="设备信息" :bordered="false">
      <repository-form ref="repository" />
    </a-card>
    <a-card class="card" title="雷达设备信息" :bordered="false">
      <task-form ref="task" />
    </a-card>
  </div>-->
  <div style=" padding: 20px;height:100%;">
    <a-row :gutter="[16,16]">
      <a-col :span="8">
        <a-card title="设备信息" :bordered="false">
          <div class="tool">
            <img src="@/assets/tool/gsd.svg" alt />
            <span>归属地：黄河水利科学研究院</span>
          </div>
          <div class="tool">
            <img src="@/assets/tool/bh.svg" alt />
            <span>设备编号：HKY20200330</span>
          </div>
          <div class="tool">
            <img src="@/assets/tool/pl.svg" alt />
            <span>天线频率：400MHZ</span>
          </div>
          <div class="control">设备控制</div>
          <a-divider />
          <div class="btn-play">
            <div class="play" @click="open">
              <img src="@/assets/tool/bf.svg" alt="播放" />
              <div class="jk">监控</div>
            </div>
            <div class="pause" @click="close">
              <img src="@/assets/tool/tz.svg" alt="播放" />
              <div class="stop" >关闭监控</div>
            </div>
          </div>
          <div :class="hidden?'video-hidden':'i-video'">
            <!-- <video-player
             ref="videoPlayer"
              class="video-player vjs-custom-skin"
              :playsinline="true"
              :options="playerOptions"
            ></video-player> -->
            <video muted autoplay loop controls width="100%">
              <source type="video/mp4" src="../../../assets/video/test.mp4" />
            </video>
          </div>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="雷达设备信息" :bordered="false">
          <div class="tool">
            <img src="@/assets/tool/sj.svg" alt />
            <span>采集时间：2020/3/30 16：34</span>
          </div>
          <div class="tool">
            <img src="@/assets/tool/wd.svg" alt />
            <span>环境温度：-1℃</span>
          </div>
          <div class="tool">
            <img src="@/assets/tool/wd.svg" alt />
            <span>水面-冰面温度：1.1℃</span>
          </div>
          <div class="tool">
            <img src="@/assets/tool/gc.svg" alt />
            <span>水位-冰面高程：987.848m</span>
          </div>
          <div class="tool">
            <img src="@/assets/tool/chizi.svg" alt />
            <span>冰层厚度：0.65m</span>
          </div>
          <div class="tool">
            <img src="@/assets/tool/jwd.svg" alt />
            <span>经度：40.2165165</span>
          </div>
          <div class="tool">
            <img src="@/assets/tool/jwd.svg" alt />
            <span>纬度：111.21651651</span>
          </div>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="太阳能控制器信息" :bordered="false">
          <div class="tool">
            <img src="@/assets/tool/sj.svg" alt />
            <span>采集时间：2020/03/30 15：36</span>
          </div>
          <div class="tool">
            <img src="@/assets/tool/dc.svg" alt />
            <span>电量百分比：78%</span>
          </div>
          <div class="tool">
            <img src="@/assets/tool/dy.svg" alt />
            <span>PV输出电压：0.1V</span>
          </div>
          <div class="tool">
            <img src="@/assets/tool/dy.svg" alt />
            <span>实时电池电压：12.7V</span>
          </div>
          <div class="tool">
            <img src="@/assets/tool/dy.svg" alt />
            <span>实时Load电压：12.8V</span>
          </div>
          <div class="tool">
            <img src="@/assets/tool/dl.svg" alt />
            <span>实时Load电流：0.5A</span>
          </div>
          <div class="tool">
            <img src="@/assets/tool/bm.svg" alt />
            <span>设备信息吗：64</span>
          </div>
          <div class="tool">
            <img src="@/assets/tool/ts.svg" alt />
            <span>系统提示信息：暂无信息</span>
          </div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { mixin, mixinDevice } from '@/utils/mixin'
// import { videoPlayer } from 'vue-video-player'
// import 'video.js/dist/video-js.css'

export default {
  name: 'AdvancedForm',
  mixins: [mixin, mixinDevice],
  components: {},
  data() {
    return {
      description:
        '系统将对接课题二项目组在宁蒙河段最新布设的定点凌情观测设备“悬挂式空气耦合雷达冰厚、水位一体化远程监测站”，' +
        '实时获取水文要素冰厚、水位一体化的原位实时连续自动实时测量数据。还可获取摄像头监测画面和基于图像识别技术实时获取的广视场范围的流凌密度和流凌速度参数。',
      loading: false,
      memberLoading: false,
      hidden:true,
      // playerOptions: {
      //   playbackRates: [1.0], //播放速度
      //   autoplay: false, //如果true,浏览器准备好时开始回放。
      //   muted: false, // 默认情况下将会消除任何音频。
      //   loop: false, // 导致视频一结束就重新开始。
      //   preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
      //   language: 'zh-CN',
      //   aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
      //   fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
      //   sources: [
      //     {
      //       src: '../../../assets/video/test.mp4',
      //       type: 'video/mp4'
      //     }
      //   ],
      //   poster: '', //你的封面地址
      //   notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
      //   controlBar: {
      //     timeDivider: true,
      //     durationDisplay: true,
      //     remainingTimeDisplay: false,
      //     fullscreenToggle: true //全屏按钮
      //   }
      // }
    }
  },
  methods: {
    open(){
      this.hidden=false
    },
    close(){
      this.hidden=true
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .ant-card-head-title {
  color: rgb(4, 121, 82) !important;
}
.tool {
  margin-bottom: 7px;
}
.tool img {
  width: 19px;
  height: 19px;
  margin-right: 7px;
}
.tool span {
  height: 36px;
  color: rgb(4, 121, 82);
}
.control {
  color: rgb(4, 121, 82);
  font-size: 16px;
  display: inline-block;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding: 16px 0 0 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.card {
  margin-bottom: 24px;
}
.popover-wrapper {
  /deep/ .antd-pro-pages-forms-style-errorPopover .ant-popover-inner-content {
    min-width: 256px;
    max-height: 290px;
    padding: 0;
    overflow: auto;
  }
}
.antd-pro-pages-forms-style-errorIcon {
  user-select: none;
  margin-right: 24px;
  color: #f5222d;
  cursor: pointer;
  i {
    margin-right: 4px;
  }
}
.antd-pro-pages-forms-style-errorListItem {
  padding: 8px 16px;
  list-style: none;
  border-bottom: 1px solid #e8e8e8;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #e6f7ff;
  }
  .antd-pro-pages-forms-style-errorIcon {
    float: left;
    margin-top: 4px;
    margin-right: 12px;
    padding-bottom: 22px;
    color: #f5222d;
  }
  .antd-pro-pages-forms-style-errorField {
    margin-top: 2px;
    color: rgba(0, 0, 0, 0.45);
    font-size: 12px;
  }
}
.ant-divider-horizontal {
  margin: 10px 0 !important;
}
.btn-play {
  display: flex;
  justify-content: flex-start;
  .play,
  .pause {
    width: 55px;
    height: 55px;
    border: rgba(4, 121, 82, 0.1) 1px solid;
    display: inline-block;
    margin: 10px 20px 0 0;
    display: flex;
    flex-direction: column;
    img {
      width: 30px;
      height: 30px;
      margin: 0 auto;
    }
    div {
      text-align: center;
      font-size: 10px;
      color: rgb(4, 121, 82);
    }
  }
  .play:hover,
  .pause:hover {
    background: rgba(4, 121, 82, 0.1);
    cursor: pointer;
  }
}
.i-video {
  width: 100%;
  margin-top: 16px;
   display: block;
}
.video-hidden{
  width: 100%;
  margin-top: 16px;
  display: none;
}
</style>
