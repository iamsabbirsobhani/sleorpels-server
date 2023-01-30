"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = exports.myEmitter = exports.app = exports.server = void 0;
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const node_events_1 = require("node:events");
const events_1 = require("./app/events/events");
const routes_1 = require("./app/routes/routes");
const socket_1 = require("./app/socket/socket");
const cors_1 = __importDefault(require("cors"));
const myEmitter = new node_events_1.EventEmitter();
exports.myEmitter = myEmitter;
const app = (0, express_1.default)();
exports.app = app;
const server = (0, http_1.createServer)((req, res) => {
    myEmitter.emit("request", req, res);
    myEmitter.emit("requests", req, res);
});
exports.server = server;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
(0, routes_1.routes)(app);
server.on("request", app);
server.on("request", () => {
    console.log("New request received at " + new Date().getTime());
});
(0, events_1.customEvents)(myEmitter);
const io = (0, socket_1.realtime)(server);
exports.io = io;
const PORT = 3000 || process.env.PORT;
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT} 🚀 http://localhost:3000`);
});
//# sourceMappingURL=server.js.map