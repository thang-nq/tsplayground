import { auth, requiredScopes } from "express-oauth2-jwt-bearer";
import { AuthenticationClient } from "auth0";
import { auth as openidConnectAuth } from "express-openid-connect";

export const checkJwt = auth({
  audience: "http://localhost:8080",
  issuerBaseURL: "https://nguyenqthang.us.auth0.com/",
});

export const login = () =>
  openidConnectAuth({
    issuerBaseURL: "https://nguyenqthang.us.auth0.com/",
    baseURL: "http://localhost:8080",
    clientID: "LNbj2tLDywfXkYoXazZrxi8XdwOZpGuy",
    secret: "SKQCYHqx40tNcJe8y5FXaIc31nekb_vDnMVJG713X25DiMNGwc2FkAAfGCdEY8od",
    idpLogout: true,
  });

export const checkScopes = requiredScopes("read:user");
