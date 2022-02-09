<template>
  <p>count: {{ count }}</p>
  <p>double count: {{ doubleCount }}</p>
  <button v-on:click="plus">增加</button>
  <button v-on:click="reduce">减少</button>
</template>

<script>
import { ref, computed } from "vue";

export default {
  setup (props) {
    

const count = ref(1);
const doubleCount = computed(() => {
  return count.value * 2;
});

const plus = () => {
  count.value += 1;
};

const reduce = () => {
  count.value -= 1;
};
  }
}
</script>

<script setup>

</script>

<style scoped>
p {
  color: red;
}
</style>