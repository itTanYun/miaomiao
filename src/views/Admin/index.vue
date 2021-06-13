<template>
  <div>
    <div class="header" @click="handleToHome">喵喵后台管理</div>
    <div class="footer" style="height:50px" @click="handleToHome">返回主页</div>
  </div>
</template>

<script>
export default {
  methods: {
    handleToHome() {
      this.$router.push("/movie");
    }
  }
};
</script>

<style scoped>
.header {
  background-color: #f56c6c;
  color: white;
  text-align: center;
  line-height: 60px;
}

.footer {
  line-height: 291%;
  text-align: center;
  color: white;
  width: 150px;
  border-radius: 100px;
  background-color: #f56c6c;
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
