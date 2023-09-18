/**
 * @file Dashboard.js
 * @description Defines the Dashboard component responsible for displaying daily nutritional data.
 * This component renders a set of DashboardCircle components to visualize nutritional information.
 * @author Henry Barber
 * @date 09/18/2023
 */

import React from 'react';
import DashboardCircle from './DashboardCircle';
import './Dashboard.css';

/* Responsible for rendering daily nutritional data */
function Dashboard({
    dailyCalories,
    dailyProtein,
    dailyCarbs,
    dailyFats,
    dailySodium,
    dailySaturatedFats,
    recommendedCalories,
    recommendedProtein,
    recommendedCarbs,
    recommendedFats,
    recommendedSodium,
    recommendedSaturatedFats
}) {
    return (
        <div className="dashboard">
            <div className="dashboard-grid">

                {/* Calories */}
                <DashboardCircle
                    label="Calories"
                    value={dailyCalories}
                    unit=""
                    recommended={recommendedCalories}
                />

                {/* Protein */}
                <DashboardCircle
                    label="Protein"
                    value={dailyProtein}
                    unit="g"
                    recommended={recommendedProtein}
                />

                {/* Carbs */}
                <DashboardCircle
                    label="Carbs"
                    value={dailyCarbs}
                    unit="g"
                    recommended={recommendedCarbs}
                />

                {/* Fats */}
                <DashboardCircle
                    label="Fats"
                    value={dailyFats}
                    unit="g"
                    recommended={recommendedFats}
                />

                {/* Sodium */}
                <DashboardCircle
                    label="Sodium"
                    value={dailySodium}
                    unit="mg"
                    recommended={recommendedSodium}
                />

                {/* Saturated Fats */}
                <DashboardCircle
                    label="Saturated Fats"
                    value={dailySaturatedFats}
                    unit="g"
                    recommended={recommendedSaturatedFats}
                />
            </div>
        </div>
    );
}

export default Dashboard;
