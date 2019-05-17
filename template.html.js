module.exports = (url) => {
    const template = `<body>
        <div id="app">
            <form @submit = "submitForm">
                <div>
                    <span>Name</span>
                    <input type="text" v-model = "form.name" @keydown = "resetFormValidityText">
                    <span v-if="isNameTooLong" :style = "{color : 'red'}">Name is too long</span>
                    <span v-if="!isNameValid">Please enter a name</span>
                </div>
                <div>
                <span>Age</span>
                <input type="text" v-model.number = "form.age" @keydown = "resetFormValidityText">
                <span v-if="isInvalidAge">Please enter an age from 18 to 120</span>
                </div>
                <div>{{formValidityText}}</div>
                <button :disabled = "!isFormValidCompute">submit</button>
            </form>
        </div>
        <script src="${url}">
        </script>
        <script src="index.js">
        </script>
    </body>`
    return template
}
