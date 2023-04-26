import {useState} from "react";
import style from "./searchBar.module.css";

export default function SearchBar ({onSearch}){
    const [name,setName]=useState('');
    const handleInput=(e)=>{
        setName(e.target.value);
    }
    return (
        <div className={style.searchBox}>
            <button onClick={()=>{onSearch(name); setName('');}} className={style.btnSearch} ><i className={style.searchIcon}></i></button>
            <input type="search" onChange={handleInput} value={name} className={style.inputSearch} placeholder="Type to search..."/>
        </div>
    )
}