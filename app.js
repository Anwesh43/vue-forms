const fs = require('fs')
const config = require('./config')
const templateFn = require('./template.html')
const vuelidateTemplateFn = require('./vuelidatedemo.template.html')

const templateFnMap = {"index" : templateFn, "vuelidate" : vuelidateTemplateFn}
if (process.argv.length == 4) {
    const templateKey = process.argv[2]
    const environment = process.argv[3]
    if (environment === 'dev' || environment === 'prod') {
        const url = config.urls[`${environment}_vue`]
        const template = templateFnMap[templateKey](url)
        fs.writeFileSync(`${templateKey}.${environment}.html`, Buffer.from(template))
        console.log(`created ${templateKey}.${environment}.html`)
    } else {
        console.log("please enter dev or prod as environment")
    }
} else {
    console.log("please enter an templateKey and environment")
}
