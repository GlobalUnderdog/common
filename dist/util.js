"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processEnvOrThrow = exports.wait = void 0;
exports.wait = (ms) => new Promise((r) => setTimeout(r, ms));
exports.processEnvOrThrow = (key) => {
    const val = process.env[key];
    if (!val)
        throw new Error(`Need to set environment variable ${key}`);
    return val;
};
