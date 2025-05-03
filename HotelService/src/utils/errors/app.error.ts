// make an boject of the class that extends the Error class

export interface AppError extends Error {
  statusCode: number;
}

export class InternalServerError implements Error {
  statusCode: number;
  name: string;
  message: string;
  constructor(message: string) {
    this.statusCode = 500;
    this.name = "App Error";
    this.message = message;
  }
}

export class BadRequestError implements Error {
  statusCode: number;
  name: string;
  message: string;
  constructor(message: string) {
    this.statusCode = 400;
    this.name = "BadRequestError";
    this.message = message;
  }
}
export class NotFoundError implements Error {
  statusCode: number;
  name: string;
  message: string;
  constructor(message: string) {
    this.statusCode = 404;
    this.name = "NotFoundError";
    this.message = message;
  }
}
export class UnauthorizedError implements Error {
  statusCode: number;
  name: string;
  message: string;
  constructor(message: string) {
    this.statusCode = 401;
    this.name = "UnauthorizedError";
    this.message = message;
  }
}

export class ForbiddenError implements Error {
  statusCode: number;
  name: string;
  message: string;
  constructor(message: string) {
    this.statusCode = 403;
    this.name = "ForbiddenError";
    this.message = message;
  }
}
export class ConflictError implements Error {
  statusCode: number;
  name: string;
  message: string;
  constructor(message: string) {
    this.statusCode = 409;
    this.name = "ConflictError";
    this.message = message;
  }
}

export class NotImplementedError implements Error {
  statusCode: number;
  name: string;
  message: string;
  constructor(message: string) {
    this.statusCode = 501;
    this.name = "NotImplementedError";
    this.message = message;
  }
}
