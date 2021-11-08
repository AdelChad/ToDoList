const list = document.querySelector('.list-a-faire')

function addTask(data) {
    const task = document.createElement("div")
    task.classList.add("task");
    const inner = /*html*/ `
    <div class="task__infos">
                <input type="checkbox"><div class="titreTask">${data.title}</div>
                 <p class="lieuTask">${data.heure} - ${data.lieu}</p>
                 <p class="descriptionTask">${data.description}</p>
    </div>`;
    task.innerHTML = inner;

    list.append(task);

    console.log(data)

    //const task = new Task(data)
}

const form = document.querySelector('.formulaire')
const todoForm = new TodoForm(form, addTask)