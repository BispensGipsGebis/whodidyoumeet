<template>
  <div class="page-container">
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Who Did You Meet?</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Inbox</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>
      <md-app-content>
        <div class="md-layout">
          <div class="md-layout-item md-size-5 bg-color"></div>
          <div class="md-layout-item">
            <router-view/>
          </div>
          <div class="md-layout-item md-size-5 bg-color"></div>
      </div>
      </md-app-content>
    </md-app>
  </div>
</template>
<script>

export default {
  name: 'App',
  data: () => ({
    menuVisible: false
  })
}
</script>

<style lang="scss" scoped>

.bg-color {
  background-color: #888;
}
   // Demo purposes only
  .md-drawer {
    width: 230px;
    background-color: #fff;
    max-width: calc(100vw - 125px);
  }
</style>
