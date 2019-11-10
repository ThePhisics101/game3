import {Router, json} from "express";
import cors from "cors";
import {games} from "./index";
import {Game} from "./types";

const router = Router();

const paginationParams = ["name", "order"];
const buildNextPage = (query: any, url: string) => {
  const {count = 50, offset = 0} = query;
  let q = paginationParams.filter(v => query[v]).map(v => `&${v}=${query[v]}`).join("");
  return `${url}?count=${count}&offset=${parseInt(offset)+parseInt(count)}${q}`;
};

const sorting = {
  name: (a: Game, b: Game): number => a.name.localeCompare(b.name, "en", {sensitivity: "base"}),
  freeSpots: (a: Game, b: Game): number => (a.playerLimit - a.players.length) - (b.playerLimit - b.players.length),
  id: (a: Game, b: Game): number => a.selfID - b.selfID,
};

router.get("/", (req, res) => res.status(401).end());
router.get("/lobby", (req, res) => {
  let {count = "50", offset = "0", sort = "name", order = "asc"} = req.query;
  if (!Object.keys(sorting).includes(sort) || !["asc", "desc"].includes(order))
    res.status(500).json({error: "unknown sorting"});
  if ([count, offset].some(v => !v.match("\\d+")))
    res.status(500).json({error: "non-number count/offset"});

  count = parseInt(count); offset = parseInt(offset);
  let data = games.filter(v => !v.private).sort(sorting[sort as keyof typeof sorting]).map(v => ({
    name: v.name,
    usesPassword: !!v.password,
    playerLimit: v.playerLimit,
    playerCount: v.players.length,
    refreshRate: v.refreshRate
  }));
  if (order === "desc") data.reverse();
  res.json({
    data: data.slice(offset, offset+count),
    total: data.length,
    nextPage: buildNextPage(req.query, `${req.protocol}://${req.get("host")}${req.originalUrl.split("?", 1)[0]}`)
  })
});

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