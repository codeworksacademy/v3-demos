<template>
  <div class="home">
    <h1>Welcome {{ profile.name.fullname }}</h1>
    <button @click="clickme">
      click me
    </button>
    <VarsDemo />
    <ReactiveDemo />
    <ComputedDemo />
  </div>
</template>

<script>
import { AppState } from '../AppState'

export default {
  name: 'Home',
  computed: {
    profile() {
      return AppState.profile
    }
  },
  methods: {
    async clickme() {
      await AppState.services.profileService.getProfile()
    }
  }
}
</script>
