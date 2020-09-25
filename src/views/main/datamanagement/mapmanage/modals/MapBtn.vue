 <template>
  <div>
    <div class="map_kong" >
      <div class="map_btn">
        <!-- 影像地图切换按钮 -->
        <a-tooltip >
          <template slot="title">点击 复位</template>
          <a-button type="primary" icon="global" @click="zoomRestore"></a-button>
        </a-tooltip>

        <a-tooltip >
          <template slot="title">点击 放大</template>
          <a-button type="primary" icon="plus" @click="zoomIn" />
        </a-tooltip>

        <a-tooltip >
          <template slot="title">点击 缩小</template>
          <a-button type="primary" icon="minus" @click="zoomOut" />
        </a-tooltip>

        <a-tooltip >
          <template slot="title">点击 定位</template>
          <a-button type="primary" icon="environment" />
        </a-tooltip>

        <a-tooltip >
          <template slot="title">点击 绘制</template>
          <a-button type="primary" icon="highlight" />
        </a-tooltip>

        <a-dropdown >
          <a-tooltip>
            <template slot="title">测量工具</template>
            <a-button type="primary" icon="tool" />
          </a-tooltip>
          <a-menu slot="overlay">
            <a-menu-item key="0">
              <a-icon type="colum-height" />点击测量长度
            </a-menu-item>
            <a-menu-item key="1">
              <a-icon type="gateway" />点击测量面积
            </a-menu-item>
          </a-menu>
        </a-dropdown>

        <a-tooltip>
          <template slot="title">点击 刷新</template>
          <a-button type="primary" icon="sync" @click="sync" />
        </a-tooltip>
      </div>
      <!-- 地图搜索 -->
      
    </div>
    <!-- 管理细则 -->
    
  </div>
</template>

<script>
import { fromLonLat } from 'ol/proj'

export default {
  components: {
  },
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
    sync () {
      this.zoomRestore()
    },
    //放大
    zoomIn () {
      var view = this.map.getView()
      //获得当前缩放级数
      var zoom = view.getZoom()
      //地图放大一级
      view.animate({ zoom: view.getZoom() + 1 })
    },
    //缩小
    zoomOut () {
      var view = this.map.getView()
      //获得当前缩放级数
      var zoom = view.getZoom()
      //地图缩小一级
      view.animate({ zoom: view.getZoom() - 1 })
    },
    //复位
    zoomRestore () {
      var view = this.map.getView()
      //初始中心点
      view.setCenter(fromLonLat(this.mapconf.center))
      var rotation = view.getRotation()
      //初始旋转角度
      view.setRotation(rotation)
      //初始缩放级数
    },
  },
  //地图选中双向绑定
  watch: {}
}
</script>
