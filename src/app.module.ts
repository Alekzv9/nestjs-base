import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { LoggerMiddleware } from './core/logger.middleware';
import { RecipeController } from './recipe/recipe.controller';
import { RecipeService } from './recipe/recipe.service';

@Module({
  imports: [AuthModule],
  controllers: [AppController, RecipeController],
  providers: [AppService, RecipeService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
