import express from 'express';
import indexRouter from './routes/indexRouter.js';

const PORT = process.env.PORT || 3000;

const app = express();
app.use('/', indexRouter);

app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`App listening on port: ${PORT}`);
});
