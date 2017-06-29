export const calculateKcal = (recipe, servings) => {
  const fatKcal = servings * (recipe.nutrition.fat * 9);
  const proteinKcal = servings * (recipe.nutrition.protein * 4);
  const netCarbsPerServing = recipe.nutrition.carbs - recipe.nutrition.fiber;
  const netCarbKcal = servings * netCarbsPerServing;

  return fatKcal + proteinKcal + netCarbKcal;
};
