import { AnyZodObject } from "zod";
import { Request, Response, NextFunction, RequestHandler } from "express";

/**
 *
 * @param schema - The Zod schema to validate the request body against
 * @returns middleware function that validates the request body
 */

// export const validateRequestBody = (schema: AnyZodObject) => {
export const validateRequestBody = (schema: AnyZodObject): RequestHandler => {
  // ...

  // this function will return a middleware function that validates the request body

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);
      console.log("Request body is valid");
      next();
    } catch (error) {
      // if the validation fails, send a 400 response with the error message
      res.status(400).json({
        message: "Invalid request body",
        success: false,
        error: error,
      });
    }
  };
};

export const validateQueryParams = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.query);
      console.log("Query params are valid");
      next();
    } catch (error) {
      return res.status(400).json({
        message: "Invalid query params",
        success: false,
        error: error,
      });
    }
  };
};
