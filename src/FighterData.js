
export default function FighterData({fighter,handleBackButton}){
    return(
        <div style={{color:"white"}}>
            <input type="submit" className="backButton" value="BACK" onClick={(event)=>handleBackButton(event)} />
            <p>{fighter.name}</p>
            <p>{fighter.nickname?'"'+fighter.nickname+'"':null}</p>
            <p>{fighter.wins}-{fighter.losses}-{fighter.draws}</p>
            <p>CHARTS HERE</p>
        </div>
    )
}
