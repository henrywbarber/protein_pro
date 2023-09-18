/**
 * @file NutritionGoals.js
 * @description Defines the NutritionGoals component responsible for managing and displaying recommended nutrition goals.
 * This component allows users to set recommended values for daily caloric and nutrient intake.
 * @author Henry Barber
 * @date 09/18/2023
 */

import React, { useState, useEffect } from 'react';
import './NutritionGoals.css';

function NutritionGoals({
    recommendedCalories,
    recommendedProtein,
    recommendedCarbs,
    recommendedFats,
    recommendedSaturatedFats,
    recommendedSodium,
    onCaloriesChange,
    onProteinChange,
    onCarbsChange,
    onFatsChange,
    onSaturatedFatsChange,
    onSodiumChange,
}) {
    // Set default recommended values
    const defaultRecommendedValues = {
        calories: 2000,
        protein: 50,
        carbs: 300,
        fats: 70,
        saturatedFats: 20,
        sodium: 2300,
    };

    // onBlur event for resetting to default value
    const handleBlur = (key, inputValue, setter) => {
        if (inputValue <= 0 || !inputValue) {
            setter(defaultRecommendedValues[key]);
        }
    };

    // Set the recommended values based on input or lack of input
    useEffect(() => {
        if (!recommendedCalories || recommendedCalories <= 0) {
            onCaloriesChange(defaultRecommendedValues.calories);
        }
        if (!recommendedProtein || recommendedProtein <= 0) {
            onProteinChange(defaultRecommendedValues.protein);
        }
        if (!recommendedCarbs || recommendedCarbs <= 0) {
            onCarbsChange(defaultRecommendedValues.carbs);
        }
        if (!recommendedFats || recommendedFats <= 0) {
            onFatsChange(defaultRecommendedValues.fats);
        }
        if (!recommendedSaturatedFats || recommendedSaturatedFats <= 0) {
            onSaturatedFatsChange(defaultRecommendedValues.saturatedFats);
        }
        if (!recommendedSodium || recommendedSodium <= 0) {
            onSodiumChange(defaultRecommendedValues.sodium);
        }
    }, [
        recommendedCalories,
        recommendedProtein,
        recommendedCarbs,
        recommendedFats,
        recommendedSaturatedFats,
        recommendedSodium,
        onCaloriesChange,
        onProteinChange,
        onCarbsChange,
        onFatsChange,
        onSaturatedFatsChange,
        onSodiumChange,
    ]);

    return (
        <div className="nutrition-goals">
            <h2>Nutrition Goals</h2>
            <div>
                <label>Recommended Calories:</label>
                <input
                    type="number"
                    value={recommendedCalories === null ? '' : recommendedCalories}
                    onChange={(e) => onCaloriesChange(e.target.value)}
                    onBlur={() => handleBlur('calories', recommendedCalories, onCaloriesChange)}
                />
            </div>
            <div>
                <label>Recommended Protein (g):</label>
                <input
                    type="number"
                    value={recommendedProtein === null ? '' : recommendedProtein}
                    onChange={(e) => onProteinChange(e.target.value)}
                    onBlur={() => handleBlur('protein', recommendedProtein, onProteinChange)}
                />
            </div>
            <div>
                <label>Recommended Carbs (g):</label>
                <input
                    type="number"
                    value={recommendedCarbs === null ? '' : recommendedCarbs}
                    onChange={(e) => onCarbsChange(e.target.value)}
                    onBlur={() => handleBlur('carbs', recommendedCarbs, onCarbsChange)}
                />
            </div>
            <div>
                <label>Recommended Fats (g):</label>
                <input
                    type="number"
                    value={recommendedFats === null ? '' : recommendedFats}
                    onChange={(e) => onFatsChange(e.target.value)}
                    onBlur={() => handleBlur('fats', recommendedFats, onFatsChange)}
                />
            </div>
            <div>
                <label>Recommended Saturated Fats (g):</label>
                <input
                    type="number"
                    value={recommendedSaturatedFats === null ? '' : recommendedSaturatedFats}
                    onChange={(e) => onSaturatedFatsChange(e.target.value)}
                    onBlur={() => handleBlur('saturatedFats', recommendedSaturatedFats, onSaturatedFatsChange)}
                />
            </div>
            <div>
                <label>Recommended Sodium (mg):</label>
                <input
                    type="number"
                    value={recommendedSodium === null ? '' : recommendedSodium}
                    onChange={(e) => onSodiumChange(e.target.value)}
                    onBlur={() => handleBlur('sodium', recommendedSodium, onSodiumChange)}
                />
            </div>
        </div>
    );
}

export default NutritionGoals;
