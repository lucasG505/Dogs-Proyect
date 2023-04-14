import { useSelector } from "react-redux";
import Card from "../Card/card";
import style from "./cardContainer.module.css"
const dogs=[
	{
		"id": 7,
		"name": "Alapaha Blue Blood Bulldog",
		"weight": "25 - 41",
		"height": "46 - 61",
		"image": "https://cdn2.thedogapi.com/images/33mJ-V3RX.jpg",
		"lifespan": "12 - 13 years",
		"temperaments": "Loving, Protective, Trainable, Dutiful, Responsible"
	},
	{
		"id": 10,
		"name": "American Bulldog",
		"weight": "27 - 54",
		"height": "56 - 69",
		"image": "https://cdn2.thedogapi.com/images/pk1AAdloG.jpg",
		"lifespan": "10 - 12 years",
		"temperaments": "Friendly, Assertive, Energetic, Loyal, Gentle, Confident, Dominant"
	},
	{
		"id": 113,
		"name": "French Bulldog",
		"weight": "13",
		"height": "28 - 30",
		"image": "https://cdn2.thedogapi.com/images/HyWNfxc47.jpg",
		"lifespan": "9 - 11 years",
		"temperaments": "Playful, Affectionate, Keen, Sociable, Lively, Alert, Easygoing, Patient, Athletic, Bright"
	},
	{
		"id": 179,
		"name": "Olde English Bulldogge",
		"weight": "NaN",
		"height": "38 - 48",
		"image": "https://cdn2.thedogapi.com/images/B1d5me547.jpg",
		"lifespan": "9 – 14 years",
		"temperaments": "Friendly, Alert, Confident, Loving, Courageous, Strong"
	}
];

const CardContainer=()=>{
    const Dogs=useSelector(state=>state.dogs);
    return(
        <div className={style.container}>
            {dogs.map(dog=>{
                return <Card name={dog.name} lifespan={dog.lifespan}/>
            })}
        </div>
    )
};

export default CardContainer;