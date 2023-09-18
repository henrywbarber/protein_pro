/**
 * @file MealList.js
 * @description Defines the MealList component responsible for displaying a list of meals.
 * This component renders a table with meal details and provides the ability to remove meals.
 * @author Henry Barber
 * @date 09/18/2023
 */

import React from 'react';
import './MealList.css';

function MealList({ meals, onRemoveMeal }) {
    return (
        <div className="meal-list">
            <h2>Meal List</h2>
            {meals.length === 0 ? (
                // Placeholder message if no meals are added
                <p className="placeholder">No meals added yet.</p>
            ) : (
                // Render a table if meals exist
                <table>
                    <thead>
                        <tr>
                            <th>Meal Name</th>
                            <th>Calories</th>
                            <th>Protein (g)</th>
                            <th>Carbs (g)</th>
                            <th>Fats (g)</th>
                            <th>Sodium (mg)</th>
                            <th>Saturated Fats (g)</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {meals.map((meal, index) => (
                            // Map over the meals array and render each meal as a table row
                            <tr key={index} className="meal-list-item">
                                <td>{meal.mealName}</td>
                                <td>{meal.calories}</td>
                                <td>{meal.protein}</td>
                                <td>{meal.carbs}</td>
                                <td>{meal.fats}</td>
                                <td>{meal.sodium}</td>
                                <td>{meal.saturatedFats}</td>
                                <td>
                                    {/* Button to remove meal */}
                                    <button onClick={() => onRemoveMeal(meal)}>Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default MealList;
