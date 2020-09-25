<template>
  <a-layout :class="['layout']">
    <a-layout :style="{ minHeight: '100vh' }">
      <!-- layout header -->
      <a-layout-header :style="{ padding: '0' }">
        <div class="top-nav-header-index dark">
          <div class="header-index-wide">
            <div class="header-index-left my-index-left">
              <show-logo class="top-nav-header" :show-title="true" />
              <a-menu
                :defaultSelectedKeys="['home']"
                mode="horizontal"
                theme="dark"
                :style="{ lineHeight: '64px' }"
                @click="onclick"
              >
                <template v-for="item in inforMationMenus">
                  <a-menu-item v-if="!item.children" :key="item.key">
                    <a-icon :type="item.icon" />
                    <span>{{ item.title }}</span>
                  </a-menu-item>
                  <sub-menu v-else :menu-info="item" :key="item.key" />
                </template>
              </a-menu>
            </div>
            <user-menu class="header-index-right my-index-right"></user-menu>
            <div @click="intoAdmin" class="intoadmin"><a-icon type="appstore" />进入后台</div>
          </div>
        </div>
      </a-layout-header>

      <!-- layout content -->
      <a-layout-content :style="{ height: '100%', paddingTop: '0' }">
        <div class="out-main">
          <div v-if="!isHome" :class="isHome ? 'main-left-home' : 'main-left'">
            <a-menu
              :defaultSelectedKeys="[leftSelectKey]"
              mode="inline"
              theme="dark"
              :style="{ lineHeight: '64px', background: 'rgb(30,30,45)' }"
              @click="LeftMenuclick"
            >
              <template v-for="item in leftMenus">
                <a-menu-item v-if="!item.children" :key="item.key">
                  <a-icon :type="item.icon" />
                  <span>{{ item.title }}</span>
                </a-menu-item>
                <sub-menu v-else :menu-info="item" :key="item.key" />
              </template>
            </a-menu>
          </div>
          <div id="mainleft" :class="isHome ? 'main-right-home' : 'main-right'">
            <transition name="page-transition">
              <route-view style="margin: 0" />
            </transition>
          </div>
        </div>
        <!-- layout footer -->
      </a-layout-content>
    </a-layout>
    <a-layout-footer v-if="!isHome"> 
      <global-footer />
    </a-layout-footer>
  </a-layout>
</template>
<script>
import UserMenu from '../components/tools/UserMenu'
import GlobalFooter from '@/components/GlobalFooter'
import RouteView from './RouteView'
import ShowLogo from '../components/tools/ShowLogo'
import SubMenu from './models/SubMenuModel'
import { getMenus } from './menus'
export default {
  name: 'IndexLayout',
  components: {
    UserMenu,
    GlobalFooter,
    RouteView,
    SubMenu: SubMenu,
    ShowLogo,
  },
  data() {
    name: 'IndexLayout'
    return {
      isHome: true,
      inforMationMenus: [
        { title: '首页', key: 'home', icon: 'home' },
        { title: '信息查询', key: 'infosearch', icon: 'search' },
        { title: '凌情动态感知', key: 'icerunperception', icon: 'alert' },
        { title: '凌灾预警与动态评估', key: 'disasterearlywarning', icon: 'thunderbolt' },
        { title: '应急管理', key: 'emergencymanage', icon: 'setting' },
        { title: '智慧决策与分析', key: 'decisionanalysis', icon: 'rise' },
      ],
      leftMenus: [],
      leftSelectKey: '',
      topSelectkey:''
    }
  },
  created() {
    // this.$router.push({
    //   path: '/infoserach',
    // })
  },
  mounted() {
    
    console.log(this.$route.query)
    // document.getElementById('mainleft').style.minHeight=document.documentElement.clientHeight-208+'px'
  },
  methods: {
    onclick(e) {
      if (e.key == 'home') {
        this.isHome = true
        this.$router.push({
          name: 'HomeMap',
          query:{
            key:e.key
          }
        })
      } else {
        this.isHome = false
        var leftMenus = getMenus(e.key)
        this.leftMenus = leftMenus

        this.$router.push({
          name: leftMenus[0].key,
          query:{
            key:e.key
          }
        })
        this.$nextTick(function () {
          this.leftSelectKey = this.leftMenus[0].key
        })
      }
    },
    LeftMenuclick(e) {
      this.$router.push({
        name: e.key,
      })
    },
    intoAdmin(){
       this.$router.push({
        name: 'AdminLogin',
      })
    }
  },
}
</script>
<style lang="less">
.ant-layout-header {
  height: 110px !important;
}
// .layout.ant-layout .top-nav-header-index .header-index-wide{
//   height: 110px !important;
// }
.header-right {
  width: 196px;
  position: absolute;
  top: 0;
  right: 0;
  .ant-avatar-image {
    margin: 20px 8px 20px 0;
  }
}
.ant-layout-footer {
  box-shadow: 0 10px 30px 0 rgba(82, 63, 105, 0.08);
  .footer {
    margin: 24px 0 24px;
  }
}
.ant-layout-content {
  .main {
    max-width: 1200px;
    margin: 0 auto;
  }
}
.page-header-index-wide {
  max-width: 1200px;
  margin: 0 auto;
}
.header-index-left .logo.top-nav-header {
  height: 110px !important;
  line-height: 110px !important;
  img {
    height: 80px !important;
    width: 80px !important;
  }
  span {
    font-size: 28px !important;
    font-weight: bold !important;
  }
}
.layout.ant-layout .top-nav-header-index .header-index-wide .ant-menu.ant-menu-horizontal {
  position: relative;
  top: 44px;
  left: 100px;
  flex: 0 !important;
  max-width: 2000px !important;
  width: 1000px;
}
.layout.ant-layout .top-nav-header-index .header-index-wide .header-index-left {
  padding-left: 0;
}
.logo.top-nav-header {
  -webkit-box-flex: 0 0 340px !important;
  -ms-flex: 0 0 340px !important;
  flex: 0 0 340px !important;
}
.logo {
  margin-right: 0 !important;
}
.ant-menu-dark.ant-menu-horizontal > .ant-menu-submenu,
.ant-layout-header,
.ant-menu.ant-menu-horizontal.ant-menu-root.ant-menu-dark {
  background: rgb(30, 30, 45) !important;
}
.out-main {
  width: 100%;
  display: flex;
  .main-left {
    width: 15%;
    min-width: 256px;
    min-height: 971px;
    background: rgb(30, 30, 45);
  }
  .main-right {
    width: 85%;
    background: rgb(238, 240, 248);
  }
  .main-left-home {
    width: 0;
  }
  .main-right-home {
    width: 100%;
    background: rgb(238, 240, 248);
  }
}
.ant-menu-item .anticon,
.ant-menu-submenu-title .anticon {
  color: #494b74;
}
.ant-menu.ant-menu-dark .ant-menu-item-selected,
.ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected {
  font-size: 1rm;
  background: rgb(27, 27, 40);
  .anticon {
    color: #3699ff;
  }
}
.ant-menu-item-active {
  .anticon {
    color: #3699ff;
    font-size: 1.3rm;
  }
}
.ant-menu-item {
  font-size: 16px;
  font-family: cursive;
  .anticon {
    font-size: 1.3em;
  }
  span {
    font-size: 16px;
  }
}

.my-index-left {
  position: absolute;
  width: 100%;
}
.my-index-right {
  position: absolute;
  right: 15px;
}
.page-header {
  box-shadow: 0 10px 30px 0 rgba(82, 63, 105, 0.08) !important;
}
.intoadmin{
  position: absolute;
  right: 25px;
  top: 65px;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  color: rgba(255,255,255,0.65);
   font-family: cursive;
  .anticon {
    font-size: 1.3em;
    // vertical-align: middle;
    color: #494b74;margin-right: 10px;
   
  }
  
}
.intoadmin:hover{
  color: white;
  cursor: pointer;
  .anticon {
    color: #3699ff;
    font-size: 1.3rm;
  }
}
</style>
