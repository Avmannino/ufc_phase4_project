import React, { useEffect, useState } from 'react';
import FightersList from './FightersList';
import FighterData from './FighterData';
import "./Data.css"

export default function Data() {
    const [allFighters, setAllFighters] = useState([]);
    const [search,setSearch]=useState("");
    const [selectedFighter, setSelectedFighter] = useState(false);

    const handleFighterClick = (fighter) => {
        setSelectedFighter(fighter);
    };

    const handleBackButton = (event)=>{
        event.preventDefault()
        setSelectedFighter(false)
    }
    
    let filteredFighters=[]
    function handleSearching(event){
        setSearch(event.target.value)
    }
    filteredFighters=allFighters.filter((f)=>search?f.name.toLowerCase().includes((search).toLowerCase()):true)

    useEffect(() => {
        fetch("http://127.0.0.1:5555/fighters")
        .then((response) => response.json())
        .then((fighters) => {
            setAllFighters(fighters);
            // let randomIndex = Math.floor(Math.random() * fighters.length);
            // setChosenFighter(fighters[randomIndex]);
        });
    }, []);

    return (
        
        <div>
            {selectedFighter?<FighterData fighter={selectedFighter} handleBackButton={handleBackButton}/>:<div><form onChange={handleSearching} style={{marginLeft:"700px",paddingBottom:"20px",paddingTop:"25px",fontSize:"39px"}}>
                <input type="text" name="search" value={search} placeholder="Fighter Name Here" id="text-fighter" style={{backgroundColor:"rgba(99, 15, 4,.8)",borderRadius: "4px",height:"50px",width:"500px",marginLeft:"40px",color:"white",textAlign:"center",fontSize:"30px"}}/>
            </form>
            <FightersList filteredFighters={filteredFighters} handleFighterClick={handleFighterClick}/></div>}
        </div>
    )}