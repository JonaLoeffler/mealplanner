type unit = "pc" | "kg" | "g" | "ml" | "l";

export default class Ingredient {
  name: string;
  unit: unit;
  amount: number;

  constructor(name: string, unit: unit, amount: number) {
    this.name = name;
    this.unit = unit;
    this.amount = amount;
  }
}
