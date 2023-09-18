/**
 * @file DashboardCircle.js
 * @description Defines the DashboardCircle component responsible for rendering a circular progress indicator.
 * This component calculates and displays a progress circle based on input values.
 * @author Henry Barber
 * @date 09/18/2023
 */

import React from 'react';
import './DashboardCircle.css';

/* Renders a circular progress bar */
function DashboardCircle({ label, value, recommended }) {
    // Prevent division by zero
    let percentage = recommended !== 0 ? (value / recommended) * 100 : 0;

    // Calculate stroke-dasharray and stroke-dashoffset
    const circumference = 2 * Math.PI * 45;
    let dasharray = circumference;
    let dashoffset = circumference - (circumference * percentage) / 100;

    // Contingent colors
    let fillColor = '#6b584c'; // My classic brown
    if (percentage >= 100) {
        dasharray = circumference;
        fillColor = 'green'; // In good range
        dashoffset = 0;
    }
    if (percentage >= 110) {
        fillColor = 'orange'; // Over-intake
    }

    // Caps percentage at 100%, prevents circle from undrawing
    percentage = Math.min(percentage, 100);

    return (
        <div className="dashboard-circle">
            <svg className="circle" width="100" height="100">

                {/* Background Circle */}
                <circle
                    className="bg-circle"
                    r="45"
                    cx="50"
                    cy="50"
                    fill="transparent"
                />

                {/* Progress Circle */}
                <circle
                    className="fill-circle"
                    r="45"
                    cx="50"
                    cy="50"
                    fill="transparent"
                    strokeDasharray={dasharray}
                    strokeDashoffset={dashoffset}
                    stroke={fillColor}
                />

                {/* Text Value */}
                <text x="50" y="50" className="category-value">
                    {value}
                </text>
            </svg>

            {/* Label */}
            <p className="category-label">{label}</p>
        </div>
    );
}

export default DashboardCircle;