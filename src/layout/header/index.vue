<template>
  <el-header height="50px" class="site-loayout-header">
    <UserInfo />
  </el-header>
</template>

<script>
/**
 * 页面头部
 */
import UserInfo from './components/UserInfo';
export default {
  name: 'Header',
  components: {
    UserInfo,
  }
}
</script>

<style>
.site-loayout-header{
  position: relative;
  z-index: 1;

  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  
  display: flex;
  justify-content: flex-end;
  
  line-height: 50px;
  overflow: hidden;
}
</style>