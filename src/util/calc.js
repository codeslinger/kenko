export const calculateKcal = (recipe, servings) => {
  const fatKcal = servings * (recipe.nutrition.fat * 9);
  const proteinKcal = servings * (recipe.nutrition.protein * 4);
  const netCarbsPerServing = recipe.nutrition.carbs - recipe.nutrition.fiber;
  const netCarbKcal = servings * netCarbsPerServing;

  return fatKcal + proteinKcal + netCarbKcal;
};

export const groupSegmentsByDate = (data) => {
  let rv = {};
  for (let item of data) {
    if (!("appliesTo" in item)) {
      continue;
    }
    let key = item.appliesTo.format("YYYY-MM-DD");
    rv[key] = rv[key] || {date: item.appliesTo, entries: []};
    rv[key].entries.push(item.consumption);
  }
  // return entries grouped by date in descending order (latest date first)
  return Object.keys(rv).sort().reverse().map((key) => rv[key]);
};

export const getSegmentsForDate = (date, entries) =>
  groupSegmentsByDate(entries).find((segment) => date.isSame(segment.date, 'day'));
