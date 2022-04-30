import { Ingredient, unit } from "./types";

type Target = "metric" | "imperial" | "original";

type Conversion<unit> = Map<unit, { target: unit; factor: number }>;
type Targets<Target> = Map<Target, Conversion<unit>>;

const metric: Conversion<unit> = new Map([
  ["pc", { target: "Stk.", factor: 1 }],
  ["cup", { target: "g", factor: 236.5882 }],
  ["pound", { target: "g", factor: 453.5924 }],
  ["tsp", { target: "g", factor: 4.9289215 }],
]);

const imperial: Conversion<unit> = new Map([
  ["Stk.", { target: "pc", factor: 1 }],
  ["kg", { target: "kg", factor: 1 }],
  ["g", { target: "g", factor: 1 }],
  ["l", { target: "l", factor: 1 }],
]);

const original: Conversion<unit> = new Map([]);

const targets: Targets<Target> = new Map([
  ["metric", metric],
  ["imperial", imperial],
  ["original", original],
]);

const convert = function (ingredient: Ingredient, target: Target): Ingredient {
  const conversion = targets?.get(target)?.get(ingredient.unit);

  if (!conversion) return ingredient;

  return {
    name: ingredient.name,
    unit: conversion.target,
    amount: ingredient.amount * conversion.factor,
  };
};

export { convert, Target };
