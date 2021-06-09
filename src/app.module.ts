import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipeController } from './recipe/recipe.controller';
import { ParserService } from './parser/parser.service';

@Module({
  imports: [],
  controllers: [AppController, RecipeController],
  providers: [AppService, ParserService],
})
export class AppModule {}
