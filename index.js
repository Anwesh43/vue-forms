const vueInstance = new Vue({
    el : '#app',
    data : {
        form : {
            name : 'RandomName',
            age : 10
        },
        formValidityText : '',
        isFormValid : false,
        isAgeValid : true,
        isNameValid : true
    },

    methods : {
        submitForm(event) {
            event.preventDefault()
            const {name, age} = this.form
            this.isSubmitted = true
            this.isNameValid = !!name
            console.log(typeof(age))
            this.isAgeValid = typeof(age) === "number" && age >= 18 && age <= 120
            this.isFormValid = this.isNameValid && this.isAgeValid
            if (this.isFormValid) {
                this.formValidityText = 'Valid form'
            } else {
                this.formValidityText = 'Invalid form'
            }
        },
        resetFormValidityText() {
            this.formValidityText = ''
        }
    }
})
