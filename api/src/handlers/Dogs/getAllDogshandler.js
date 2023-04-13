const {getAllDogs, getByName}=require("./../../controllers/dogsControllers");

const getAllDogshandler= async (req, res)=>{
    const {name}= req.query;
    try {
        if(name) {
            const namedDogs= await getByName(name);
            res.status(200).json(namedDogs);
        }else {
            const allDogs = await getAllDogs();
            console.log(allDogs);
            res.status(200).json(allDogs);
        }    
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

module.exports={getAllDogshandler};