const Router = require('koa-router');
const router = new Router();
const logger = require('./logger');


router.get('/:name',(ctx, next) => {
    logger.info("GET");
    const { name } = ctx.params;
    ctx.response.body = "GET"+ name;
    next();
});

router.get('/',(ctx, next) => {
    logger.info("GET");
    const { name } = ctx.request.query;
    ctx.response.body = "GET"+ name;
    next();
});
router.post('/',(ctx) => {
    logger.info("POST");
    ctx.response.body = "POST";
});

router.put('/',(ctx) => {
    logger.info("PUT");
    ctx.response.body = "PUT";
});

router.patch('/',(ctx) => {
    logger.info("PATCH");
    ctx.response.body = "PATCH";
});

router.delete('/',(ctx) => {
    logger.info("DELETE");
    ctx.response.body = "DELETE";
});

module.exports = router;