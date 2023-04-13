const {getByRace}=require("./../../controllers/dogsControllers");

const getByRacehandler=async (req,res)=>{
    const {idRace}=req.params;
    const source= isNaN(idRace)? "bdd" : "api";
    console.log(source);
    try {
        const raceDogs= await getByRace(idRace, source);
        res.status(200).json(raceDogs);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

module.exports={getByRacehandler};