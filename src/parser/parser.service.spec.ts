import { Test, TestingModule } from '@nestjs/testing';
import { IRecipeResult } from 'src/interfaces/recipe.interface';
import { ParserService } from './parser.service';

describe('ParserService', () => {
  let service: ParserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParserService],
    }).compile();

    service = module.get<ParserService>(ParserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should parse 7 teaspoons of sugar', () => {
      const rr:IRecipeResult[]  = service.getIngredientsFromText(["seven teaspoons of sugar", "1 pound of chicken", "1 1/4 cups freshly grated Gruyère cheese", "2 - 3 large red apples"])

      expect(rr[0].amount).toEqual(7);
      expect(rr[0].unit).toEqual("teaspoon");
      expect(rr[0].ingredient).toEqual("sugar");

      expect(rr[1].amount).toEqual(1);
      expect(rr[1].unit).toEqual("pound");
      expect(rr[1].ingredient).toEqual("chicken");

      expect(rr[2].amount).toEqual(1.25);

      
    
  });

  it('should parse 2 - 3 pounds of apples', () => {
    const rr:IRecipeResult[]  = service.getIngredientsFromText([ "2 - 3 pounds large red apples"])

    expect(rr[0].amount).toEqual(2.5);
    expect(rr[0].unit).toEqual("pound");
    expect(rr[0].ingredient).toEqual("large red apples");

    
});
});
