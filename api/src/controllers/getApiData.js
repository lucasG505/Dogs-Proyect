const axios=require("axios");
require("dotenv").config();
const {API_KEY}=process.env;

const getApiData = async () =>{
    const apiDogsRaw= (await axios.get("https://api.thedogapi.com/v1/breeds")).data;
    const apiDogsClean = apiDogsRaw.map(el=>{
        return {
            id: el.id,
            name: el.name,
            weight: el.weight.metric,
            height: el.height.metric,
            image: el.image.url,
            lifespan: el.life_span,
            temperaments: el.temperament
        }
    })
    return apiDogsClean;
}

module.exports={getApiData};