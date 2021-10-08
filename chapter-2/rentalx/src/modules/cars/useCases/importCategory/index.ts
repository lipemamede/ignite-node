import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository'
import { ImportCategoryController } from "./importCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const categoriesCategory = CategoriesRepository.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase(categoriesCategory);
const importCategoryController = new ImportCategoryController(
  importCategoryUseCase
);

export { importCategoryController }
