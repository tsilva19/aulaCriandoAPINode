/* eslint-disable prettier/prettier */
import { Router } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoryController } from "../modules/cars/useCases/ListCategories";
// import { PostgresCategoriesRepository } from "../repositories/PostgresCategoriesRepository";
import { importCategoryController } from "../modules/cars/useCases/importCategories";


const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",

});

categoriesRoutes.post("/", (req, res) =>{
    return createCategoryController.handle(req, res);
});

categoriesRoutes.get("/", (request, response) =>{
  return listCategoryController.handle(request, response)
})

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController.handle( request, response);
});

export { categoriesRoutes };