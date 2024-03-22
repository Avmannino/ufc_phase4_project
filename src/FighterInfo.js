import React, { useEffect, useState } from 'react';

export default function FighterInfo({fighter,onFighterClick}){

    return(
        <div style={{textAlign:"center",strokeWidth:"2px",border: "2px solid white",maxWidth:"500px",marginLeft:"700px"}} onClick={()=>onFighterClick(fighter)}>
            <p style={{color:"white"}} className='fighterLink'>{fighter.name}</p>
        </div>
    )
}