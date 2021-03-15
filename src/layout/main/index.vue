<template>
  <el-container direction="vertical">
    <Header />
    <el-main>
      <router-view  />
    </el-main>
  </el-container>
</template>

<script>
import Header from '../header';
export default {
  name: 'Main',
  components: {
    Header
  }
}
</script>

<style>

</style>