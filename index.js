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
    },

    computed : {
        isInvalidAge() {
            return this.form.age > 120 || this.form.age < 18
        },

        isNameTooLong() {
            return this.form.name.length > 100
        },

        isFormValidCompute() {
            const {name, age} = this.form
            console.log(this.isNameTooLong)
            var isNameValid = !!name && !this.isNameTooLong
            console.log(typeof(age))
            var isAgeValid = typeof(age) === "number" && age >= 18 && age <= 120
            console.log(`nameValid, ageValid: ${isNameValid}, ${isAgeValid}`)
            return isNameValid && isAgeValid
        }
    }
})
