import Recipe from "./Recipe";

export default class Mealplan {
  readonly start: Date;
  readonly lunches: Recipe[];
  readonly dinners: Recipe[];

  constructor(start: Date, lunches: Recipe[], dinners: Recipe[]) {
    this.start = start;
    this.lunches = lunches;
    this.dinners = dinners;
  }
}
