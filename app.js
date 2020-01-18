const express = require('express');
// Express Initialize
const app = express();
const port = process.env.port || 8105;
app.get('/', (req,res)=>{
    res.send('Hello World');
    })
app.listen(port,()=> {
console.log('port '+ port);
})