const fs = require('fs')
const config = require('./config')
const templateFn = require('./template.html')
if (process.argv.length == 3) {
    const environment = process.argv[2]
    if (environment === 'dev' || environment === 'prod') {
        const url = config.urls[`${environment}_vue`]
        const template = templateFn(url)
        fs.writeFileSync(`index.${environment}.html`, Buffer.from(template))
        console.log(`created index.${environment}.html`)
    } else {
        console.log("please enter dev or prod as environment")
    }
} else {
    console.log("please enter an environment")
}
