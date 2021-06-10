// 实例化弹窗模块，配置弹窗模块各种信息
import Vue from 'vue';
import MessageBox from './MessageBox';

export var messageBox = (function () {
  //默认值
  var defaults = {
    title: '',
    content: '',
    cancel: '',
    ok: '',
    handleCancel: null,
    handleOk: null
  }

  var Mycomponent = Vue.extend(MessageBox);

  return function (opts) { //调用时传入的配置对象参数
    for (var attr in defaults) {
      defaults[attr] = opts[attr];
    }
    //为弹窗模块实例化子vue构造函数
    var vm = new Mycomponent({
        el: document.createElement('div'),
        data: {
            title: defaults.title,
            content: defaults.content,
            cancel: defaults.cancel,
            ok: defaults.ok
        },
        methods: {
            handleCancel: function() {
                opts.handleCancel.call(this);
                document.body.removeChild(vm.$el);
            },
            handleOk: function() {
                opts.handleOk.call(this);
                document.body.removeChild(vm.$el);
            }
        }

    });
    document.body.appendChild(vm.$el);
    
  }
})()
