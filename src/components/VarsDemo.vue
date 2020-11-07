<template>
  <p class="js-driven-color" @click="toggleColor()">
    CLICK HERE TO CHANGE MY COLOR
  </p>
</template>

<script setup>
import { ref } from 'vue'
export const color = ref('red')
export function toggleColor() {
  color.value = color.value === 'red' ? 'blue' : 'red'
}
</script>

<style vars={color}>

.js-driven-color{
  color: var(--color);
  user-select: none;
  cursor: pointer;
}
</style>
