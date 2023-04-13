const { Dog,Temperament } = require("./../db");
const {getApiData}=require("./getApiData");
const {getDbData}=require("./getDbData");

const createDog = async ( name, image, heightMax, heightMin, weightMax, weightMin, lifeSpan, temperaments ) => {
    console.log();
    let newDog = await Dog.create({name, image, heightMax, heightMin, weightMax, weightMin, lifeSpan});
    temperaments.map(async(el)=>{
        const temperament= await Temperament.findOne({
            attributes: ["id"],
            where: {name:el},
        })
        newDog.addTemperament(temperament.id);
    })
    return newDog;
};

const getAllDogs = async ()=>{
    const apiDogs= await getApiData();
    const bddDogs= await getDbData();
    return [...apiDogs, ...bddDogs];
}

const getByRace = async (race, source)=>{
    if(source==="api"){
        const apiDogs= await getApiData();
        const dogs= apiDogs.filter(el=>el.id===Number(race));
        
        return dogs;
    }else{
        const bddDogs=await getDbData();
        const dogs= bddDogs.filter(el=>el.id===race);
        return dogs;
    }
}

const getByName= async (name)=>{
    const apiDogs= await getApiData();
    const dbDogs= await getDbData();
    name=name.toLowerCase();
    let dogsApi= apiDogs.filter(el=>(el.name.toLowerCase()).includes(name));
    let dogsDb= dbDogs.filter(el=>(el.name.toLowerCase()).includes(name));
    return [...dogsApi,...dogsDb];
}

module.exports={
    createDog,
    getAllDogs,
    getByRace,
    getByName
}