import React, { useEffect, useState } from 'react';

export default function FighterInfo({fighter,onFighterClick}){

    return(
        <div style={{textAlign:"center",strokeWidth:"2px",border: "2px solid white",maxWidth:"500px",marginLeft:"0px"}} onClick={()=>onFighterClick(fighter)}>
            <p className='fighterLink'>{fighter.name}</p>
        </div>
    )
}