const {Router}=require("express");
const {getAllTemperamentshandler}=require("./../handlers/Temperaments/getAllTemperamentshandler");

const server=Router();

server.get("/", getAllTemperamentshandler);

module.exports=server;