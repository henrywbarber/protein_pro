/**
 * @file MealForm.js
 * @description Defines the MealForm component responsible for adding meals to the application.
 * This component includes a form to input meal details and an "Add Meal" button.
 * @author Henry Barber
 * @date 09/18/2023
 */

import React, { useState } from 'react';
import './MealForm.css';

/* Allows users to add new meal */
function MealForm({ onAddMeal }) {
    // State variables for meal details
    const [mealName, setMealName] = useState('');
    const [calories, setCalories] = useState(0);
    const [protein, setProtein] = useState(0);
    const [carbs, setCarbs] = useState(0);
    const [fats, setFats] = useState(0);
    const [saturatedFats, setSaturatedFats] = useState(0);
    const [sodium, setSodium] = useState(0);

    /* Handles Add Meal button */
    const handleAddMeal = () => {
        const meal = {
            mealName,
            calories,
            protein,
            carbs,
            fats,
            saturatedFats,
            sodium,
        };

        // Add the new meal
        onAddMeal(meal);

        // Reset form fields
        setMealName('');
        setCalories(0);
        setProtein(0);
        setCarbs(0);
        setFats(0);
        setSaturatedFats(0);
        setSodium(0);
    };

    return (
        <div className="meal-form">
            
            {/* Form Title */}
            <h2>Add a Meal</h2>

            {/* Meal Name Input */}
            <div className="form-group meal-name">
                <label htmlFor="mealName">Meal Name:</label>
                <input
                    type="text"
                    id="mealName"
                    value={mealName}
                    onChange={(e) => setMealName(e.target.value)}
                />
            </div>

            {/* Two-Column Layout for Nutritional Information */}
            <div className="columns">

                {/* Left Column */}
                <div className="column">

                    {/* Calories */}
                    <div className="form-group">
                        <label htmlFor="calories">Calories:</label>
                        <input
                            type="number"
                            id="calories"
                            style={{ paddingLeft: '5px' }}
                            value={calories}
                            onChange={(e) => setCalories(Number(e.target.value))}
                        />
                    </div>

                    {/* Carbohydrates */}
                    <div className="form-group">
                        <label htmlFor="carbs">Carbohydrates (g):</label>
                        <input
                            type="number"
                            id="carbs"
                            value={carbs}
                            onChange={(e) => setCarbs(Number(e.target.value))}
                        />
                    </div>

                    {/* Saturated Fats */}
                    <div className="form-group">
                        <label htmlFor="saturatedFats">Saturated Fats (g):</label>
                        <input
                            type="number"
                            id="saturatedFats"
                            value={saturatedFats}
                            onChange={(e) => setSaturatedFats(Number(e.target.value))}
                        />
                    </div>
                </div>

                {/* Right Column */}
                <div className="column">

                    {/* Protein */}
                    <div className="form-group">
                        <label htmlFor="protein">Protein (g):</label>
                        <input
                            type="number"
                            id="protein"
                            value={protein}
                            onChange={(e) => setProtein(Number(e.target.value))}
                        />
                    </div>

                    {/* Fats */}
                    <div className="form-group">
                        <label htmlFor="fats">Fats (g):</label>
                        <input
                            type="number"
                            id="fats"
                            value={fats}
                            onChange={(e) => setFats(Number(e.target.value))}
                        />
                    </div>

                    {/* Sodium */}
                    <div className="form-group">
                        <label htmlFor="sodium">Sodium (mg):</label>
                        <input
                            type="number"
                            id="sodium"
                            value={sodium}
                            onChange={(e) => setSodium(Number(e.target.value))}
                        />
                    </div>
                </div>
            </div>
            
            {/* Add Meal Button */}
            <button onClick={handleAddMeal}>Add Meal</button>
        </div>
    );

}

export default MealForm;
