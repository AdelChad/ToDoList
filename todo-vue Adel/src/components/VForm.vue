<template>
    <div class ="bg-gray-100 w-1/6 m-auto mt-20">
    <form class ="formulaire" @submit.prevent="onSubmit">
        <p class ="ml-32">Titre</p>
        <input type="text" class ="ml-16" name ="titre" v-model="form.title">
        <p class ="ml-32">Lieu</p>
        <input type="text" class ="ml-16" name="lieu" v-model="form.lieu">
        <p class ="ml-32">Heure</p>
        <input type="time" class ="ml-28" name="heure" v-model="form.heure">
        <p class ="ml-28">Description</p>
        <input type="text" class ="ml-16" name="description" v-model="form.description">
        <br><br>
        <div class ="ml-32" name="urgence" v-model="form.urgence">
            <input class="btn btn-normal" type="radio" name="drone" value="normal">
            <input class="btn btn-vite" type="radio" name="drone" value="vite">
            <input class="btn btn-urgent" type="radio" name="drone" value="urgent">
        </div>
        <br>
        <button class ="ml-14 bg-blue-100 px-8 mb-2 rounded-md" type="submit">Ajouter une tache</button>
    </form>
    </div>
</template>

<script>

export default {
    props:['tasks'],
    data() {
        return {
            id:0,
            form: {
                title: null,
                lieu: null,
                heure: null,
                description: null,
                urgence: null
            }
        } 
    },

    mounted(){
        console.log(this.tasks);
    },

    methods: {
        onSubmit(event){
            const task = {
                ...this.form,
                id: this.id,
            }
            this.tasks.push(task)

            this.id++
        }
    }
}

</script>