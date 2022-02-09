import { render } from "./index.vue?vue&type=template&id=6de5ab34&scoped=true"
import script from "./index.vue?vue&type=script&setup=true&lang=js"
export * from "./index.vue?vue&type=script&setup=true&lang=js"

import "./index.vue?vue&type=style&index=0&id=6de5ab34&scoped=true&lang=css"

import exportComponent from "/Users/zhanglu/Desktop/workspace/Github/vue-loader-demo/node_modules/vue-loader/dist/exportHelper.js"
const __exports__ = /*#__PURE__*/exportComponent(script, [['render',render],['__scopeId',"data-v-6de5ab34"],['__file',"index.vue"]])
/* hot reload */
if (module.hot) {
  __exports__.__hmrId = "6de5ab34"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('6de5ab34', __exports__)) {
    api.reload('6de5ab34', __exports__)
  }
  
  module.hot.accept("./index.vue?vue&type=template&id=6de5ab34&scoped=true", () => {
    api.rerender('6de5ab34', render)
  })

}


export default __exports__