import config from './config.js'
const loaders = config.loaders
let activeLoaders = new Set()

export default () => {
    Object.keys(loaders).forEach(loaderName=> {
        if (loaders[loaderName] === true) activeLoaders.add(loaderName)
    })

    return activeLoaders
}
