import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createDog, getTemperaments } from "../../redux/actions";
import { validate } from "./validation";
import style from "./form.module.css";

const Form = () => {
    const [dogData, setDogData] = useState({ name: '', image: '', heightMax: '', heightMin: '', weightMax: '', weightMin: '', lifeSpan: '', temperaments: [], createdInDb: true });
    const [errors, setErrors] = useState({ name: '', image: '', heightMax: '', heightMin: '', weightMax: '', weightMin: '', lifeSpan: '', temperaments: '' });
    const temps = useSelector(state => state.temps);
    const [first,setFirst]=useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTemperaments());
    }, [dispatch]);

    const handleInputChange = (e) => {
        setFirst(false);
        setErrors(validate({ ...dogData, [e.target.name]: e.target.value }));
        setDogData({ ...dogData, [e.target.name]: e.target.value });
    }

    const handleSelect = (e) => {
        setFirst(false);
        if (!dogData.temperaments.includes(e.target.value) && e.target.value !== '0') {
            setErrors(validate({ ...dogData, temperaments: [...dogData.temperaments, e.target.value] }));
            setDogData({ ...dogData, temperaments: [...dogData.temperaments, e.target.value] });
        }
    }

    const handleDelete = (temp) => {
        let newTemps = dogData.temperaments.filter(tempe => tempe !== temp);
        if (newTemps.length <= 6) {
            setErrors({ ...errors, temperaments: '' });
        }
        setDogData({ ...dogData, temperaments: newTemps });
    }

    const onSubmit = () => {

        if (dogData.image === '') {
            let noPic = {
                name: dogData.name, heightMax: dogData.heightMax, heightMin: dogData.heightMin, weightMax: dogData.weightMax, weightMin: dogData.weightMin, lifeSpan: dogData.lifeSpan, temperaments: dogData.temperaments, createdInDb: true
            }
            dispatch(createDog(noPic));
        } else {
            dispatch(createDog(dogData));
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!Object.keys(errors).length) {
            onSubmit();
            setDogData({ name: '', image: '', heightMax: '', heightMin: '', weightMax: '', weightMin: '', lifeSpan: '', temperaments: [], createdInDb: true });
            setErrors({ name: '', heightMax: '', heightMin: '', weightMax: '', weightMin: '', lifeSpan: '', temperaments: '', image: '' });
            alert("Created succesfully");
        }else{
            alert("Invalid Input");
        }
    }

    return (
        <div className={style.container}>
            <form onSubmit={handleSubmit} className={style.form}>
                <div className={style.tittle}>Let´s create your Dog!</div>
                <div className={style.ic1}>
                    <input autoComplete="off" type="text" name="name" value={dogData.name} onChange={handleInputChange} className={errors.name ? style.inputInvalid : style.inputValid} placeholder=" " />
                    <div className={style.cut}></div>
                    <label className={style.placeholder} >Name</label>
                </div>
                <div>{errors.name && <span className={style.requirements} >{errors.name}</span>} </div>
                <div className={style.ic2} >
                    <input autoComplete="off" type="text" name="image" value={dogData.image} onChange={handleInputChange} className={errors.image ? style.inputInvalid : style.inputValid} placeholder=" " />
                    <div className={style.cut}></div>
                    <label className={style.placeholder}>Image Url: </label>
                </div>
                <div>{errors.image && <span className={style.requirements}>{errors.image}</span>}</div>
                <div className={style.ic2} >
                    <input autoComplete="off" type="text" name="heightMax" value={dogData.heightMax} onChange={handleInputChange} className={errors.heightMax ? style.inputInvalid : style.inputValid} placeholder=" " />
                    <div className={style.cut}></div>
                    <label className={style.placeholder}>Max Height: </label>
                </div>
                <div>{errors.heightMax && <span className={style.requirements} >{errors.heightMax}</span>} </div>
                <div className={style.ic2} >
                    <input autoComplete="off" type="text" name="heightMin" value={dogData.heightMin} onChange={handleInputChange} className={errors.heightMin ? style.inputInvalid : style.inputValid} placeholder=" " />
                    <div className={style.cut}></div>
                    <label className={style.placeholder}>Min height: </label>
                </div>
                <div>{errors.heightMin && <span className={style.requirements} >{errors.heightMin}</span>} </div>
                <div className={style.ic2} >
                    <input autoComplete="off" type="text" name="weightMax" value={dogData.weightMax} onChange={handleInputChange} className={errors.weightMax ? style.inputInvalid : style.inputValid} placeholder=" " />
                    <div className={style.cut}></div>
                    <label className={style.placeholder}>Max weight: </label>
                </div>
                <div>{errors.weightMax && <span className={style.requirements} >{errors.weightMax}</span>} </div>
                <div className={style.ic2} >
                    <input autoComplete="off" type="text" name="weightMin" value={dogData.weightMin} onChange={handleInputChange} className={errors.weightMin ? style.inputInvalid : style.inputValid} placeholder=" " />
                    <div className={style.cut}></div>
                    <label className={style.placeholder}>Min weight: </label>
                </div>
                <div>{errors.weightMin && <span className={style.requirements} >{errors.weightMin}</span>} </div>
                <div className={style.ic2} >
                    <input autoComplete="off" type="text" name="lifeSpan" value={dogData.lifeSpan} onChange={handleInputChange} className={errors.lifeSpan ? style.inputInvalid : style.inputValid} placeholder=" " />
                    <div className={style.cut}></div>
                    <label className={style.placeholder}>Life Span: </label>
                </div>
                <div>{errors.lifeSpan && <span className={style.requirements} >{errors.lifeSpan}</span>} </div>
                <div className={style.ic3} >
                    <select
                        name='selectTemperament'
                        onChange={handleSelect}
                        className={errors.temperaments ? style.selectInvalid : style.select}
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
                <div>{errors.temperaments && <span className={style.requirementsTemp} >{errors.temperaments}</span>} </div>
                <div className={style.ic4} >
                    <ul>
                        {dogData.temperaments.map((temp, index) => {
                            return (
                                <li key={index} className={style.list}>
                                    {temp}
                                    <button onClick={() => handleDelete(temp)} className={style.delete} > X </button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <button type="submit" disabled={first || (errors.name || errors.heightMin || errors.heightMax || errors.lifeSpan || errors.weightMax || errors.weightMin || errors.temperaments || errors.image)} className={style.submit} >Create!</button>
            </form>
        </div>
    )
};

export default Form;