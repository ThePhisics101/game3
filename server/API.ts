import {Router} from "express";

const router = Router();

router.get("/", (req, res) => res.status(401).end());
router.get("/lobby", (req, res) => res.json({data: "sth"}));
router.post("/create", (req, res) => {});
router.get("/join/:id", (req, res) => {});
router.get("*", (req, res) => res.status(404).end());

export default router;