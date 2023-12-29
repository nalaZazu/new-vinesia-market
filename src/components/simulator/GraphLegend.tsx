"use client";
import React from 'react'

export default function GraphLegend(props:any) {
    const { payload } = props;
    return (
        <ul style={{display: 'flex', justifyContent:'center', padding:0, margin:0 ,listStyle: "none"}}>
            {
                payload.map((entry:any, index:any) => (
                    <li key={`item-${index}`} style={{ margin: '0 15px 0 15px',display: 'flex', alignItems: 'center' }}>
                        <svg width="20" height="10" viewBox="0 0 20 10" style={{ marginRight: '5px' }}>
                            {/* Line */}
                            <line x1="0" y1="5" x2="20" y2="5" stroke={entry.color} strokeWidth="2" />
                            {/* Outer circle */}
                            <circle cx="10" cy="5" r="4" fill={entry.color} />
                            {/* Inner circle (hole) */}
                            <circle cx="10" cy="5" r="2" fill="#FFF" /> {/* Assuming white background */}
                        </svg>
                        {/* Customize as needed */}
                        <span style={{ color: entry.color }}>{entry.value}</span>
                    </li>
                ))
            }
        </ul>
    );
}
