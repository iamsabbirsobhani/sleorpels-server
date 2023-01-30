import { Socket, Server } from "socket.io";

export const socketEvents = (io: Server) => {
  io.on("connection", (socket: Socket) => {
    console.log("A user connected");

    socket.on("disconnect", () => {
      console.log("A user disconnected");
    });
  });
};
