import express, { Express } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { datas } from './data';

const app: Express = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.get('/data/:id', (req, res) => {
  const data = datas.find((data) => data.id === req.params.id);
  data
    ? res.status(200).json(data)
    : res
        .status(404)
        .json({ message: `No data found with id ${req.params.id}` });
});

app.listen(3000, () => console.log('Server running on port 3000\n'));
