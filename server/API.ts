import {Router, json} from "express";
import cors from "cors";

const router = Router();

router.get("/", (req, res) => res.status(401).end());

router.use(["/create", "/join/:id"], cors(), json());
router.post("/create", (req, res) => {
  console.log(req.body);
  res.end();
});
router.post("/join/:id", (req, res) => {
  console.log(req.params.id, req.body);
  res.end();
});
router.get("*", (req, res) => res.status(404).end());

export default router;