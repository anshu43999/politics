import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import axios from "axios";
import store from "./store/index";

Vue.config.productionTip = false


Vue.prototype.apiRoot = 'http://education.ityyedu.com/binheSportSystem/'

axios.defaults.headers.common["Authorization"] = store.getters.Token; //附加授权token如果失败尝试axios.interceptors.request
axios.defaults.transformRequest = [
  function(data) {
    //数据发送前的转译可按需修改
    let ret = "";
    for (let it in data) {
      ret += encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
    }
    return ret;
  }
];
// 请求拦截器
// axios.interceptors.request.use(function (response) {
// 	if (store.getters.Token) {
// 	  response.headers.Authorization= store.getters.Token
// 	}
//     return response;
// }, function (error) {
// //	console.log(error)
//     return Promise.reject(error);
// });
//返回数据拦截器
// axios.interceptors.response.use(function (response) {
// //约定了返回指定代码用户需要清空登录数据并重新登录
// 	if(response.data.code==1000000){
// 		store.state.userName='';
// 		sessionStorage.removeItem('userName');
// 		app.$router.push({ path: '/login'});
// 	}
// 	if(response.data.access=='unauthorized'){
//         throw "你没有权限进行此项操作！！！";
// 	}
//     return response;
// }, function (error) {
// //			this.$router.replace({path: '/403'})
//     return Promise.reject(error);
// });




Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
