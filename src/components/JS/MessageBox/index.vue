// 定位弹窗模块
<template>
  <div class="messageBox">
    <h2>{{title}}</h2>
    <p>{{content}}</p>
    <div>
      <div @click="handleCancel">{{cancel}}</div>
      <div @click="handleOk">{{ok}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageBox"
};
</script>

<style scoped>
.messageBox {
  width: 200px;
  height: 120px;
  border: 1px solid #ccc;
  border-radius: 13px;
  background-color: white;
  box-shadow: 1px 1px 1px 1px #ccc;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.messageBox h2 {
  text-align: center;
  line-height: 40px;
  font-size: 18px;
}
.messageBox p {
  text-align: center;
  line-height: 40px;
}
.messageBox > div {
  display: flex;
  position: absolute;
  bottom: 0xp;
  width: 100%;
  border-top: 1px solid #ccc;
}
.messageBox > div div {
  flex: 1;
  text-align: center;
  line-height: 30px;
  border-right: 1px solid #ccc;
}
.messageBox > div div:last-child {
  border: none;
}
</style>
