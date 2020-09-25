<template>
  <div>
    <a-card :bordered="false" title="数据展示">
      <div slot="extra">
        <a-radio-group v-model="status">
          <a-radio-button value="all">全部</a-radio-button>
          <a-radio-button value="processing">进行中</a-radio-button>
          <a-radio-button value="waiting">已完成</a-radio-button>
        </a-radio-group>
        <a-input-search style="margin-left: 16px; width: 272px;" />
      </div>
      <a-list size="large" :pagination="pagination">
        <a-list-item :key="index" v-for="(item, index) in data">
          <a-list-item-meta :description="item.description">
            <a-avatar slot="avatar" size="large" shape="square" :src="item.avatar" />
            <a slot="title">{{ item.title }}</a>
          </a-list-item-meta>
          <div slot="actions">
            <a>编辑</a>
          </div>
          <div slot="actions">
            <a-dropdown>
              <a-menu slot="overlay">
                <a-menu-item>
                  <a>编辑</a>
                </a-menu-item>
                <a-menu-item>
                  <a>删除</a>
                </a-menu-item>
              </a-menu>
              <a>
                更多
                <a-icon type="down" />
              </a>
            </a-dropdown>
          </div>
          <div class="list-content">
            <div class="list-content-item">
              <span>by</span>
              <p>{{ item.owner }}</p>
            </div>
            <div class="list-content-item">
              <span>开始时间</span>
              <p>{{ item.startAt }}</p>
            </div>
            <div class="list-content-item">
              <a-progress
                :percent="item.progress.value"
                :status="!item.progress.status ? null : item.progress.status"
                style="width: 180px"
              />
            </div>
          </div>
        </a-list-item>
      </a-list>
      <!-- <test-c :datass="testData" :item="testItem">
        <a-list-item slot="temp">
          <a-pagination :defaultCurrent="6" :total="500" />
        </a-list-item>
      </test-c> -->
      <!-- 弹窗 -->
      <!-- <task-form ref="taskForm" /> -->
    </a-card>
  </div>
</template>

<script>
import TestC from '@/components/test/Test'
const data = []
data.push({
  title: '黄科院',
  avatar: 'http://127.0.0.1:8080/hky.png',
  description: '那是一种内在的东西， 他们到达不了，也无法触及的',
  owner: '黄科院',
  startAt: '2018-07-26 22:44',
  progress: {
    value: 90
  }
})
data.push({
  title: '黄科院',
  avatar: 'http://127.0.0.1:8080/hky.png',
  description: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
  owner: '黄科院',
  startAt: '2018-07-26 22:44',
  progress: {
    value: 54
  }
})
data.push({
  title: '黄科院',
  avatar: 'http://127.0.0.1:8080/hky.png',
  description: '生命就像一盒巧克力，结果往往出人意料',
  owner: '黄科院',
  startAt: '2018-07-26 22:44',
  progress: {
    value: 100,
    status: 'success'
  }
})
data.push({
  title: '黄科院',
  avatar: 'http://127.0.0.1:8080/hky.png',
  description: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
  owner: '黄科院',
  startAt: '2018-07-26 22:44',
  progress: {
    value: 30
  }
})
data.push({
  title: '黄科院',
  avatar: 'http://127.0.0.1:8080/hky.png',
  description: '那时候我只会想自己想要什么，从不想自己拥有什么',
  owner: '黄科院',
  startAt: '2018-07-26 22:44',
  progress: {
    status: 'exception',
    value: 100
  }
})
export default {
  name: 'RemoteInfo',
  components: {
    TestC
  },
  data() {
    return {
      testData: {
        size: 'large',
        pagination: this.pagination
      },
      testItem: data,
      data,
      size: 5,
      pagination: {
        showQuickJumper: true,
        showSizeChanger: true,
        pageSize: 10,
        total: 25,
        pageSizeOptions: ['10', '20', '30', '40'],
        onShowSizeChange: (current, pageSize) => {
          console.log(current, pageSize)
          this.pagination.pageSize = pageSize
        },
        onChange: (page, size) => {
          console.log(page, size)
        }
      },
      status: 'all',
      description:
        '可以查询到相关河段的最新的卫星遥感影像，无人机航拍影像等，通过不同时段影像资料的对比分析，可快速掌握凌情发展态势。'
    }
  },
  methods: {
    change(page, size) {
      console.log(page)
      console.log(size)
    },
    onShowSizeChange(current, pageSize) {
      console.log(current, pageSize)
    }
  }
}
</script>

<style lang="less" scoped>
.ant-avatar-lg {
  width: 48px;
  height: 48px;
  line-height: 48px;
}

.list-content-item {
  color: rgba(0, 0, 0, 0.45);
  display: inline-block;
  vertical-align: middle;
  font-size: 14px;
  margin-left: 40px;
  span {
    line-height: 20px;
  }
  p {
    margin-top: 4px;
    margin-bottom: 0;
    line-height: 22px;
  }
}
</style>
