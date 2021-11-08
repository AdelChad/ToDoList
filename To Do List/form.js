class TodoForm {
    constructor (form, callback) {
        this.form = form
        this.title = form.querySelector('.titre')
        this.lieu = form.querySelector('.lieu')
        this.heure = form.querySelector('.heure')
        this.description = form.querySelector('.description')
        this.difficulte = null
     
        this.callback = callback

        console.log(this.form);
        this.addListeners()
    }

    addListeners() {
        this.form.addEventListener('submit', this.onSubmit.bind(this))
    }

    onSubmit(event){
        event.preventDefault()
        this.difficulte = form.querySelector('.btn:checked')
        const result = {
            title: this.title.value,
            lieu: this.lieu.value,
            heure: this.heure.value,
            description : this.description.value,
            difficulte : this.difficulte.value
        }

        this.callback(result)
    }
}