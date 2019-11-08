import express, {Router} from "express";
import express_ws from "express-ws";

import websocket from "./websocket";
import API from "./API";

const appBase = express();
const expressWs = express_ws(appBase);
const {app} = expressWs;

const APIRouter = Router();

const port = process.env.PORT || 8880;
const baseDir = "/home/thephisics101/Programming/game3";

let games: {
  connections: {}[],
}[] = [];

APIRouter.ws("/websocket", websocket);
APIRouter.use("/", API);

app.use("/API", APIRouter);

app.use(express.static(`${baseDir}/build`));
app.get("*", (req, res) => res.sendFile(`${baseDir}/build/index.html`));

app.listen(port);

console.log(`App is listening on port ${port}`);

export {games, expressWs};