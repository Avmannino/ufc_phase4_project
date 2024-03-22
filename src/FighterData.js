
export default function FighterData({fighter,handleBackButton}){
    return(
        <>
        <div className="fighter_data">
            <input type="submit" className="backButton" value="BACK" onClick={(event)=>handleBackButton(event)} />
            <h1>{fighter.name}</h1>
            <h1>{fighter.nickname?'"'+fighter.nickname+'"':null}</h1>
            <h4>{fighter.wins}-{fighter.losses}-{fighter.draws}</h4>
            
        </div>
        <div className="fighter_data">
            <h2>CHARTS HERE</h2>
        </div>
        </>
    )
}
