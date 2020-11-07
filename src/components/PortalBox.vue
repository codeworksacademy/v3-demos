<template>
  <Teleport :to="'#'+box.team" v-if="box.team">
    <div class="box" :class="box.team" @click="changeTeam">
      {{ box.id }}
    </div>
  </Teleport>
  <div class="box" :class="box.team" @click="changeTeam" v-else>
    {{ box.id }}
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  props: {
    box: { type: Object, required: true },
    teams: { type: Array, default: () => [] }
  },
  setup() {
    const state = reactive({
      person: {},
      people: [{}]
    })

    return {
      state
    }
  },
  methods: {
    changeTeam() {
      const openTeams = this.teams.filter(t => t !== this.box.team)
      // eslint-disable-next-line vue/no-mutating-props
      this.box.team = openTeams[~~(Math.random() * openTeams.length)]
    }
  }
}

</script>

<style scoped lang="scss">
.box {
  height: 45%;
  width: 45%;
  min-height: 125px;
  min-width: 125px;
  border: 1px solid var(--dark);
  background: rgba(0,0,0,.6);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  position: relative;
  transition: all .3s ease;
  cursor: pointer;
  user-select: none;
  border-radius: 5rem;
  &.red-team{
    background: rgba(255, 0, 0, .3);
    border-color: #ff0000;
  }
  &.blue-team{
    background: rgba(0, 217, 255, 0.2);
    border-color: rgb(0, 217, 255)
  }
  &.green-team{
    background: rgba(0, 255, 149, 0.2);
    border-color: rgb(0, 255, 149);
  }
  &.purple-team{
    background: rgba(255, 0, 234, 0.2);
    border-color: rgba(255, 0, 234);
  }
}
</style>
