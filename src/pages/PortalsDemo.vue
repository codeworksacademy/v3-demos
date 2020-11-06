<template>
  <div>
    <div class="d-flex">
      <div class="m-1" v-for="box in state.boxes" :key="box.id">
        <PortalBox :box="box" :teams="state.teams" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, reactive, ref } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'

const boxes = ref([
  { id: 1, team: '' },
  { id: 2, team: '' },
  { id: 3, team: '' },
  { id: 4, team: '' }
])

let teamsNode = null

onMounted(() => {
  teamsNode = document.getElementById('teams')
  teamsNode.classList.remove('d-none')
  document.body.style.backgroundImage = 'url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fc6624cd-db8b-41cc-9e29-e21d7e5a52bb/d91kpch-c4758505-6cfc-4787-9659-c949a0faa61e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZmM2NjI0Y2QtZGI4Yi00MWNjLTllMjktZTIxZDdlNWE1MmJiXC9kOTFrcGNoLWM0NzU4NTA1LTZjZmMtNDc4Ny05NjU5LWM5NDlhMGZhYTYxZS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.-0kLpjL5QTgpVnOsmg0Fj8bWDukXMEsAaEv-TfI6cdc)'
})
onBeforeRouteLeave(() => {
  document.body.style.backgroundImage = ''
  teamsNode.classList.add('d-none')
})

export const state = reactive({
  boxes: computed(() => boxes.value),
  teams: ['red-team', 'blue-team', 'green-team', 'purple-team']
})
</script>
