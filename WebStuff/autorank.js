const { response } = require('express');
const express = require('express');
const app = express();

app.use(express.json())

const PORT = process.env.PORT || 2944;

app.get('/',(req,res) => {
   return res.json({msg: 'ok'})
})

app.post("/project", (req, res) => {
    console.log(req.body);
    return response.send(req.body);
})

app.listen(PORT, () =>{
    console.log('Everything is fine')
})