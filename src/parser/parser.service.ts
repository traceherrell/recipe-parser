
import { map } from "lodash";
import { IRecipeResult } from "src/interfaces/recipe.interface";

import { Injectable } from '@nestjs/common';
const parser = require('./recipe-parser');

@Injectable()
export class ParserService {

    public getIngredientsFromText(
        recipeInstructions: string[]
    ): IRecipeResult[] {

      return map(recipeInstructions, (instruction: string) => {

            const parts = parser.parse(instruction);
        
            //todo: try and convert volume to weight in grams based on ingredient

            return {
                instruction,
                unit: parts.unit,
                amount: parts.amount,
                ingredient: parts.ingredient,
                imprecise_unit: parts.imprecise_unit,
                converted_grams: 0
            };

        });
    }

}


