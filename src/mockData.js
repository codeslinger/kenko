import moment from 'moment';

const mockData = {
  recipes: {
    1: {
      label: "Keto Coffee",
      type: "drink",
      units: {
        label: "fluid ounce",
        servingUnits: 16,
      },
      nutrition: {
        fat: 30,
        protein: 0,
        carbs: 0,
        fiber: 0,
      },
    },
    2: {
      label: "Cheesy Scrambled Eggs",
      type: "food",
      units: {
        label: "serving",
        servingUnits: 1,
      },
      nutrition: {
        fat: 43,
        protein: 19,
        carbs: 1.2,
        fiber: 0,
      },
    },
    3: {
      label: "Inside-out Burger",
      type: "food",
      units: {
        label: "patty",
        servingUnits: 3,
      },
      nutrition: {
        fat: 51.8,
        protein: 43.5,
        carbs: 1.8,
        fiber: 0,
      },
    },
    4: {
      label: "Tuna, Bumblebee Solid White Albacore",
      type: "food",
      units: {
        label: "ounce",
        servingUnits: 2,
      },
      nutrition: {
        fat: 0,
        protein: 13,
        carbs: 0,
        fiber: 0,
      },
    },
    5: {
      label: "Coffee, Dunkin Donuts, medium cream-only",
      type: "drink",
      units: {
        label: "fluid ounce",
        servingUnits: 14,
      },
      nutrition: {
        fat: 2.1,
        protein: 0.3,
        carbs: 0.4,
        fiber: 0,
      },
    },
    6: {
      label: "Bacon, Andy's Diner (avg of all on CalKing)",
      type: "food",
      units: {
        label: "slice",
        servingUnits: 1,
      },
      nutrition: {
        fat: 3.6,
        protein: 3.1,
        carbs: 0.1,
        fiber: 0,
      },
    },
    7: {
      label: "Baby Spinach",
      type: "food",
      units: {
        label: "ounce",
        servingUnits: 3,
      },
      nutrition: {
        fat: 0,
        protein: 2,
        carbs: 6,
        fiber: 5,
      },
    },
  },
  journalEntries: [
    {appliesTo: moment("2017-06-27"), consumption: {recipeKey: 1, servings: 1}},
    {appliesTo: moment("2017-06-27"), consumption: {recipeKey: 2, servings: 1}},
    {appliesTo: moment("2017-06-27"), consumption: {recipeKey: 6, servings: 4}},
    {appliesTo: moment("2017-06-27"), consumption: {recipeKey: 5, servings: 1}},
    {appliesTo: moment("2017-06-27"), consumption: {recipeKey: 3, servings: 1}},

    {appliesTo: moment("2017-06-28"), consumption: {recipeKey: 1, servings: 1}},
    {appliesTo: moment("2017-06-28"), consumption: {recipeKey: 2, servings: 1}},
    {appliesTo: moment("2017-06-28"), consumption: {recipeKey: 7, servings: 1}},
    {appliesTo: moment("2017-06-28"), consumption: {recipeKey: 3, servings: 1}},
    {appliesTo: moment("2017-06-28"), consumption: {recipeKey: 4, servings: 2}},
    {appliesTo: moment("2017-06-28"), consumption: {recipeKey: 7, servings: 2}},
  ],
  goals: {
    fat: {value: 141, disposition: "closeness"},
    protein: {value: 93, disposition: "closeness"},
    netCarbs: {value: 25, disposition: "stayUnder"},
    fiber: {value: 20, disposition: "stayOver"},
    kcal: {value: 1743, disposition: "closeness"},
  },
};

export default mockData;
