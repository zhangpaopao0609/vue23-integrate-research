<template>
  <div>
    <h1>Todomvc</h1>
    <Todomvc />
    <br />
    <!-- <h1>Input</h1> -->
    <!-- <TdInput v-model="userInput"  placeholder='我是张跑跑'/> -->
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { Todomvc, TdInput } from "tdesign";
const userInput = ref('')

watch(userInput, () => {
  console.log(userInput.value);
})

</script>