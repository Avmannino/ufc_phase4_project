import React from "react";
import Plot from "react-plotly.js";
import Outline from './assets/fighter_outline.png';
import './FighterData.css';

// Define the top 20 fighters array
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

export default function FighterData({ fighter, handleBackButton, handleTopFighterSelect }) {
    // Example data for heatmap, replace with actual data as needed
    const heatmapData = [fighter.significant_strikes_landed_per_minute];

    return (
        <>
            <div className="fighter_data">
                <input type="submit" className="backButton" value="SEARCH 🔎︎" onClick={(event) => handleBackButton(event)} />
            </div>
            <div className="fighter_table">
                <h2>FIGHTER:</h2>
                <br />
                <h3>{fighter.name}</h3>
                <h6>{fighter.nickname ? '"' + fighter.nickname + '"' : null}</h6>
                <h4>OVERALL: {fighter.wins}-{fighter.losses}-{fighter.draws}</h4>
                <br />
                <Plot
                    data={[
                        {
                            type: 'table',
                            header: {
                                align: "center",
                                line: { width: 0.5, color: 'rgba(0,0,0,0)' },
                                fill: { color: "rgba(0,0,0,0)" },
                                font: { family: "Sternbach", size: 3, color: "red" }
                            },
                            cells: {
                                values: [
                                    ["▻ Date of Birth:", "▻ Stance:", "▻ Height (cm):", "▻ Weight (kg):", "▻ Reach (cm):", "▻ Strikes Landed (per min.):", "▻ Striking Accuracy (%):", "▻ Strikes Absorbed (per min.):", "▻ Strikes Blocked (per min.):", "▻ Takedowns Landed (per 15 min.):", "▻ Takedown Accuracy:", "▻ Takedown Defense:", "▻ Submits Attempted (per 15 min.):"],
                                    [
                                        fighter.date_of_birth === 0 ? 0 : (fighter.date_of_birth || "null"),
                                        fighter.stance === 0 ? 0 : (fighter.stance || "null"),
                                        fighter.height_cm === 0 ? 0 : (fighter.height_cm || "null"),
                                        fighter.weight_in_kg === 0 ? 0 : (fighter.weight_in_kg || "null"),
                                        fighter.reach_in_cm === 0 ? 0 : (fighter.reach_in_cm || "null"),
                                        fighter.significant_strikes_landed_per_minute === 0 ? 0 : (fighter.significant_strikes_landed_per_minute || "null"),
                                        fighter.significant_striking_accuracy === 0 ? 0 : (fighter.significant_striking_accuracy || "null"),
                                        fighter.significant_strikes_absorbed_per_minute === 0 ? 0 : (fighter.significant_strikes_absorbed_per_minute || "null"),
                                        fighter.significant_strike_defense === 0 ? 0 : (fighter.significant_strike_defense || "null"),
                                        fighter.average_takedowns_landed_per_15_minutes === 0 ? 0 : (fighter.average_takedowns_landed_per_15_minutes || "null"),
                                        fighter.takedown_accuracy === 0 ? 0 : (fighter.takedown_accuracy || "null"),
                                        fighter.takedown_defense === 0 ? 0 : (fighter.takedown_defense || "null"),
                                        fighter.average_submissions_attempted_per_15_minutes === 0 ? 0 : (fighter.average_submissions_attempted_per_15_minutes || "null")
                                    ]
                                ],
                                align: "center",
                                line: { color: "transparent", width: 0.5 },
                                font: { family: "Sternbach", size: 28, color: ["rgb(225,147,3)"] },
                                height: 60, // Increase the height of the cells
                                fill: { color: "rgba(0,0,0,0)" },
                                paper_bgcolor: 'rgba(0,0,0,0)'
                            }
                        }
                    ]}
                    layout={{

                        font: { family: "Sternbach", size: 40, color: ["pink"] },
                        width: 1250,
                        height: 970,
                        paper_bgcolor: 'rgba(10,10,10,0.6)',
                        // plot_bgcolor: 'rgba(0,0,0,0)',
                    }}
                />
            </div>
            <div className="top-fighters-list">
                <h2>Top 20 Fighters</h2>
                <ul>
                    {topFighters.map((fighter, index) => (
                        <li key={index} onClick={() => handleTopFighterSelect(fighter)}>{fighter}</li>
                    ))}
                </ul>
            </div>
            {/* Heatmap with custom background */}
            {/* <div className="heatmap_container">
                <h2>Heatmap: Strikes Landed per Minute</h2>
                <Plot
                    data={[
                        {
                            z: fighter.significant_strikes_landed_per_minute, // Replace with actual heatmap data
                            type: 'heatmap',
                            colorscale: 'RdBu',
                            hoverongaps: false,
                        }
                    ]}
                    layout={{
                        width: 1000,
                        height: 1100,
                        paper_bgcolor: 'rgba(0,0,0,0)', // Set the background to transparent
                        plot_bgcolor: 'rgba(0,0,0,0)', // Set the plot area background to transparent
                        images: [{ 
                            source: Outline,
                            xref: 'paper',
                            yref: 'paper',
                            x: 0,
                            y: 1,
                            sizex: 1,
                            sizey: 1,
                            sizing: 'cover',
                            layer: 'below'
                        }]
                    }}
                />
            </div> */}
        </>
    );
}
