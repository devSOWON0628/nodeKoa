const Router = require('koa-router');
const router = new Router();


router.get('/:name',(ctx, next) => {
    const { name } = ctx.params;
    ctx.response.body = "GET"+ name;
    next();
});

router.get('/',(ctx, next) => {
    const { name } = ctx.request.query;
    ctx.response.body = "GET"+ name;
    next();
});
router.post('/',(ctx) => {
    ctx.response.body = "POST";
});

router.put('/',(ctx) => {
    ctx.response.body = "PUT";
});

router.patch('/',(ctx) => {
    ctx.response.body = "PATCH";
});

router.delete('/',(ctx) => {
    ctx.response.body = "DELETE";
});

module.exports = router;