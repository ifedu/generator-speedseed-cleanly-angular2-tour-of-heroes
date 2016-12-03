const set = (name, value, extra, exclude) => ({ name, value, extra, exclude })

module.exports = [{
    message: 'Library / Framework?',
    name: 'framework',

    choices: [
        set('Angular2', 'angular2')
    ]
}, {
    message: 'HTML?',
    name: 'html',

    choices: [
        set('Jade', 'jade')
    ]
}, {
    message: 'JS?',
    name: 'js',

    choices: [
        set('TypeScript', 'typescript', 'ts')
    ]
}, {
    message: 'CSS?',
    name: 'css',

    choices: [
        set('SaSS', 'sass', 'sass')
    ]
}]