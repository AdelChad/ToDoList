class Task {
    constructor(data){
        this.data = data

        this.template = this.createTemplate()

        this.$title = this.template.querySelector('.titreTask')
        this.$info = this.template.querySelector('.task__infos')
        this.$chek = this.template.querySelector('.fait')
        this.$suppr = this.template.querySelector('.suppr')
        this.addListeners()
    }



    createTemplate(){
        const task = document.createElement("div")
        task.classList.add("task");
        const inner = /*html*/ `
        <div class="task__infos">
                    <input type="checkbox" class = "fait">
                    <h1 class="titreTask">${this.data.title}</h1>
                    <p class="lieuTask">${this.data.heure} - ${this.data.lieu}</p>
                    <p class="descriptionTask">${this.data.description}</p>
                    <button class="suppr">delet</button>
        </div>`;

        if(this.data.difficulte == "normal"){
            this.color = 'white'
        }
        else if(this.data.difficulte== "vite"){
            this.color = 'orange'
        }
        else {
            this.color = 'red'
        }

        task.innerHTML = inner;

        task.lastElementChild.style.setProperty('--color', `${this.color}`)

        list.append(task);

        return task
    }

    addListeners(){   
        this.$suppr.addEventListener('click', this.taskDelet.bind(this))
        this.$chek.addEventListener('change', this.taskFait.bind(this))
    }

    taskFait(event){
        if(event.target.checked){
            this.$info.style.setProperty('--color', `blue`)
            this.template.style.opacity = 0.5
            this.$title.style.textDecoration = "line-through"
        }
        else{
            this.$info.style.setProperty('--color', `${this.color}`)
            this.template.style.opacity = 1
            this.$title.style.textDecoration = ""
        }
    }

    taskDelet(){
        this.template.style.display = "none"
    }
}