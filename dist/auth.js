"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkScopes = exports.login = exports.checkJwt = void 0;
const express_oauth2_jwt_bearer_1 = require("express-oauth2-jwt-bearer");
require("auth0");
const express_openid_connect_1 = require("express-openid-connect");
exports.checkJwt = (0, express_oauth2_jwt_bearer_1.auth)({
    audience: "http://localhost:8080",
    issuerBaseURL: "https://nguyenqthang.us.auth0.com/",
});
const login = () => (0, express_openid_connect_1.auth)({
    issuerBaseURL: "https://nguyenqthang.us.auth0.com/",
    baseURL: "http://localhost:8080",
    clientID: "LNbj2tLDywfXkYoXazZrxi8XdwOZpGuy",
    secret: "SKQCYHqx40tNcJe8y5FXaIc31nekb_vDnMVJG713X25DiMNGwc2FkAAfGCdEY8od",
    idpLogout: true,
});
exports.login = login;
exports.checkScopes = (0, express_oauth2_jwt_bearer_1.requiredScopes)("read:user");
