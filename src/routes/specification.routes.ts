import { Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const specificationRouter = Router();

specificationRouter.post("/", (req, res) => {
  return createSpecificationController.handle(req, res);
});

export { specificationRouter };
