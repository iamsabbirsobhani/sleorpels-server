import { Request, Response, Router } from "express";
import express from "express";
import { createServer } from "http";
import { EventEmitter } from "node:events";
import { customEvents } from "./app/events/events";
import { router } from "./app/routes/routes";
import { realtime } from "./app/socket/socket";
import cors from "cors";

const myEmitter = new EventEmitter();

const app = express();

const server = createServer((req: Request, res: Response) => {
  myEmitter.emit("request", req, res);
});

// enable cors
app.use(cors());
// middleware to parse the request body
app.use(express.json());
// middleware to parse the url encoded data
app.use(express.urlencoded({ extended: true }));

// define the routes
app.use("/api", router);

// register the express app as a handler to the http server
// on request event
server.on("request", app);

// output every request to the console by listening to the request event
server.on("request", () => {
  console.log("New request received at " + new Date().getTime());
});

// define the node event emitter
customEvents(myEmitter);

// call database configuration

// define socket.io
const io = realtime(server);

const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT} 🚀 http://localhost:3000`);
});
