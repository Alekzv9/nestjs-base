import { APP_GUARD } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { RecipeController } from './recipe.controller';
import { RecipeService } from './recipe.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Module({
  providers: [
    RecipeService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
  controllers: [RecipeController],
})
export class RecipeModule {}
