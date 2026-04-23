import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import indexRouter from './routes/indexRouter.js';

const PORT = process.env.PORT || 3000;
const viewsPath = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  'views',
);
const publicPath = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  'public',
);

const app = express();

app.set('views', viewsPath);
app.set('view engine', 'ejs');

app.use(express.static(publicPath));
app.use('/', indexRouter);

app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`App listening on port: ${PORT}`);
});
