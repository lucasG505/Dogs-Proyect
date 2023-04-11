const {Router}=require("express");
const controllers="NADA";

const server=Router();

server.get("/", async (req,res)=>{
    res.send("Holas");
})

module.exports=server;