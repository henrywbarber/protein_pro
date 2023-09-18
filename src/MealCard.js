/**
 * @file MealCard.js
 * @description Defines the MealCard component responsible for rendering meal information and removal button.
 * This component receives meal data and a function to remove the meal as props.
 * @author Henry Barber
 * @date 09/18/2023
 */

import React from 'react';
import './MealCard.css';

/* Displays information past meal info with remove button */
function MealCard({ meal, onRemoveMeal }) {
    /* Handles remove button click */
    const handleRemoveClick = () => {
        onRemoveMeal(meal);
    };

    return (
        <div className="meal-card">
            <div className="meal-info">
                <h3>{meal.name}</h3>
                <p>Calories: {meal.calories}</p>
                <p>Protein: {meal.protein}</p>
                <p>Carbs: {meal.carbs}</p>
                <p>Fats: {meal.fats}</p>
                <p>Saturated Fats: {meal.saturatedFats}</p>
                <p>Sodium: {meal.sodium}</p>
            </div>
            <button className="remove-button" onClick={handleRemoveClick}>
                Remove
            </button>
        </div>
    );
}

export default MealCard;
