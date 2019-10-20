const express = require('express');
const app = express();
app.get('/', (req,res)=> {
    res.send('yes i m available')
});
app.get('/api', (req, res) => {
    res.send(['Agra', 'Delhi', 'Kanpur']);
});
app.get('/api/:id', (req, res) => {
    res.send(req.params.id);
});
app.get('/api/:title/:publisher', (req, res) => {
    res.send(req.params);
});
app.get('/api/:title/:publisher', (req, res) => {
    res.send([req.params, req.query]);
});
const port = process.env.PORT || 3000
app.listen(port, ()=> {
    console.log(`app listenning on ${port}`)
})