<template>
  <div id="app">
    <header>
      <Navbar />
    </header>
    <main>
      <RouterView />
    </main>
    <footer></footer>
  </div>
</template>

<script>
import Navbar from '@/components/navbar'
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: {
    Navbar
  }
}
</script>
<style lang="scss">
@import "./assets/_variables.scss";
@import "bootstrap";
@import "./assets/_overrides.scss";

#app{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
main{
  flex-grow: 1;
}

</style>
