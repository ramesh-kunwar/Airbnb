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
import sequelize from "./db/models/sequelize";
import Hotel from "./db/models/hotel";

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(attachCorrelationIdMiddleware);

app.use("/api/v1", v1Router);
app.use("/api/v2", v2Router);

app.use(genericErrorHandler);

app.listen(serverConfig.PORT, async () => {
  logger.info(`Server is running on port ${serverConfig.PORT}`);
  logger.info(`Press CTRL-C to stop the server`);
  await sequelize.authenticate(); // Test the database connection
  logger.info("Database connection has been established successfully.");
});
