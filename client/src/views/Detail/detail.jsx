import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import {Link} from "react-router-dom";
import { useEffect } from "react";
import { getDogByRace, cleanDetail } from "../../redux/actions";

const Detail=()=>{
    const dispatch=useDispatch();
    
    const detail=useSelector(state=>state.detail);
    const {id}=useParams();
    
    useEffect(()=>{
    dispatch(getDogByRace(id));
    return ()=>{
        dispatch(cleanDetail());
    }
    }, [dispatch, id]);
    if(isNaN(id)){
        let temps=detail.temperaments;
        temps=temps?.map(t=>t.name).join();
        return(
            <>
                <div>
                    <Link to='/home' >
                        <button>Back</button>
                    </Link>
                    <p>{detail.id}</p>
                    <img src={detail.image} alt="Fail" />
                    <p>{detail.name}</p>
                    <p>{`${detail.heightMin} - ${detail.heightMax}`}</p>
                    <p>{`${detail.weightMin} - ${detail.weightMax}`}</p>
                    <p>{temps}</p>
                    <p>{detail.lifespan}</p>
                </div>
            </>
        )
    }else{
        return(
            <>
                <div>
                    <Link to='/home' >
                        <button>Back</button>
                    </Link>
                    <p>{detail.id}</p>
                    <img src={detail.image} alt="Fail" />
                    <p>{detail.name}</p>
                    <p>{detail.height}</p>
                    <p>{detail.weight}</p>
                    <p>{detail.temperaments}</p>
                    <p>{detail.lifespan}</p>
                </div>
            </>
        )
    }
        
};

export default Detail;