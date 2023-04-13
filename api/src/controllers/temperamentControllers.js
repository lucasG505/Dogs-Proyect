const {Temperament}=require("./../db");
const {getApiData}=require("./getApiData");

const getAllTemperaments=async ()=>{
    const apiData=await getApiData();
    let allTemps= apiData.map(el=>el.temperaments).join().split(",");
    allTemps=allTemps.filter(el=>el!=='');
    allTemps=allTemps.map(el=>el.trim());
    allTemps=new Set(allTemps);
    allTemps.forEach(element => {
        Temperament.findOrCreate({
            where: {name:element}
        })
    });
    const dbTemps=await Temperament.findAll();
    return dbTemps;
}

module.exports={getAllTemperaments};