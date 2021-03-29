import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { UserData } from 'src/core/user-data.decorator';
import { CreateRecipeDTO } from 'src/dto/create-recipe.dto';
import { User } from 'src/interfaces/user';
import { RecipeService } from './recipe.service';

@UseGuards(AuthGuard)
@Controller('recipe')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Post()
  async create(@Body() createRecipeDto: CreateRecipeDTO) {
    return await this.recipeService.create(createRecipeDto);
  }

  @Get()
  async findAll(@UserData() user: User) {
    console.log(user);
    const recipes = await this.recipeService.findAll();
    return recipes;
  }
}
