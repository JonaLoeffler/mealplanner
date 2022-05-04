import { DateTime } from "luxon";

type unit = "Stk." | "kg" | "g" | "ml" | "l" | "pc" | "cup" | "pound" | "tsp";

class Day {
  readonly date: DateTime;
  readonly datestring: string;
  lunch?: Recipe;
  dinner?: Recipe;

  constructor(date: DateTime, lunch?: Recipe, dinner?: Recipe) {
    this.date = date;
    this.lunch = lunch;
    this.dinner = dinner;

    this.datestring = date.toISODate();
  }
}

class Mealplan {
  start: DateTime;
  end: DateTime;
  days: Day[];

  constructor(start: DateTime, end: DateTime, days: Day[]) {
    this.start = start;
    this.end = end;
    this.days = days;
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

export { Cookbook, Ingredient, Mealplan, Recipe, Step, unit, Day };
