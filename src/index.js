require('dotenv').config(); // .env 파일에서 환경변수 불러오기

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
const api = require('./api');

const port = 4000;
const mongoose = require('mongoose');

mongoose.Promise = global.Promise; // Node 의 네이티브 Promise 사용
// mongodb 연결
mongoose.connect(process.env.MONGO_URI, {    
}).then(
    (response) => {
        console.log('Successfully connected to mongodb');
    }
).catch(e => {
    console.error(e);
});

router.use('/api', api.routes()); // api 라우트를 /api 경로 하위 라우트로 설정

app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
    console.log('server is listening to port: '+port);
});
