<template>
  <div>
      <div>个人中心：</div>
      <div>尊敬的用户您好!</div>
      <div>用户身份：管理员</div>
      <a class="admin" href="/admin">进入管理页面</a>
      <p class="btn" @click="handleToLogout">退出</p>
  </div>
</template>

<script>
export default {
    name: 'center',
    methods: {
      handleToLogout() {
        this.$router.push('/mine/login')
      }
    },
    mounted() {
      console.log()
    }
}
</script>

<style scoped>
.admin {
  display: inline-block;
  width: 115px;
  height: 26px;
  background-color: #e54847c9;
  line-height: 23px;
  text-align: center;
  border-radius: 5px;
  color: white;
  text-decoration:none;
  margin-top: 10px;
}
.btn {
  margin-left: 10px;
  margin-top: 10px;
  display: inline-block;
  width: 48px;
  height: 26px;
  background-color: #e54847c9;
  line-height: 23px;
  text-align: center;
  border-radius: 5px;
  color: white;
}
</style>