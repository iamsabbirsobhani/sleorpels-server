"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customEvents = void 0;
const customEvents = (myEmitter) => {
    myEmitter.on("request", (req, res) => {
        console.log(req.url);
    });
};
exports.customEvents = customEvents;
//# sourceMappingURL=events.js.map