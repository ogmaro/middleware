import express, { Application } from 'express';
import routes from './routes/index';
import logger from './routes/middleware/logger';

const app: Application = express();
const PORT = 3000;

app.use('/country', logger, routes);
app.use('/state', logger, routes);
app.use('/region', routes);

app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`);
});
