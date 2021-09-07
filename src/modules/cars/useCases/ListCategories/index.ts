import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
// eslint-disable-next-line import/no-unresolved
import { ListCategoryController } from "./ListCategoryController";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance();

const listCategoryUseCase = new ListCategoryUseCase(categoriesRepository);

const listCategoryController = new ListCategoryController(listCategoryUseCase);

export { listCategoryController };
