const logger = require('./logger');
const Router    = require('koa-router');
const router  = Router();
const mysql      = require('mysql');
const dbconfig   = require('../database/config');
const connection = mysql.createConnection(dbconfig);


router.get('/users', (ctx, res) => {
    console.log(1);
    let result = connection.query('SELECT * from employees',  async function (error, rows, fields) {
        return await rows;
    });
    console.log(result);
      ctx.response.body = "out";
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