const {Dog, Temperament}=require("./../db");

const getDbData= async () =>{
    const dbbDogs = await Dog.findAll({include:{
        model: Temperament,
        attributes: ["name"],
        through: {
            attributes: []
        }
    }});
    return dbbDogs;
}

module.exports={getDbData};