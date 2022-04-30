type unit = "Stk." | "kg" | "g" | "ml" | "l" | "pc" | "cup" | "pound" | "tsp";

class Mealplan {
  readonly start: Date;
  readonly lunches: Recipe[];
  readonly dinners: Recipe[];

  constructor(start: Date, lunches: Recipe[], dinners: Recipe[]) {
    this.start = start;
    this.lunches = lunches;
    this.dinners = dinners;
  }
}

class Recipe {
  title: string;
  description?: string;
  portions?: number;
  ingredients?: Ingredient[];
  steps?: Step[];

  constructor(title: string) {
    this.title = title;
  }
}

class Ingredient {
  name: string;
  unit: unit;
  amount: number;

  constructor(name: string, unit: unit, amount: number) {
    this.name = name;
    this.unit = unit;
    this.amount = amount;
  }
}

class Step {
  description: string;

  constructor(description: string) {
    this.description = description;
  }
}

type Cookbook = Recipe[];

export { Cookbook, Ingredient, Mealplan, Recipe, Step, unit };
