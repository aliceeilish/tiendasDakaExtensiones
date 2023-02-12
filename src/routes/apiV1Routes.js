const { Router } = require("express");
import { getProducts, basicCreate } from "../controllers/basicController";

const router = Router();

// working api/v1/create read update delete
router.get("/", getProducts);
router.post("/api/v1/create", basicCreate);
router.put("/api/v1/update");
router.delete("/api/v1/delete");

module.exports = router;
