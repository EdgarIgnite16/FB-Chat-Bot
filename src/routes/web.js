import express from "express";
import chatboxController from "../controllers/chatbotController";
let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", chatboxController.getHomePage)
    router.get("/webhook", chatboxController.getWebhook);
    router.post("/webhook", chatboxController.postWebhook);
    return app.use("/", router);
};

module.exports = initWebRoutes;

