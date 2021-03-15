<template>
  <div class="site-top-menu">
    <div class="menu-item">
      <MenuButton iconClass="el-icon-user-solid" menuName="客户管理" />
    </div>
    <div class="menu-item">
      <MenuButton iconClass="el-icon-user" menuName="企业管理" />
    </div>
    <div class="menu-item">
      <MenuButton iconClass="el-icon-s-tools" menuName="系统" />
    </div>
  </div>
</template>

<script>
import MenuButton from '@/components/MenuButton';
export default {
  name: 'TopMenu',
  components: {
    MenuButton
  },
}
</script>

<style lang="scss" scoped>
.site-top-menu{
  display: flex;
  .menu-item {
    padding: 0 .7rem;
    cursor: pointer;
    &:hover {
      background-color: #eee;
    }
  }
}


</style>