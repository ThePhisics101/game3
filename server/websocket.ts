import {Request} from "express";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ws from 'ws';

export default (ws: ws, req: Request) => {
  console.log("new ws");
  ws.on("message", msg => {
    console.log(msg);
  })
};