"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.realtime = void 0;
const socket_io_1 = require("socket.io");
const socketEvents_1 = require("./socketEvents");
const realtime = (server) => {
    const io = new socket_io_1.Server(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"],
            allowedHeaders: ["sleorpels-custom-header"],
            credentials: true,
        },
    });
    (0, socketEvents_1.socketEvents)(io);
    return io;
};
exports.realtime = realtime;
//# sourceMappingURL=socket.js.map