import Recipe from "../../lib/Recipe";
import { Request, Response } from "express";

export const index = (req: Request, res: Response) => {
  const recipes: [Recipe] = [
    {
      title: "Spaghetti Aglio e Olio",
      description: "",
      ingredients: [
        {
          name: "Spaghetti",
          unit: "g",
          amount: 500,
        },
      ],
      steps: [
        {
          description: "Die Spaghetti nach Packungsanweisungen kochen",
        },
      ],
    },
  ];

  res.json(recipes);
};
