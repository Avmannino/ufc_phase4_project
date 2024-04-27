import React, { useEffect, useState } from 'react';
import FighterData from './FighterData';
import Plot from "react-plotly.js";
import "./Data.css";


export default function Data() {
    const topFighters = [
        { nat: "🇮🇪", name: "Conor McGregor" },
        { nat: "🇷🇺", name: "Khabib Nurmagomedov" },
        { nat: "🇺🇸", name: "Jon Jones" },
        { nat: "🇺🇸", name: "Jorge Masvidal" },
        { nat: "🇳🇿", name: "Israel Adesanya" },
        { nat: "🇺🇸", name: "Dustin Poirier" },
        { nat: "🇺🇸", name: "Nate Diaz" },
        { nat: "🇺🇸", name: "Stipe Miocic" },
        { nat: "🇧🇷", name: "Amanda Nunes" },
        { nat: "🇨🇲", name: "Francis Ngannou" },
        { nat: "🇺🇸", name: "Rose Namajunas" },
        { nat: "🇺🇸", name: "Max Holloway" },
        { nat: "🇦🇺", name: "Alexander Volkanovski" },
        { nat: "🇵🇪", name: "Valentina Shevchenko" },
        { nat: "🇺🇸", name: "Daniel Cormier" },
        { nat: "🇺🇸", name: "Tony Ferguson" },
        { nat: "🇺🇸", name: "Tyron Woodley" },
        { nat: "🇺🇸", name: "Justin Gaethje" },
        { nat: "🇳🇿", name: "Robert Whittaker" },
        { nat: "🇺🇸", name: "Cody Garbrandt" },
    ];
    const handleTopFighterSelect = (select_fighter) => {
        const selectedFighter = allFighters.find(fighter => fighter.name === select_fighter)
        // const selectedFighterData = allFightersData.find((f) => f.name === fighter);
        setSelectedFighter(selectedFighter);
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
        fetch("http://127.0.0.1:5555/fighters")
            .then((response) => response.json())
            .then((allFightersData) => {
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
                            return b.height_cm - a.height_cm; // ''
                        } else if (sortBy === 'weight_in_kg') {
                            return b.weight_in_kg - a.weight_in_kg; // ''
                        } else if (sortBy === 'reach_in_cm') {
                            return b.reach_in_cm - a.reach_in_cm; // ''
                        } else if (sortBy === 'significant_strikes_landed_per_minute') {
                            return b.significant_strikes_landed_per_minute - a.significant_strikes_landed_per_minute; // ''
                        } else if (sortBy === 'average_submissions_attempted_per_15_minutes') {
                            return b.average_submissions_attempted_per_15_minutes - a.average_submissions_attempted_per_15_minutes; // ''
                        }
                    })
                    .slice(0, 50);
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
        setSearch(fighter.name);
    };

    return (
        <div className='graph_page'>
            {selectedFighter ? (
                <FighterData fighter={selectedFighter} handleBackButton={handleBackButton} />
            ) : (
                <div>

                    <div className="buttons-container">
                        <button className='graphs_btn' onClick={handleShowAllClick}>FILTER:</button>
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
                        <h2>
                            Popular Searches

                        </h2>
                        <ul>
                            {topFighters.map((fighter, index) => (

                                <li key={index} onClick={() => handleTopFighterSelect(fighter.name)}> {fighter.nat} {fighter.name}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <br></br>
                    <br></br>
                    {showAll && allFightersData && (
                        <div className='scatter_box'>
                            <div className="scatter_graph">
                                <h2>
                                    <Plot
                                        data={[
                                            {
                                                x: allFightersData.map(fighter => fighter.name),
                                                y: allFightersData.map(fighter => fighter[sortBy]),
                                                type: 'scattergl',
                                                mode: 'markers',
                                                marker: {
                                                    color: '#ff9100',
                                                    size: 9
                                                },
                                                line: {
                                                    color: '#7d0000',
                                                },
                                                font: { family: 'nowayback', size: 20, color: ["rgb(255,255,255)"] },
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
                                            underline: true,

                                            bordercolor: "red",

                                            titlefont: {
                                                size: 40,
                                                color: 'grey',
                                                family: 'nowayback',


                                            },
                                            xaxis: {
                                                title: '',
                                                automargin: true,
                                                showgrid: true,
                                                gridcolor: 'rgba(102, 102, 102, 0.5)',
                                                gridwidth: 16.4,
                                                color: '#e19303',
                                                tickfont: {
                                                    size: 11,
                                                    color: "grey"
                                                }
                                            },
                                            yaxis: {
                                                title: sortBy,
                                                automargin: true,
                                                showgrid: false,
                                                color: '#e19303',
                                                tickfont: {
                                                    size: 15,
                                                    color: 'grey'
                                                }
                                            },
                                            hoverlabel: {
                                                bgcolor: '#ffffff',
                                                bordercolor: 'red',
                                                font: {
                                                    family: 'Oswald',
                                                    size: 20,
                                                    color: '#c90000'
                                                }
                                            },
                                            width: 1050,
                                            height: 600,
                                            zIndex: 1000,
                                            right: 200,
                                            plot_bgcolor: 'rgba(0, 0, 0, 0)',
                                            paper_bgcolor: 'rgba(0, 0, 0, 0)'
                                        }}
                                    />
                                </h2>
                            </div>
                        </div>
                    )}

                    {showAll && allFightersData && (
                        <div className='sunburst_box'>
                            <div className="sunburst_graph">
                                <h2>
                                    <Plot
                                        data={[
                                            {
                                                labels: allFightersData.map(fighter => fighter.name),
                                                parents: allFightersData.map(fighter => fighter.parent),
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
                                                color: 'grey',
                                                family: "nowayback"
                                            },
                                            sunburstcolorway: ['#7a0000'],
                                            margin: { l: 0, r: 0, b: 0, t: 80 },
                                            width: 1500,
                                            height: 690,
                                            family: "Oswald",
                                            plot_bgcolor: 'rgba(0, 0, 0, 0)',
                                            paper_bgcolor: 'rgba(0, 0, 0, 0)',
                                            font: {
                                                family: "nowayback",
                                                size: 14,
                                                color: 'red',
                                                weight: "lighter"
                                            }
                                        }}
                                        config={{ modeBarButtonsToAdd: ['zoom2d', 'pan2d', 'zoomIn2d', 'zoomOut2d'] }}
                                    />
                                </h2>
                            </div>
                            <div className='search'>
                                <form style={{
                                    position: "absolute",
                                    top: "calc(1vh - 100vh)",
                                    left: "200%",
                                    transform: "translateX(-50%)",
                                    display: "flexbox",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    width: "70%",
                                    maxWidth: "800px",
                                    zIndex: "400",
                                    boxSizing: "border-box",
                                    paddingBottom: "0px",
                                    zIndex: 9990

                                }}>
                                    <div style={{ display: "flex", alignItems: "center", width: "100%", zIndex: "9990" }}>
                                        <button className='search-button' type="submit">Search</button>

                                        <div className="search-container">
                                            <input
                                                type="text"
                                                name="search"
                                                value={search}
                                                placeholder="Search by Name:"
                                                id="text-fighter"
                                                onChange={handleSearching}
                                                className="search-input"
                                                style={{

                                                    borderRadius: "7px",
                                                    borderWidth: "1px",
                                                    borderColor: "#ff9100",
                                                    paddingRight: "10px",
                                                    width: "80%",
                                                    height: "90%",
                                                    marginBottom: "10px",
                                                    marginRight: "250px",
                                                    marginLeft: "25px"
                                                }}
                                            />
                                        </div>

                                    </div>
                                    {search && (
                                        <div className="dropdown_search">
                                            {filteredFighters.map((fighter, index) => (
                                                <div
                                                    key={index}
                                                    onClick={() => handleDropdownSelect(fighter)}
                                                    style={{
                                                        padding: "10px",
                                                        borderBottom: "1px solid #ddd",
                                                        cursor: "pointer",
                                                        textAlign: "center",
                                                        zIndex: "9999"
                                                    }}
                                                >
                                                    {fighter.name}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}