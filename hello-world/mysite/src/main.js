// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// using components allows you to reuse sections/parts/code for different areas
// for instance, if you create a 'Header' component and that particular 'component'
// is used multiple times, then you just have to create the Header component once in a 
// separate .vue file and then nest and import that component for those sections

/* this is how you nest a component, in this case Ninja, globally
import Ninjas from './Ninjas.vue'
Vue.component('ninjas', Ninjas);
nesting globally allows you to nest that component with other components
if you want to nest a component locally, then you have to import Ninja in App.vue  */

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // the root component, App, is being rendered here; the root is given to us
  // that is why when you just create a new project, the site looks like 
  // what it looks like
  render: h => h(App),
  components: { App },
  template: '<App/>'
})
