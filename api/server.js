const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session");
const KnexSessionStore = require("connect-session-knex")(session); // remember to pass session


const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const jokesRouter = require('../jokes/jokes-router.js');
const dbConnection = require("../database/dbConfig.js");

const server = express();

const sessionConfig = {
    name: "monster",
    secret: process.env.SESSION_SECRET || "keep it secret, keep it safe!",
    resave: false,
    saveUninitialized: process.env.SEND_COOKIES || true,
    cookie: {
        maxAge: 1000 * 60 * 60, // good for 1hr mins in ms
        secure: process.env.USE_SECURE_COOKIES || false, // used over https only, set to true in production
        httpOnly: true, // true means JS on the client cannot access the cooke
    },
    // the store property controls where the session is stored, by default it is in memory
    // we're changing it to use the database through Knex
    store: new KnexSessionStore({
        knex: dbConnection,
        tablename: "sessions",
        sidfieldname: "sid",
        createtable: true,
        clearInterval: 1000 * 60 * 60, // will remove expired sessions every hour
    }),
};
server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(session(sessionConfig));

server.use('/api/auth', authRouter);
server.use('/api/jokes', authenticate, jokesRouter);
server.get("/", (req, res) => {
    res.json({ api: "up" });
});

module.exports = server;
