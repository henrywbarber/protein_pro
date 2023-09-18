/**
 * @file App.js
 * @description Defines the main application component, managing state and rendering UI components.
 * This React component integrates the MealForm, NutritionGoals, MealList, and Dashboard components
 * to create the application.
 * @author Henry Barber
 * @date 09/18/2023
 */

import React, { useState } from 'react';
import './App.css';
import MealForm from './MealForm';
import Dashboard from './Dashboard';
import NutritionGoals from './NutritionGoals';
import MealList from './MealList';

function App() {
  // Example state to store meal data
  const [meals, setMeals] = useState([]);
  const [dailyIntake, setDailyIntake] = useState({
    calories: 0,
    protein: 0,
    carbs: 0,
    fats: 0,
    sodium: 0,
    saturatedFats: 0,
  });

  // State variables to store user-input recommended values
  const [recommendedCalories, setRecommendedCalories] = useState(0);
  const [recommendedProtein, setRecommendedProtein] = useState(0);
  const [recommendedCarbs, setRecommendedCarbs] = useState(0);
  const [recommendedFats, setRecommendedFats] = useState(0);
  const [recommendedSaturatedFats, setRecommendedSaturatedFats] = useState(0);
  const [recommendedSodium, setRecommendedSodium] = useState(0);

  const handleAddMeal = (meal) => {
    // Add a meal to the state and update daily intake values
    setMeals([...meals, meal]);

    // Calculating the updated daily intake values
    setDailyIntake((prevIntake) => ({
      calories: prevIntake.calories + meal.calories,
      protein: prevIntake.protein + meal.protein,
      carbs: prevIntake.carbs + meal.carbs,
      fats: prevIntake.fats + meal.fats,
      sodium: prevIntake.sodium + meal.sodium,
      saturatedFats: prevIntake.saturatedFats + meal.saturatedFats,
    }));
  };

  const handleRemoveMeal = (removedMeal) => {
    // Remove meal from the meals array
    const updatedMeals = meals.filter((meal) => meal !== removedMeal);

    // Calculate the updated daily intake values
    const updatedIntake = updatedMeals.reduce(
      (intake, meal) => ({
        calories: intake.calories + meal.calories,
        protein: intake.protein + meal.protein,
        carbs: intake.carbs + meal.carbs,
        fats: intake.fats + meal.fats,
        sodium: intake.sodium + meal.sodium,
        saturatedFats: intake.saturatedFats + meal.saturatedFats,
      }),
      { calories: 0, protein: 0, carbs: 0, fats: 0, sodium: 0, saturatedFats: 0 }
    );

    // Update the state with new meals and daily intake values
    setMeals(updatedMeals);
    setDailyIntake(updatedIntake);
  };

  return (
    <div className="App">
      
      {/* Header Section */}
      <div className="header">
        <h1>Protein Pro</h1>
        <h2>Daily Nutritional Tracker</h2>
      </div>

      {/* Grid Layout */}
      <div className="grid-container">

        {/* Meal Form */}
        <div className="grid-item">
          <MealForm onAddMeal={handleAddMeal} />
        </div>

        {/* Nutrition Goals */}
        <div className="grid-item">
          <NutritionGoals
            recommendedCalories={recommendedCalories}
            recommendedProtein={recommendedProtein}
            recommendedCarbs={recommendedCarbs}
            recommendedFats={recommendedFats}
            recommendedSodium={recommendedSodium}
            recommendedSaturatedFats={recommendedSaturatedFats}
            onCaloriesChange={(value) => setRecommendedCalories(value)}
            onProteinChange={(value) => setRecommendedProtein(value)}
            onCarbsChange={(value) => setRecommendedCarbs(value)}
            onFatsChange={(value) => setRecommendedFats(value)}
            onSaturatedFatsChange={(value) => setRecommendedSaturatedFats(value)}
            onSodiumChange={(value) => setRecommendedSodium(value)}
          />
        </div>

        {/* Meal List */}
        <div className="grid-item">
          <MealList meals={meals} onRemoveMeal={handleRemoveMeal} />
        </div>

        {/* Dashboard */}
        <div className="grid-item">
          <Dashboard
            dailyCalories={dailyIntake.calories}
            dailyProtein={dailyIntake.protein}
            dailyCarbs={dailyIntake.carbs}
            dailyFats={dailyIntake.fats}
            dailySodium={dailyIntake.sodium}
            dailySaturatedFats={dailyIntake.saturatedFats}
            recommendedCalories={recommendedCalories}
            recommendedProtein={recommendedProtein}
            recommendedCarbs={recommendedCarbs}
            recommendedFats={recommendedFats}
            recommendedSodium={recommendedSodium}
            recommendedSaturatedFats={recommendedSaturatedFats}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
