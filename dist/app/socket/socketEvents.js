"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.socketEvents = void 0;
const socketEvents = (io) => {
    io.on("connection", (socket) => {
        console.log("A user connected");
        socket.on("disconnect", () => {
            console.log("A user disconnected");
        });
    });
};
exports.socketEvents = socketEvents;
//# sourceMappingURL=socketEvents.js.map