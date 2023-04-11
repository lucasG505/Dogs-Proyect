const {Router}=require("express");
const controllers="NADA";

const server=Router();

server.get("/", async (req,res)=>{
    res.send("Holas");
})

server.get("/:idRaza", async (req,res)=>{
    res.send("chau");
})

server.post("/", async (req,res)=>{
    res.send("posteo");
})

module.exports=server;