import { useCssVars as _useCssVars, unref as _unref } from 'vue'
import { ref, computed } from "vue";


export default {
  props: {
    msg: String
  },
  setup(__props, { expose }) {
    expose();

    const props = __props

    _useCssVars(_ctx => ({
      "6de5ab34-color": (color)
    }))



    const count = ref(1);
    const color = 'red';
    const doubleCount = computed(() => {
      return count.value * 2;
    });

    const plus = () => {
      count.value += 1;
    };

    const reduce = () => {
      count.value -= 1;
    };

    const __returned__ = { props, count, color, doubleCount, plus, reduce, ref, computed }
    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
    return __returned__
  }

}