class Task { 
    constructor(data){
        this.data = data

        this.template = this.createTemplate()
        this.$title = this.template.querySelector('.titreTask')
        this.$info = this.template.querySelector('.task__infos')
        this.$chek = this.template.querySelector('.fait')
        this.$suppr = this.template.querySelector('.suppr')
        this.isActive = true
        this.addListeners()
    }



    createTemplate(){
        const task = document.createElement("div")
        let localStoragetask = JSON.parse(localStorage.getItem(this.data.title))
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

        //je n'ai pas reussi a selectionne les bonne div cependant j'aimerais attribué ce css a ma task lors de son initialisation ce qui lui permettrais d'etre grisé et barré si le isActive du localStorage est coché
        //if (localStoragetask.isActive == false){
            //this.$info.style.setProperty('--color', `blue`)
            //this.template.style.opacity = 0.5
            //this.$title.style.textDecoration = "line-through" 
        //}
        return task
    }

    addListeners(){   
        this.$suppr.addEventListener('click', this.taskDelet.bind(this))
        this.$chek.addEventListener('change', this.taskFait.bind(this))
    }

    taskFait(event){
        let task = JSON.parse(localStorage.getItem(this.data.title))
        if(event.target.checked){
            this.$info.style.setProperty('--color', `blue`)
            this.template.style.opacity = 0.5
            this.$title.style.textDecoration = "line-through"
            this.isActive = false
            task.isActive = false
            localStorage.setItem(this.data.title, JSON.stringify(task))
        }
        else{
            this.$info.style.setProperty('--color', `${this.color}`)
            this.template.style.opacity = 1
            this.$title.style.textDecoration = ""
            this.isActive = true
            task.isActive = true
            localStorage.setItem(this.data.title, JSON.stringify(task))
        }
    }

    taskDelet(){
        this.template.style.display = "none"
        localStorage.removeItem(this.data.title)
    }
}