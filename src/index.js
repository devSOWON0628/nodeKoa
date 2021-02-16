
const Koa = require('koa');
const Router = require('koa-router');
const morgan = require('morgan');

const app = new Koa();
const router = new Router();
const api = require('./api');

const port = 4000;

router.use('/api', api.routes()); // api 라우트를 /api 경로 하위 라우트로 설정

app.use(router.routes()).use(router.allowedMethods());
router.use(morgan('dev'));
app.listen(port, () => {
    console.log('server is listening to port : '+port);
});
