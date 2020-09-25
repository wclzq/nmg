<template>
  <a-list v-bind="datass">
    <a-list-item :key="index" v-for="(items, index) in item">
      <a-list-item-meta :description="items.description">
        <a-avatar slot="avatar" size="large" shape="square" :src="items.avatar" />
        <a slot="title">{{ items.title }}</a>
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
          <p>{{ items.owner }}</p>
        </div>
        <div class="list-content-item">
          <span>开始时间</span>
          <p>{{ items.startAt }}</p>
        </div>
        <div class="list-content-item">
          <a-progress
            :percent="items.progress.value"
            :status="!items.progress.status ? null : items.progress.status"
            style="width: 180px"
          />
        </div>
      </div>
    </a-list-item>
        <slot name="temp">默认内容</slot>
  </a-list>
</template>

<script>
export default {
  name: 'TestC',
  components: {},
  props: ['datass', 'item'],
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="less" scoped>
</style>
