<template>
  <div class="register_body">
    <div>
      用户名：<input type="text" class="register_text" v-model="user" />
    </div>
    <div>
      旧密码：<input
        type="password"
        class="register_text"
        v-model="oldPassword"
      />
    </div>
    <div>
      新密码：<input
        type="password"
        class="register_text"
        v-model="newPassword"
      />
    </div>
    <div>
      确认新密码：<input
        type="password"
        class="register_text"
        v-model="newPassword2"
      />
    </div>
    <div class="register_btn" @click="handleToReset"><button>修改</button></div>
  </div>
</template>

<script>
import { messageBox } from '@/components/JS';

export default {
  name: "findPassword",
  data() {
    return {
      user: "",
      oldPassword: "",
      newPassword: "",
      newPassword2: ""
    };
  },
  methods: {
    handleToReset() {
      var that = this;
      var judge =
        this.user &&
        this.oldPassword &&
        this.newPassword &&
        this.newPassword2;
      if (judge) {
        messageBox({
          title: "重置密码",
          content: "修改密码成功",
          ok: "确定",
          handleOk() {
            that.$router.push("/mine/login");
          }
        });
      } else {
        messageBox({
          title: "重置密码",
          content: "修改密码失败",
          ok: "确定",
          handleOk() {}
        });
      }
    },
    handleToVerify() {
      messageBox({
        title: "验证码",
        content: "验证码已发送",
        ok: "确定",
        handleOk() {}
      });
    }
  }
};
</script>

<style>
.register_body {
  width: 100%;
}
.register_body .register_text {
  width: 100%;
  height: 40px;
  border: none;
  border-bottom: 1px #ccc solid;
  margin-bottom: 5px;
  outline: none;
  text-indent: 10px;
}
.register_body .register_btn {
  height: 50px;
  margin: 10px;
}
.register_body .register_btn button {
  width: 100%;
  height: 100%;
  background: #e54847;
  border-radius: 3px;
  border: none;
  display: block;
  color: white;
  font-size: 20px;
}
.register_body .register_link {
  display: flex;
  justify-content: space-between;
}
.register_body .register_link a {
  text-decoration: none;
  margin: 0 5px;
  font-size: 12px;
  color: #e54847;
}
.register_email button {
  position: absolute;
  right: 10px;
  top: 10px;
  height: 30px;
  border-radius: 3px;
  border: none;
  padding: 5px;
}
</style>
