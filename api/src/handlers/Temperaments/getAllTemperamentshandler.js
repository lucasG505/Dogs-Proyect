const {getAllTemperaments}=require("./../../controllers/temperamentControllers");

const getAllTemperamentshandler=async (req,res)=>{
    try {
        const allTemps=await getAllTemperaments();
        res.status(200).json(allTemps);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

module.exports={getAllTemperamentshandler};