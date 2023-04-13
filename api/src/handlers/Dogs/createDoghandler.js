const {createDog}=require("./../../controllers/dogsControllers");

const createDoghandler=async (req,res)=>{
    const {name, image, heightMax, heightMin, weightMax, weightMin, lifeSpan, temperaments}=req.body;
    try {
        const newDog= await createDog(name, image, heightMax, heightMin, weightMax, weightMin, lifeSpan, temperaments);
        res.status(201).json(newDog);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    
}

module.exports={createDoghandler};