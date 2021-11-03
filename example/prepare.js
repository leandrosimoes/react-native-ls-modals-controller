const fs = require('fs')
const { exec } = require('child_process')
const path = require('path')
const PACKAGE_PATH = path.resolve(__dirname, '../package')
const PACKAGE_PATH_LIB = path.resolve(__dirname, '../package/lib')
const NODE_MODULES_DEST_PATH = path.resolve(__dirname, 'node_modules')
const PACKAGE_DEST_PATH = path.resolve(
    __dirname,
    'node_modules/react-native-ls-modals-controller'
)

console.log('Preparing react-native-ls-modals-controller...')
console.log(PACKAGE_PATH, PACKAGE_DEST_PATH)

function createPathIfNotExists(pathToCreate) {
    return new Promise((resolve) => {
        if (!fs.existsSync(pathToCreate)) {
            fs.mkdirSync(pathToCreate, { recursive: true })
        }

        resolve()
    })
}

function executeAsync(command) {
    return new Promise((resolve, reject) => {
        exec(command, (err, stdout, stderr) => {
            if (err) {
                console.error(err)
                reject()
                return
            }

            console.log(stdout)
            console.log(stderr)

            resolve()
        })
    })
}

;(async () => {
    try {
        await createPathIfNotExists(PACKAGE_DEST_PATH)

        await executeAsync(`rm -rf ${PACKAGE_DEST_PATH}`)
        await createPathIfNotExists(NODE_MODULES_DEST_PATH)
        await createPathIfNotExists(PACKAGE_DEST_PATH)

        await executeAsync(`cp -r ${PACKAGE_PATH_LIB} ${PACKAGE_DEST_PATH}`)
        await executeAsync(
            `cp -f ${PACKAGE_PATH}/package.json ${PACKAGE_DEST_PATH}/package.json`
        )
        await executeAsync(
            `cp -f ${PACKAGE_PATH}/package-lock.json ${PACKAGE_DEST_PATH}/package-lock.json`
        )
    } catch (err) {
        console.error(err)
    }
})()
