import Step from "./Step";
import Ingredient from "./Ingredient";

export default class Recipe {
  title: string;
  description: string;
  ingredients: [Ingredient];
  steps: [Step];
}
