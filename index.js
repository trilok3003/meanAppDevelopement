const express = require('express');
const app = express();
app.get('/', (req,res)=> {
    res.send('yes i m available')
});
app.listen(3000, ()=> {
    console.log('listenning on 3000')
})