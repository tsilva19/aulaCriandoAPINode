/* eslint-disable prettier/prettier */
import { Router } from "express";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoryController } from "../modules/cars/useCases/ListCategories";
// import { PostgresCategoriesRepository } from "../repositories/PostgresCategoriesRepository";

const categoriesRoutes = Router();


categoriesRoutes.post("/", (req, res) =>{
    return createCategoryController.handle(req, res);
});

categoriesRoutes.get("/", (request, response) =>{
  return listCategoryController.handle(request, response)
})
export { categoriesRoutes };