import { server } from "../../server";
import { Server } from "socket.io";
import { Server as HttpServer } from "http";
import { socketEvents } from "./socketEvents";

export const realtime = (server: HttpServer) => {
  const io = new Server(server, {
    cors: {
      // all origins are allowed
      origin: "*",
      methods: ["GET", "POST"],
      allowedHeaders: ["sleorpels-custom-header"],
      credentials: true,
    },
  });

  socketEvents(io);
  return io;
};
