import { Injectable } from '@nestjs/common';
import { CreateRecipeDTO } from 'src/dto/create-recipe.dto';
import { Recipe } from 'src/interfaces/recipe';

const RECIPES: Recipe[] = [
  {
    id: 'abjhsd12',
    name: 'chilaquiles',
    description: 'prepare with lots of love',
    imagePath: '',
    ingredients: [
      {
        name: 'tortilla',
        amount: 2,
        id: 'asjd ',
      },
    ],
  },
];

@Injectable()
export class RecipeService {
  async create(recipeDto: CreateRecipeDTO) {
    const recipe: Recipe = null;
    for (let key in recipeDto) {
      recipe[key] = recipeDto[key];
    }
    RECIPES.push(recipe);
    return { message: 'Recipe created' };
  }

  async findAll(): Promise<Recipe[]> {
    return RECIPES;
  }

  async find(id: string): Promise<Recipe> {
    return RECIPES[id];
  }

  async update(id: string, recipeDto: CreateRecipeDTO) {
    const recipe = await Promise.resolve(RECIPES[id]);
    for (let key in recipeDto) {
      recipe[key] = recipeDto[key];
    }
    return { message: 'Recipe updated' };
  }
}
