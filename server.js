const express= require('express');

const app = express();
const bcrypt = require('bcrypt');

app.use(express.json())

const users=[];

app.get("/users",function(req,res){
    res.json(users)
});
app.post("/users",async(req,res)=>{
    try{
        const salt= await bcrypt.genSalt()
        const hashedpassword= await bcrypt.hash(req.body.password,salt)
        console.log(salt);
        console.log(hashedpassword);
        const user= {name:req.body.name, password:hashedpassword}
        users.push(user);
        res.status(201).send();
    }
   catch{
    res.status(500).send()
   }
});
app.post("/users/login", async(req,res)=>{
    const user= user.find(user => user.name === req.body.name)
    if(user==null){
        return res.status(400).send("Cannot find user")
    }
    try{
       if(await bcrypt.compare(req.body.password,user.password)){
        res.send("success")
       }
       else{
        res.send("Not authorized")
       }
    }
    catch{
        res.status(500).send()
    }
})
app.listen("3000",function(){
    console.log("listening on 3000");
});