const list = document.querySelector('.list-a-faire')

function addTask(data) {
    const task = new Task(data)

    console.log(data)
}



const form = document.querySelector('.formulaire')
const todoForm = new TodoForm(form, addTask)