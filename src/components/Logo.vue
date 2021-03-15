<template>
  <div class="site-logo">
    <img class="site-logo-img" :src="logoImgUrl" alt="logo">
  </div>
</template>

<script>
/**
 * 登录组件
 */
import logoUrl from '@/assets/logo.jpg';
export default {
  name: 'Logo',
  data() {
    return {
      logoImgUrl: logoUrl,
    }
  }
}
</script>

<style lang="scss" scoped>
.site-logo {
  height: 50px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  .site-logo-img {
    height: 40px;
  }
}
</style>