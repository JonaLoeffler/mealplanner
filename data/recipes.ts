import Recipe from "../lib/Recipe";

const recipes: Recipe[] = [
  {
    title: "Spaghetti Aglio e Olio",
    portions: 2,
    ingredients: [
      {
        name: "Knolle Knoblauch",
        unit: "pc",
        amount: 0.5,
      },
      {
        name: "Petersilie, frisch",
        unit: "cup",
        amount: 0.5,
      },
      {
        name: "Olivenöl",
        unit: "cup",
        amount: 0.5,
      },
      {
        name: "Chiliflocken",
        unit: "tsp",
        amount: 1,
      },
      {
        name: "Spaghetti",
        unit: "pound",
        amount: 0.5,
      },
      {
        name: "Zitrone",
        unit: "pc",
        amount: 0.5,
      },
    ],
    steps: [
      {
        description:
          "Heavily salt a large pot of water, and bring to a boil. Cook pasta until slightly underdone while completing the steps below.",
      },
      {
        description:
          "Slice the garlic cloves thinly, and set aside. Heat olive oil in a large sauté pan over medium heat until barely shimmering. Add sliced garlic, stirring constantly, until softened and turning golden on the edges. Add the red pepper flakes and lower the heat to medium-low.",
      },
      {
        description:
          "Add the pasta, drained, with about 1/4 cup reserved pasta cooking water. Squeeze lemon juice over top, and mix into the pasta with the fresh parsley. If sauce is too watery, continue to cook for 1-3 minutes, until pasta has absorbed more liquid. Season with salt and pepper, and serve.",
      },
    ],
  },
];

export default recipes;
