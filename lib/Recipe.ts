import Step from "./Step";
import Ingredient from "./Ingredient";

export default class Recipe {
  title: string;
  description?: string;
  portions?: number;
  ingredients?: Ingredient[];
  steps?: Step[];

  constructor(title: string) {
    this.title = title;
  }
}
