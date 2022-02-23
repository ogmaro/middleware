import { Router, Request, Response } from 'express';

const countries = Router();

countries.get('/', (req: Request, res: Response) => {
  res.send(req.baseUrl + ' was visted');
});

export default countries;
