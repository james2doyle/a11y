import Vue from 'vue';
import App from 'Root/App.vue';
import router from 'Root/router';

Vue.config.productionTip = process.env.NODE_ENV === 'development';

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

export default app;
