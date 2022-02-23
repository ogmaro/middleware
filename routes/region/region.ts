import { Router, Request, Response } from 'express';

const region = Router();

region.get('/', (req: Request, res: Response) => {
  res.send(req.baseUrl + ' was visted');
});

export default region;
