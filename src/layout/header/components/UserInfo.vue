<template>
  <div class="site-user-info">
    欢迎你，
    <el-dropdown trigger="click">
      <div class="el-dropdown-link">
        {{user_name}}<i class="el-icon-arrow-down el-icon--right"></i>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="handleLogout">
          <span>退出登录</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { handleShowMessage } from '@/utils/common';
export default {
  name: 'UserInfo',
  computed: {
    ...mapGetters(['user_name'])
  },
  methods: {
    ...mapActions({
      'logout': 'user/logout'
    }),
    handleLogout() {
      this.logout().then((res) => {
        if(res.code === 20000) {
          handleShowMessage('退出成功', 'success');
          this.$router.push('/login');
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.site-user-info {
  font-size: 14px;
  .el-dropdown-link {
    padding: 0 .5rem;
    cursor: pointer;
    &:hover {
      background-color: #f2f2f2;
    }
  }
}
</style>