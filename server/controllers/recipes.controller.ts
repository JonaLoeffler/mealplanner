import recipes from "../../data/recipes";
import { Response } from "express";

export const index = (res: Response): Response => {
  return res.json(recipes);
};
