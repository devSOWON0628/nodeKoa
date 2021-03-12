const Router        = require('koa-router');
const router        = Router();
const mysql      = require('mysql');
const dbconfig   = require('../database/config');
const connection = mysql.createConnection(dbconfig);


router.get('/users',async (ctx, next) => {
    ctx.body = await getData('SELECT * from employees');
});

async function getData(query){
    return new Promise(resolve => {
        connection.query(query ,async(error, rows)=>{
            resolve(rows);
        });
      });
}

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