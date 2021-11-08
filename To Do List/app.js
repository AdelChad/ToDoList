const list = document.querySelector('.list-a-faire')

function addTask(data) {
    localStorage.setItem(data.title,JSON.stringify(data))
    const task = new Task(data)

    console.log(data)
}

function getAllItems() {

    var archive = {}
    keys = Object.keys(localStorage)
    i = keys.length;

    while ( i-- ) {
        archive[keys[i]] = localStorage.getItem( keys[i] );
        console.log(JSON.parse(archive[keys[i]]).title);
        const data = {
            title: JSON.parse(archive[keys[i]]).title,
            lieu: JSON.parse(archive[keys[i]]).lieu,
            heure:JSON.parse(archive[keys[i]]).heure,
            description: JSON.parse(archive[keys[i]]).description,
            difficulte:JSON.parse(archive[keys[i]]).difficulte,
            isActive:JSON.parse(archive[keys[i]]).isActive,
        }
        new Task(data)
    }
}


getAllItems()
const form = document.querySelector('.formulaire')
const todoForm = new TodoForm(form, addTask)