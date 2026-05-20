"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeError = normalizeError;
function normalizeError(error, fallback) {
    if (error instanceof Error)
        return error;
    return new Error(fallback);
}
