module.exports = (url) => {
    const template = `<body>
        <div id="app">
            <form @submit = "submitForm">
                <div>
                    <span>Name</span>
                    <input type="text" v-model = "form.name" @keydown = "resetFormValidityText">

                    <span v-if="!isNameValid">Please enter a name</span>
                </div>
                <div>
                <span>Age</span>
                <input type="text" v-model.number = "form.age" @keydown = "resetFormValidityText">
                <span v-if="!isAgeValid">Please enter an age from 18 to 120</span>
                </div>
                <div>{{formValidityText}}</div>
                <button>submit</button>
            </form>
        </div>
        <script src="${url}">
        </script>
        <script src="index.js">
        </script>
    </body>`
    return template
}
