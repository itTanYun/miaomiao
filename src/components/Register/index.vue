<template>
  <div class="register_body">
    <div class="register_email">
      邮箱：<input type="text" class="register_text" v-model="email" />
      <button @click="handleToVerify">
        发送验证码
      </button>
    </div>
    <div>
      用户名：<input type="text" class="register_text" v-model="user" />
    </div>
    <div>
      密码：<input type="password" class="register_text" v-model="password" />
    </div>
    <div>
      确认密码：<input
        type="password2"
        class="register_text"
        v-model="password2"
      />
    </div>
    <div>
      验证码：<input type="text" class="register_text" v-model="verify" />
    </div>
    <div class="register_btn">
      <button @click="handleToRegister">注册</button>
    </div>
    <div class="register_link">
      <router-link to="/mine/login" href="#">立即登录</router-link>
      <router-link to="/mine/findPassword" href="#">修改密码</router-link>
    </div>
  </div>
</template>

<script>
import { messageBox } from "@/components/JS";

export default {
  name: "register",
  data() {
    return {
      email: "",
      user: "",
      password: "",
      password2: "",
      verify: ""
    };
  },
  methods: {
    handleToRegister() {
      var that = this;
      var judge =
        this.email &&
        this.user &&
        this.password &&
        this.password2 &&
        this.verify;
      if (judge) {
        messageBox({
          title: "注册",
          content: "注册成功",
          ok: "确定",
          handleOk() {
            that.$router.push('/mine/login')
          }
        });
      } else {
        messageBox({
          title: "注册",
          content: "你的信息未填写完成",
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

<style scoped>
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
