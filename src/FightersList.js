import React, { useEffect, useState } from 'react';
import FighterInfo from './FighterInfo';

export default function FightersList({filteredFighters,handleFighterClick}){


    return(
        <ul className="cards">{filteredFighters.slice(0,15).map((fighter)=><FighterInfo key={fighter.id} fighter={fighter} onFighterClick={handleFighterClick}/>)}</ul>
    )
}