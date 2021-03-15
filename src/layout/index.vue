<template>
  <el-container class="site-content-container">
    <Aside />
    <Main />
  </el-container>
</template>

<script>
// import { mapActions } from 'vuex';
import Main from './main';
import Aside from './aside';
export default {
  name: 'Layout',
  components: {
    Aside,
    Main,
  },
  // methods: {
  //   ...mapActions({
  //     initCategory: 'product/initCategory'
  //   })
  // },
  mounted() {
    // this.initCategory();
  }
}
</script>

<style>

</style>