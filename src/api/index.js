const Router = require('koa-router');

const api = new Router();
const books = require('./book');
const creams = require('./cream');

api.use('/book', books.routes());
api.use('/cream', creams.routes());

module.exports = api;