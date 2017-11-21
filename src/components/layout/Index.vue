<template>
  <div>
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <div class="main">
      <div class="container-fluid">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '@/layout/Header'
import Sidebar from '@/layout/Sidebar'

export default {
  components: {
    'app-header': Header,
    'app-sidebar': Sidebar
  }
}
</script>
<style>
</style>
