import { Ingredient } from './ingredient';

export interface Recipe {
  id: string;
  name: string;
  description: string;
  imagePath: string;
  ingredients: Ingredient[];
}
