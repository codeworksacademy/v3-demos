<template>
  <!--
    Multiple root elements
    are called fragments and
    work just fine in vue 3
    -->
  <div>
    {{ state.person.name }}
  </div>
  <div>
    <input v-model="state.person.name">
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  emits: ['something'],
  setup(props, { emit }) {
    // use a single reactive object to wrap local component data
    const state = reactive({
      person: { name: 'Jimmy' }
    })

    emit('something', 'string')
    return {
      state
    }
  }
}
</script>
