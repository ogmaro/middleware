import { Router, Request, Response } from 'express';

const state = Router();

state.get('/', (req: Request, res: Response) => {
  res.send(req.baseUrl + ' was visted');
});

export default state;
