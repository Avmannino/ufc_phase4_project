import React, { useEffect, useState } from 'react';
import FightersList from './FightersList';
import FighterData from './FighterData';
import Plot from "react-plotly.js";
import "./Data.css";

export default function Data() {
    const [allFighters, setAllFighters] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedFighter, setSelectedFighter] = useState(false);
    const [showAll, setShowAll] = useState(false);
    const [allFightersData, setAllFightersData] = useState(null);
    const [sortBy, setSortBy] = useState('wins');

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
                            return a.losses - b.losses; // Sort by losses (ascending)
                        } else if (sortBy === 'height_cm') {
                            return b.height_cm - a.height_cm; // Sort by height (descending)
                        } else if (sortBy === 'weight_in_kg') {
                            return b.weight_in_kg - a.weight_in_kg; // Sort by weight (descending)
                        } else if (sortBy === 'reach_in_cm') {
                            return b.reach_in_cm - a.reach_in_cm; // Sort by reach (descending)
                        }
                    })
                    .slice(0, 100); // Select top 100 fighters after sorting
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

    return (
        <div>
            {selectedFighter ? (
                <FighterData fighter={selectedFighter} handleBackButton={handleBackButton} />
            ) : (
                <div>
                    <button onClick={handleShowAllClick}>Show All</button>
                    <select value={sortBy} onChange={handleSortByChange}>
                        <option value="wins">Wins</option>
                        <option value="draws">Draws</option>
                        <option value="losses">Losses</option>
                        <option value="height_cm">Height (cm)</option>
                        <option value="weight_in_kg">Weight (kg)</option>
                        <option value="reach_in_cm">Reach (cm)</option>
                    </select>
                    <form onChange={handleSearching} style={{ marginLeft: "20px", paddingBottom: "20px", paddingTop: "25px", fontSize: "39px" }}>
                        <input type="text" name="search" value={search} placeholder="Fighter Name Here" id="text-fighter" style={{ backgroundColor: "rgba(99, 15, 4,.8)", borderRadius: "4px", height: "50px", width: "500px", marginLeft: "20px", color: "white", textAlign: "center", fontSize: "30px" }} />
                    </form>
                    <FightersList filteredFighters={filteredFighters} handleFighterClick={handleFighterClick} />
                    {showAll && allFightersData && (
                        <div className="fighter_data">
                            <h2>
                                <Plot
                                    data={[
                                        {
                                            x: allFightersData.map(fighter => fighter.name),
                                            y: allFightersData.map(fighter => fighter[sortBy]),
                                            type: 'scattergl',
                                            mode: 'markers',
                                            marker: { color: 'blue' },
                                            name: `Top 100 Fighters - Sorted by ${sortBy}`
                                        }
                                    ]}
                                    layout={{ title: `Top 100 Fighters - Sorted by ${sortBy}`, xaxis: { title: 'Fighter' } }}
                                />
                            </h2>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
