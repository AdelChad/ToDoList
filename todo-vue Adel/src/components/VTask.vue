<template>
  <div class ="ml-96 bg-purple-100 w-1/3 rounded-md mt-2" :class="`task-${completed}`" @click="onClick">
    <div class="task__content">
      <h2 class="ml-28">{{ task.title }}</h2>
      <p class="ml-28 mt-6">{{ task.lieu }} - {{ task.heure }}</p>
      <p class="ml-28 mt-2">{{ task.description }}</p>
      <p class="ml-28">{{ task.urgence }}</p>
    </div>
    <button class="bg-gray-100 w-14 h-14 rounded-full ml-6 mb-4 mt-4" @click.stop="onDelete()">X</button>
  </div>
</template>

<script>
export default {
  props:['task'],

  data(){
    return{
      completed: false
    }
  },

  methods: {
    onClick(){
      console.log('completed')
      this.completed = !this.completed
    },

    onDelete(){ 
      this.$emit('delete',this.task.id)
    }
  }

}
</script>

<style scoped>
.task{
  margin: 12px;
}

.task.task-true{
  opacity: 0.5;
}


.task.task-true .task__title{
  text-decoration: line-through;
}
</style>