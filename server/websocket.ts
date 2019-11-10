import {Request} from "express";
import _ws from 'ws';

export default (ws: _ws, req: Request) => {
  console.log("new ws");
  ws.on("message", msg => {
    console.log(msg);
  })
};