import { ref, computed } from "vue";
export default {
  setup(__props, { expose }) {
    expose();
    const count = ref(1);
    const doubleCount = computed(() => {
      return count.value * 2;
    });
    const plus = () => { count.value += 1; };
    const reduce = () => { count.value -= 1; };
    const __returned__ = { count, doubleCount, plus, reduce, ref, computed }
    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
    return __returned__
  }
}