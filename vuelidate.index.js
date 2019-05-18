Vue.use(vuelidate.default)

const vueInstance = new Vue({
    el : '#app',
    data : {
        form : {
            name : null,
            age : null,
        }
    },
    validations : {
        form : {
            name : {
                required : validators.required
            },
            age : {
                required : validators.required,
                integer : validators.integer,
                between : validators.between(18, 120)
            }
        }
    },

    computed : {

    },

    methods : {
        submitForm() {
            const {name, age} = this.form
            console.log(`${name}, ${age}`)
            console.log(this.$v.form.$invalid)
        }
    }
})
