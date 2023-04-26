import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { createDog, getTemperaments } from "../../redux/actions";
import { validate } from "./validation";
import style from "./form.module.css";

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
            <Link to='/home' className={style.back}>
                <button>Back</button>
            </Link>
            <form onSubmit={handleSubmit} className={style.form}>
                <div className={style.tittle}>Let´s create your Dog!</div>
                <div className={style.ic1}>
                    <label className={style.placeholder} >Breed´s Name: </label>
                    <input type="text" name="name" value={dogData.name} onChange={handleInputChange} className={style.input} />
                </div>
                <div>{errors.name && <span>{errors.name}</span>} </div>
                <div className={style.ic2} >
                    <label className={style.placeholder}>Upload an image of your Dog: </label>
                    <input type="text" name="image" value={dogData.image} onChange={handleInputChange}  className={style.input} />
                </div>
                <div className={style.ic2} >
                    <label className={style.placeholder}>Maximum height of your breed: </label>
                    <input type="text" name="heightMax" value={dogData.heightMax} onChange={handleInputChange}  className={style.input} />
                </div>
                <div>{errors.heightMax && <span>{errors.heightMax}</span>} </div>
                <div className={style.ic2} >
                    <label className={style.placeholder}>Minimum height of your breed: </label>
                    <input type="text" name="heightMin" value={dogData.heightMin} onChange={handleInputChange}  className={style.input} />
                </div>
                <div>{errors.heightMin && <span>{errors.heightMin}</span>} </div>
                <div className={style.ic2} >
                    <label className={style.placeholder}>Maximum weight of your breed: </label>
                    <input type="text" name="weightMax" value={dogData.weightMax} onChange={handleInputChange}  className={style.input} />
                </div>
                <div>{errors.weightMax && <span>{errors.weightMax}</span>} </div>
                <div className={style.ic2} >
                    <label className={style.placeholder}>Minimum weight of your breed: </label>
                    <input type="text" name="weightMin" value={dogData.weightMin} onChange={handleInputChange}  className={style.input} />
                </div>
                <div>{errors.weightMin && <span>{errors.weightMin}</span>} </div>
                <div className={style.ic2} >
                    <label className={style.placeholder}>Average lifespan of your breed: </label>
                    <input type="text" name="lifeSpan" value={dogData.lifeSpan} onChange={handleInputChange}  className={style.input} />
                </div>
                <div>{errors.lifeSpan && <span>{errors.lifeSpan}</span>} </div>
                <div className={style.ic3} >
                    <select 
                        name='selectTemperament'
                        onChange={handleSelect}
                        className={style.select}
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
                <div className={style.ic4} >
                    <ul>
                        {dogData.temperaments.map((temp, index) => {
                            return (
                                <li key={index} className={style.list}>
                                    {temp}
                                    <button onClick={() => handleDelete(temp)} > X </button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <button type="submit" disabled={errors.name || errors.heightMin || errors.heightMax || errors.lifeSpan || errors.weightMax || errors.weightMin || errors.temperaments} className={style.submit} >Create!</button>
            </form>
        </>
    )
};

export default Form;