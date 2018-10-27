const express = require('express');

const app = express();

app.get('/',(req,res) =>{
    res.write(req.url);
});

app.listen(3000, () => console.log("running server in PORT", 3000));