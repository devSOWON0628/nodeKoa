const Router    = require('koa-router');
const router  = Router();
const mysql      = require('mysql');
const dbconfig   = require('../database/config');
const connection = mysql.createConnection(dbconfig);


router.get('/users',async ctx => {
    // const makeRequest = async () => {
    //     console.log("await getJSON()")
    //     return "done"
    //   }
    //   ctx.body = makeRequest();

    await new Promise ((resolve, reject)=>{
        connection.query('SELECT * from employees',(error, rows)=>{
            ctx.body = rows;
            if (error? reject(error):resolve(true));
        });
    });

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