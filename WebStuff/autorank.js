const express = require('express');
const app = express();

const PORT = process.env.PORT || 8877;

app.get('/',(req,res) => {
   return res.json({msg: 'ok'})
})

app.post("/", (req, res) => {
    return req.body
})

app.listen(PORT, () =>{
    console.log('Everything is fine')
})