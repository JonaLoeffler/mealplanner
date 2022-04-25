import recipes from "../../data/recipes";
import { Request, Response } from "express";

export const index = (req: Request, res: Response) => {
  res.json(recipes);
};
