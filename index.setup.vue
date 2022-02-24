<template>
  <h1>{{msg}}</h1>
  <p>count: {{ count }}</p>
  <p>double count: {{ doubleCount }}</p>
  <button v-on:click="plus">增加</button>
  <button v-on:click="reduce">减少</button>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  msg: String
});

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
</script>

<style scoped>
p {
  color: v-bind(color);
}
</style>