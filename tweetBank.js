const _ = require('lodash');
const data = []

function add(name, content) {
    let id = `${data.length}`
    data.push({ name, content, id });
    return id
}
function list() {
    return _.cloneDeep(data);
}
function find(properties) {
    return _.cloneDeep(_.filter(data, properties));
}

module.exports = { add, list, find };

const randArrayEl = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
};
const getFakeName = function () {
    const fakeFirsts = ['Toni', 'Guille', 'Santi', 'Facu', 'Alan', 'Pinki', 'Tincho', 'Solano', 'R2D2'];
    const fakeLasts = ['Scanlan', 'Aszyn', 'Tralice', 'Velasco', 'Sainz', 'Palacio', 'Palacios', 'Lidueña', 'Fisicaro', 'Ecma'];
    return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};
const getFakeTweet = function () {
    const awesome_adj = ['increible', 'emocionante', 'increible', 'gracioso', 'dulce', 'cool', 'sorprendente', 'impresionante'];
    return "Plataforma 5 es " + randArrayEl(awesome_adj) + "! Los profesores simplemente son " + randArrayEl(awesome_adj) + ". #P5Love #codedreams";
};
for (let i = 0; i < 10; i++) {
    module.exports.add(getFakeName(), getFakeTweet());
}