"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wait = void 0;
exports.wait = (ms) => new Promise((r) => setTimeout(r, ms));
