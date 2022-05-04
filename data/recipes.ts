import { Cookbook } from "../lib/types";

import aglioeolio from "./recipes/aglioeolio";
import carbonara from "./recipes/carbonara";
import avocadotoast from "./recipes/avocadotoast";
import chilisincarne from "./recipes/chilisincarne";
import lasagne from "./recipes/lasagne";

const recipes: Cookbook = [
  aglioeolio,
  carbonara,
  avocadotoast,
  chilisincarne,
  lasagne,
  {
    title: "Spaghetti Bolognese",
  },
  {
    title: "Brot",
  },
  {
    title: "Tacosalat",
  },
  {
    title: "Ofengemüse",
  },
  {
    title: "Toast Hawaii",
  },
];

export default recipes;
