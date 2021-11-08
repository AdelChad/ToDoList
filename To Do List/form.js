class TodoForm {
    constructor (form, callback) {
        this.form = form
        this.title = form.querySelector('.titre')
        this.lieu = form.querySelector('.lieu')
        this.heure = form.querySelector('.heure')
        this.description = form.querySelector('.description')

        this.callback = callback

        console.log(this.form);
        this.addListeners()
    }
    addListeners() {
        this.form.addEventListener('submit', this.onSubmit.bind(this))
    }
    onSubmit(event){
        event.preventDefault()
        const result = {
            title: this.title.value,
            lieu: this.lieu.value,
            heure: this.heure.value,
            description : this.description.value
        }

        this.callback(result)
    }
}