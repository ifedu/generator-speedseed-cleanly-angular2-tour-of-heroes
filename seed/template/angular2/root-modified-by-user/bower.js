module.exports = ($) => {
    const bowerJson = {
        name: `${$.project} with ${$.template}`,
        private: true,

        dependencies: {}
    }

    const getCompiler = {
        typescript: {}
    }

    const getCss = {
        sass: {}
    }

    const getFramework = {
        angular2: {}
    }

    const getFrameworkDev = {
        angular2: {}
    }

    const getTest = {
        no: {},
        mocha: {}
    }

    const speedseed = require('speedseed')

    const file = new speedseed.Files()

    file.readFile('./bower.json', bowerJson)

    const extend = require('extend')

    extend(
        true,
        bowerJson.dependencies,
        getFramework[$.framework]
    )

    extend(
        true,
        bowerJson.devDependencies,
        getCompiler[$.compiler],
        getCss[$.css],
        getFrameworkDev[$.framework],
        getTest[$.test]
    )

    file.writeFile('bower.json', 2, bowerJson)
}