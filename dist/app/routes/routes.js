"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const routes = (app) => {
    app.get("/", (req, res) => {
        res.send("Hello World");
    });
};
exports.routes = routes;
//# sourceMappingURL=routes.js.map