require('dotenv').config()
import express from 'express';
import { rootHandler, helloHandler, witHandler } from './handlers';

const app = express();
const port = process.env.PORT || '8000';

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get('/', rootHandler);
app.get('/hello/:name', helloHandler);
app.post('/wit', witHandler);

app.listen(port, err => {
  if (err) return console.error(err);
  return console.log(`Server is listening on ${port}`);
});
