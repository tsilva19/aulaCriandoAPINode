/* eslint-disable prettier/prettier */
import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post("/", (req, res) =>{
  const {name, description} = req.body;
  
  const categoryAlreadyExists = categoriesRepository.findByName(name);

  if(categoryAlreadyExists){
    return res.status(400).json({error: "Category Already exists!!" })
  }

  categoriesRepository.create({ name, description})
  
  return res.status(201).send();
});

categoriesRoutes.get("/", (request, response) =>{
  const all = categoriesRepository.list();

  return response.json(all);
})
export { categoriesRoutes };