import { Controller, Post, Body } from '@nestjs/common';
import { IRecipeResult } from '../interfaces/recipe.interface';
import { ParserService } from '../parser/parser.service';

@Controller('recipe')
export class RecipeController {
    constructor(private parserService: ParserService) { }
    @Post('parse')
    async parse(@Body() ingrediants: string[]) {

        return this.parserService.getIngredientsFromText(ingrediants);
    }

}
