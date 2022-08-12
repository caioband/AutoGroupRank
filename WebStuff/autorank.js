require('dotenv').config();
const noblox = require('noblox.js');
const cookie = process.env.COOKIE
const express = require('express');
const app = express();

const groupID = 14226520

app.use(express.json())

const PORT = process.env.PORT || 3000;

function rankUp(targetid) {
    noblox.setRank(groupID,targetid,"Patreon")
}

noblox.setCookie(cookie).then(function(){
    console.log('Cookie set')
}).catch(function(err){
    console.log(err)
})

app.post("/", (req, res) => {
    console.log(req.body);
    
  if (Object.keys(req.body).length > 0) {
    for (let i = 0; i <= Object.keys(req.body).length; i++) {
        res.send(req.body[i])
      }
  }else{
        res.send("No data")
  }
  
})

app.listen(PORT, () =>{
    console.log('Everything is fine')
})