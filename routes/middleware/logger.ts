import { Request, Response, NextFunction } from 'express';

// const logger = Router();

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.baseUrl + ' was visted');
  next();
};

export default logger;