
const express = require('express');
const app = express();

app.use(express.json())

const PORT = process.env.PORT || 2944;

app.get('/',(req,res) => {
   return res.json({msg: 'ok'})
})

app.post("/", (req, res) => {
    console.log(req.body);
    return res.send(req.body);
})

app.listen(PORT, () =>{
    console.log('Everything is fine')
})