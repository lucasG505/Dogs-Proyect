import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { createDog, getTemperaments } from "../../redux/actions";
import { validate } from "./validation";

const Form = () => {
    const [dogData, setDogData] = useState({ name: '', image: '', heightMax: '', heightMin: '', weightMax: '', weightMin: '', lifeSpan: '', temperaments: [], createdInDb: true });
    const [errors, setErrors] = useState({ name: '', heightMax: '', heightMin: '', weightMax: '', weightMin: '', lifeSpan: '', temperaments: '' });
    const temps = useSelector(state => state.temps);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTemperaments());
    }, [dispatch]);

    const handleInputChange = (e) => {
        setErrors(validate({ ...dogData, [e.target.name]: e.target.value }));
        setDogData({ ...dogData, [e.target.name]: e.target.value });
    }

    const handleSelect = (e) => {
        if (!dogData.temperaments.includes(e.target.value) && e.target.value !== '0') {
            setErrors(validate({ ...dogData, temperaments: [...dogData.temperaments, e.target.value] }));
            setDogData({ ...dogData, temperaments: [...dogData.temperaments, e.target.value] });
        }
    }

    const handleDelete = (temp) => {
        let newTemps = dogData.temperaments.filter(tempe => tempe.name !== temp);
        setDogData({ ...dogData, temperaments: newTemps });
    }

    const onSubmit = () => {
        
        dispatch(createDog(dogData));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!Object.keys(errors).length) {
            onSubmit();
            setDogData({ name: '', image: '', heightMax: '', heightMin: '', weightMax: '', weightMin: '', lifeSpan: '', temperaments: [], createdInDb: true });
            setErrors({ name: '', heightMax: '', heightMin: '', weightMax: '', weightMin: '', lifeSpan: '', temperaments: [] });
        }
    }

    return (
        <>
            <Link to='/home' >
                <button>Back</button>
            </Link>
            <form onSubmit={handleSubmit}>
                <div>
                    <label >Breed´s Name: </label>
                    <input type="text" name="name" value={dogData.name} onChange={handleInputChange} />
                </div>
                <div>{errors.name && <span>{errors.name}</span>} </div>
                <div>
                    <label >Upload an image of your Dog: </label>
                    <input type="text" name="image" value={dogData.image} onChange={handleInputChange} />
                </div>
                <div>
                    <label >Maximum height of your breed: </label>
                    <input type="text" name="heightMax" value={dogData.heightMax} onChange={handleInputChange} />
                </div>
                <div>{errors.heightMax && <span>{errors.heightMax}</span>} </div>
                <div>
                    <label >Minimum height of your breed: </label>
                    <input type="text" name="heightMin" value={dogData.heightMin} onChange={handleInputChange} />
                </div>
                <div>{errors.heightMin && <span>{errors.heightMin}</span>} </div>
                <div>
                    <label >Maximum weight of your breed: </label>
                    <input type="text" name="weightMax" value={dogData.weightMax} onChange={handleInputChange} />
                </div>
                <div>{errors.weightMax && <span>{errors.weightMax}</span>} </div>
                <div>
                    <label >Minimum weight of your breed: </label>
                    <input type="text" name="weightMin" value={dogData.weightMin} onChange={handleInputChange} />
                </div>
                <div>{errors.weightMin && <span>{errors.weightMin}</span>} </div>
                <div>
                    <label >Average lifespan of your breed: </label>
                    <input type="text" name="lifeSpan" value={dogData.lifeSpan} onChange={handleInputChange} />
                </div>
                <div>{errors.lifeSpan && <span>{errors.lifeSpan}</span>} </div>
                <div>
                    <select
                        name='selectTemperament'
                        onChange={handleSelect}
                    >
                        <option key='0' value='0'>
                            Select Temperaments...
                        </option>
                        {temps.map((temp) => (
                            <option key={temp.name} value={temp.name}>
                                {temp.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>{errors.temperaments && <span>{errors.temperaments}</span>} </div>
                <div>
                    <ul>
                        {dogData.temperaments.map((temp, index) => {
                            return (
                                <li key={index}>
                                    {temp}
                                    <button onClick={() => handleDelete(temp)} > X </button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <button type="submit" disabled={errors.name || errors.heightMin || errors.heightMax || errors.lifeSpan || errors.weightMax || errors.weightMin || errors.temperaments} >Create!</button>
            </form>
        </>
    )
};

export default Form;