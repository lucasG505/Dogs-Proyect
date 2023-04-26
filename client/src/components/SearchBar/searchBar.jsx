import {useState} from "react"

export default function SearchBar ({onSearch}){
    const [name,setName]=useState('');
    const handleInput=(e)=>{
        setName(e.target.value);
    }
    return (
        <>
            <input type="search" onChange={handleInput} value={name} />
            <button onClick={()=>{onSearch(name); setName('');}} >Search</button>
        </>
    )
}