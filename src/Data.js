import React, { useEffect, useState } from 'react';
import FighterData from './FighterData';
import Plot from "react-plotly.js";
import "./Data.css";


export default function Data() {
    const topFighters = [
        "Conor McGregor",
        "Khabib Nurmagomedov",
        "Jon Jones",
        "Jorge Masvidal",
        "Israel Adesanya",
        "Dustin Poirier",
        "Nate Diaz",
        "Stipe Miocic",
        "Amanda Nunes",
        "Francis Ngannou",
        "Rose Namajunas",
        "Max Holloway",
        "Alexander Volkanovski",
        "Valentina Shevchenko",
        "Daniel Cormier",
        "Tony Ferguson",
        "Tyron Woodley",
        "Justin Gaethje",
        "Robert Whittaker",
        "Cody Garbrandt"
    ];
    const handleTopFighterSelect = (fighter) => {
        const selectedFighterData = allFightersData.find((f) => f.name === fighter);
        setSelectedFighter(selectedFighterData);
    };

    const [allFighters, setAllFighters] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedFighter, setSelectedFighter] = useState(false);
    const [showAll, setShowAll] = useState(false);
    const [allFightersData, setAllFightersData] = useState(null);
    const [sortBy, setSortBy] = useState('wins');
    useEffect(() => {
        handleShowAllClick()
    }, [])

    const handleFighterClick = (fighter) => {
        setSelectedFighter(fighter);
    };

    const handleBackButton = (event) => {
        event.preventDefault();
        setSelectedFighter(false);
    };

    let filteredFighters = [];
    function handleSearching(event) {
        setSearch(event.target.value);
    }
    filteredFighters = allFighters.filter((f) => search ? f.name.toLowerCase().includes((search).toLowerCase()) : true);

    useEffect(() => {
        fetch("http://127.0.0.1:5555/fighters")
            .then((response) => response.json())
            .then((fighters) => {
                setAllFighters(fighters);
            });
    }, []);

    const handleShowAllClick = () => {
        fetch("http://127.0.0.1:5555/fighters") // Fetch all fighters
            .then((response) => response.json())
            .then((allFightersData) => {
                // Sort the fighters based on the selected criterion
                const sortedFightersData = allFightersData
                    .filter(fighter => fighter.wins !== 0 && typeof fighter.wins !== 'undefined') // Filter out fighters with 0 or undefined wins
                    .sort((a, b) => {
                        if (sortBy === 'wins') {
                            return b.wins - a.wins; // Sort by wins (descending)
                        } else if (sortBy === 'draws') {
                            return b.draws - a.draws; // Sort by draws (descending)
                        } else if (sortBy === 'losses') {
                            return b.losses - a.losses; // Sort by losses (ascending)
                        } else if (sortBy === 'height_cm') {
                            return b.height_cm - a.height_cm; // Sort by height (descending)
                        } else if (sortBy === 'weight_in_kg') {
                            return b.weight_in_kg - a.weight_in_kg; // Sort by weight (descending)
                        } else if (sortBy === 'reach_in_cm') {
                            return b.reach_in_cm - a.reach_in_cm; // Sort by reach (descending)
                        } else if (sortBy === 'significant_strikes_landed_per_minute') {
                            return b.significant_strikes_landed_per_minute - a.significant_strikes_landed_per_minute; // Sort by strikes landed (descending)
                        } else if (sortBy === 'average_submissions_attempted_per_15_minutes') {
                            return b.average_submissions_attempted_per_15_minutes - a.average_submissions_attempted_per_15_minutes; // Sort by takedown accuracy (descending)
                        }
                    })
                    .slice(0, 50); // Select top 100 fighters after sorting
                setAllFightersData(sortedFightersData);
                setShowAll(true);
            })
            .catch((error) => {
                console.error("Error fetching all fighters data:", error);
            });
    };

    const handleSortByChange = (event) => {
        setSortBy(event.target.value);

    };

    const handleDropdownSelect = (fighter) => {
        setSelectedFighter(fighter);
        setSearch(fighter.name); // Set search input value to the selected fighter's name
    };

    return (
        <div className='graph_page'>
            {selectedFighter ? (
                <FighterData fighter={selectedFighter} handleBackButton={handleBackButton} />
            ) : (
                <div>
                    <div className="buttons-container">
                        <button className='graphs_btn' onClick={handleShowAllClick}>Graph By:</button>
                        <select className='dropdown_menu' value={sortBy} onChange={handleSortByChange}>
                            <option value="wins">Wins</option>
                            <option value="draws">Draws</option>
                            <option value="losses">Losses</option>
                            <option value="height_cm">Height (cm)</option>
                            <option value="weight_in_kg">Weight (kg)</option>
                            <option value="reach_in_cm">Reach (cm)</option>
                            <option value="significant_strikes_landed_per_minute">Strikes Landed</option>
                            <option value="average_submissions_attempted_per_15_minutes">Avg.Submissions</option>
                        </select>
                    </div>
                    <div className="top-fighters-list">
                        <h2>Popular Searches</h2>
                        <ul>
                            {topFighters.map((fighter, index) => (
                                <li key={index} onClick={() => handleTopFighterSelect(fighter)}>{fighter}</li>
                            ))}
                        </ul>
                    </div>

                    <form style={{ position: "relative", display: "flex", marginTop: "-50px", marginLeft: "600px" }}>
                        <input type="text" name="search" value={search} placeholder="Search by Name:" id="text-fighter" onChange={handleSearching} style={{ backgroundColor: "#b27503", borderRadius: "7px", borderWidth: "3px", borderColor: "red", height: "50px", width: "500px", marginLeft: "60px", marginTop: "-680px", color: "rgb(201, 0, 0)", textAlign: "center", fontFamily: "Sternbach", fontSize: "25px" }} />
                        {search && (
                            <div className="dropdown_search" style={{ position: "absolute", top: "60px", left: "0", zIndex: "1" }}>
                                {filteredFighters.map((fighter, index) => (
                                    <div key={index} onClick={() => handleDropdownSelect(fighter)}>{fighter.name}</div>
                                ))}
                            </div>
                        )}
                    </form>
                    <br></br>
                    <br></br>
                    {showAll && allFightersData && (
                        <div className="scatter_graph">
                            <h2>
                                <Plot
                                    data={[
                                        {
                                            x: allFightersData.map(fighter => fighter.name),
                                            y: allFightersData.map(fighter => fighter[sortBy]),
                                            type: 'scattergl',
                                            mode: 'lines+markers',
                                            marker: {
                                                color: '#e19303',
                                                size: 10
                                            },
                                            line:{
                                                color: 'red',
                                            },
                                            font: { family: "Sternbach", size: 20, color: ["rgb(255,255,255)"] },
                                            name: `Top 50 Fighters - ${sortBy}`,
                                            paper_bgcolor: "rgba(0,0,0,0)",
                                            hoverinfo: 'text',
                                            hovertext: allFightersData.map(fighter => {
                                                return `${fighter.name}<br>${sortBy}: ${fighter[sortBy]}`;
                                            })
                                        }
                                    ]}
                                    layout={{
                                        title: `Top 50 Fighters - ${sortBy}`,
                                        titlefont: {
                                            size: 35,
                                            color: '#c90000', // Adjust title color if needed
                                            family: "Sternbach"
                                        },
                                        xaxis: {
                                            title: '',
                                            automargin: true,
                                            showgrid: false,
                                            color: '#e19303',
                                            tickfont: {
                                                size: 8,
                                                color: "#e19303"
                                            }
                                        },
                                        yaxis: {
                                            title: sortBy, // Update y-axis title based on sortBy
                                            automargin: true,
                                            showgrid: false,
                                            color: '#e19303',
                                            tickfont: {
                                                size: 15,
                                                color: '#e19303'
                                            }
                                        },
                                        hoverlabel: {
                                            bgcolor: '#e19303', // Change hover window background color
                                            bordercolor: 'white', // Change hover window border color
                                            font: {
                                                family: 'Sternbach', // Change hover window text font family
                                                size: 20, // Change hover window text font size
                                                color: '#c90000' // Change hover window text font color
                                            }
                                        },
                                        width: 1250,
                                        height: 500,
                                        plot_bgcolor: 'rgba(0, 0, 0, 0)',
                                        paper_bgcolor: 'rgba(0, 0, 0, 0)'
                                    }}
                                />
                            </h2>
                        </div>
                    )}

                    {showAll && allFightersData && (
                        <div className="sunburst_graph">
                            <h2>
                                <Plot
                                    data={[
                                        {
                                            labels: allFightersData.map(fighter => fighter.name),
                                            parents: allFightersData.map(fighter => fighter.parent), // Assuming you have a parent property in your data to define the hierarchy
                                            values: allFightersData.map(fighter => fighter[sortBy]),
                                            type: 'sunburst',
                                            hoverinfo: 'label+value',
                                            hovertext: allFightersData.map(fighter => {
                                                return `${fighter.name}<br>${sortBy}: ${fighter[sortBy]}`;
                                            })
                                        }
                                    ]}
                                    layout={{
                                        title: `Top 50 Fighters - ${sortBy}`,
                                        titlefont: {
                                            size: 35,
                                            color: '#e19303',
                                            family: "Sternbach"
                                        },
                                        sunburstcolorway: ['#c90000'], // Set the color for the Sunburst chart
                                        margin: { l: 0, r: 0, b: 0, t: 80 }, // Adjust the top margin
                                        width: 1000,
                                        height: 800,
                                        plot_bgcolor: 'rgba(0, 0, 0, 0)',
                                        paper_bgcolor: 'rgba(0, 0, 0, 0)'
                                    }}
                                    config={{ modeBarButtonsToAdd: ['zoom2d', 'pan2d', 'zoomIn2d', 'zoomOut2d'] }} // Enable panning and zooming with click interactions
                                />
                            </h2>
                        </div>
                    )}


                </div>
            )}
        </div>
    );
}