import { ref, computed } from "vue";

const __default__ = {
  setup(props) {
    const count = ref(1);
    const color = ref('ref');
    const doubleCount = computed(() => {
      return count.value * 2;
    });

    const plus = () => {
      count.value += 1;
    };

    const reduce = () => {
      count.value -= 1;
    };

    return {
      count,
      doubleCount,
      plus,
      reduce,
      color,
    }
  },
};

import { useCssVars as _useCssVars } from 'vue'
const __injectCSSVars__ = () => {
  _useCssVars(_ctx => ({
    "6de5ab34-color": (_ctx.color)
  }))
}
const __setup__ = __default__.setup
__default__.setup = __setup__
  ? (props, ctx) => { __injectCSSVars__(); return __setup__(props, ctx) } : __injectCSSVars__

export default __default__