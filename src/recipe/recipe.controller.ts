import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateRecipeDTO } from 'src/dto/create-recipe.dto';
import { RecipeService } from './recipe.service';

@Controller('recipe')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Post()
  async create(@Body() createRecipeDto: CreateRecipeDTO) {
    return await this.recipeService.create(createRecipeDto);
  }

  @Get()
  async findAll() {
    const recipes = await this.recipeService.findAll();
    return recipes;
  }
}
