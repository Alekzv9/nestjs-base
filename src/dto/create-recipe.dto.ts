import { IsNotEmpty, IsString } from 'class-validator';
import { Ingredient } from 'src/interfaces/ingredient';

export class CreateRecipeDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  imagePath: string;

  ingredients: Ingredient[];
}
