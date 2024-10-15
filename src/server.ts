import express from 'express'
import router from './router';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use((req, res, next) => {
  req.shh_secret = 'doggo'
  next();
})

app.get('/', (req, res) => {
  console.log('hello expres')
  res.status(200);
  res.json({message: 'hello'}) 
})

app.use('/api', router)

export default app;