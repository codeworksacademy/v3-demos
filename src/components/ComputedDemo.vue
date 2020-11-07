<template>
  <div>
    {{ profile }}
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { AppState } from '../AppState'

// Watches an external reactive object for changes: triggers DOM Render
export const profile = computed(() => AppState.profile)
</script>
