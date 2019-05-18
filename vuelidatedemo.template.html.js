module.exports = (url) => {
    return `
    <html>
    <head>
        <link rel = "stylesheet" href="/styles/forms.css">
    </head>
    <body>
        <div id = "app">
            <form @submit.prevent = "submitForm">
                <div class = "formblock">
                    <span>
                        Name
                    </span>
                    <input type="text" v-model = "form.name">
                    <p v-if = "$v.form.name.$invalid" :class="{red:true}">name is required</p>
                </div>
                <div class = "formblock">
                    <span>
                        Age
                    </span>
                    <input type="text" v-model = "form.age">
                    <p>
                        <span v-if = "$v.form.age.integer && !$v.form.age.between" :class="{red:true}">Please enter an age between 18 and 120</p>
                        <span v-if = "!$v.form.age.integer" :class="{red:true}">Age must be an integer</p>
                        <span v-if = "!$v.form.age.required">Age is required</span>
                    </p>
                </div>
                <div class = "formblock">
                    <button :disabled = "$v.form.$invalid" class = "submitBtn">Submit</button>
                </div>
            </form>
        </div>
        <script src="${url}"">
        </script>
        <script src="/libs/vuelidate.min.js">
        </script>
        <script src="/libs/validators.min.js">
        </script>
        <script src="vuelidate.index.js">
        </script>
    </body>
    </html>
    `
}
