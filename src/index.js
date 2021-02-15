const Koa = require('koa');
const app = new Koa();

app.use((ctx, next) => {    // next는 promise를 반환
    console.log(1);
    next();
});


app.use((ctx, next) => {
    console.log(2);
    next();
});


app.use((ctx, next) => {
    ctx.body = 'Hello Koa';
    next();
});

app.listen(4000, () => {
    console.log('heurm server is listening to port 4000');
});