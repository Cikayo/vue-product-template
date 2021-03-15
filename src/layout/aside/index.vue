<template>
  <el-aside width="200px" class="site-layout-aside">
    <Logo />
    <el-menu
      unique-opened
      :default-active="activeMenu" 
      :collapse-transition="false"
      background-color="#304156" 
      text-color="#fff" 
      active-text-color="#ffd04b">
      <SidebarItem v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path" />
    </el-menu>
  </el-aside>
</template>

<script>
/**
 * 页面左侧导航
 */
import { mapGetters } from 'vuex';
import Logo from '@/components/Logo';
import SidebarItem from './SidebarItem'
export default {
  name: 'Aside',
  components: {
    Logo,
    SidebarItem
  },
  computed: {
    ...mapGetters([
      'permission_routes'
    ]),
    activeMenu() {
      const route = this.$route;
      const { path } = route;
      return path
    }
  },
  mounted() {
    console.log(this.permission_routes)
  }
}
</script>

<style lang="scss">
.site-layout-aside{
  background-color: #304156;
  .el-menu{
    border-right: none;
  }
}
</style>