import express from "express";
import { Express } from "express";
import { serverConfig } from "./config";
import { pingHandler } from "./controllers/ping.controller";
import pingRouter from "./router/v1/ping.router";
import v1Router from "./router/v1/index.router";
import v2Router from "./router/v2/index.router";
import { genericErrorHandler } from "./middlewares/error.middleware";
import logger from "./config/logger.config";
import { attachCorrelationIdMiddleware } from "./middlewares/correlation.middleware";

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(attachCorrelationIdMiddleware);

app.use("/api/v1", v1Router);
app.use("/api/v2", v2Router);

app.use(genericErrorHandler);

app.listen(serverConfig.PORT, () => {
  console.log(`Server is running on http://localhost:${serverConfig.PORT}`);
  // console.log(`Press Ctrl+C to stop the server.`);
  logger.info(`Server is running on http://localhost:${serverConfig.PORT}`);
});
