"use client";
import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  if (!ingredient) return [];
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await res.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function loadMealIdeas() {
      const ideas = await fetchMealIdeas(ingredient);
      setMeals(ideas);
    }
    loadMealIdeas();
  }, [ingredient]);


  return (
    <div>
      <h3>
        Meal Ideas for <span className="font-bold">{ingredient || "..."}</span>
      </h3>
      {meals.length === 0 ? (
        <p>No meal ideas found.</p>
      ) : (
        <ul>
          {meals.map((meal) => (
            <li key={meal.idMeal}>{meal.strMeal}</li>
          ))}
        </ul>
      )}
    </div>
  );
}