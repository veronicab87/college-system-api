import express from'express';
const app = express()
const port = 3001
import routes from './routes/index.js';
import cors from 'cors';    
app.use(cors());

app.use(express.json());
app.use('/api/', routes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})