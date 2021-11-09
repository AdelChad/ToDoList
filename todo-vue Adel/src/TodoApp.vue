<template>
  <div class="TodoApp">
    <MonFormulaire :tasks="tasks"></MonFormulaire>
    <VTask v-for="task in tasks" :key="task.id" :task='task' @delete='onDelete'></VTask>
  </div>
</template>

<script>
import MonFormulaire from './components/VForm.vue'
import VTask from './components/VTask.vue'
export default {
  name: 'TodoApp',
    data() {
        return {
            tasks :[]
        }
    },

  components: {
    MonFormulaire,
    VTask
  },

  methods:{
    onDelete(index){
      const id = this.tasks.findIndex((task) => task.id === index)
      this.tasks.splice(id,1)
    }
  }
}
</script>

<style scoped>
  .TodoApp {
    /* background-color: red; */
  }
</style>