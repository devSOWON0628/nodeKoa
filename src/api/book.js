const logger = require('./logger');
const Router    = require('koa-router');
const router  = Router();
const mysql      = require('mysql');
const dbconfig   = require('../database/config');
const connection = mysql.createConnection(dbconfig);


router.get('/users',async ctx => {
    await new Promise ((resolve, reject)=>{
        connection.query('SELECT * from employees',(error, rows, fields)=>{
            ctx.body = rows;
            if (error) reject(error)
            else resolve(true);
            return true;
        });
        return true;
    });
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