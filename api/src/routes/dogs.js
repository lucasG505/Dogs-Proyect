const {Router}=require("express");
const {createDoghandler}=require("./../handlers/Dogs/createDoghandler");
const {getAllDogshandler}=require("./../handlers/Dogs/getAllDogshandler");
const {getByRacehandler}=require("./../handlers/Dogs/getByRacehandler");

const server=Router();

server.get("/",getAllDogshandler);

server.get("/:idRace", getByRacehandler);

server.post("/", createDoghandler);

module.exports=server;