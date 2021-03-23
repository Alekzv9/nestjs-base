import { Ingredient } from 'src/interfaces/ingredient';

export class CreateRecipeDTO {
  name: string;
  description: string;
  imagePath: string;
  ingredients: Ingredient[];
}
