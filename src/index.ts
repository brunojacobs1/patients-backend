import express from 'express';
import pacienteRouter from './routes/pacientes';
//import diagnoseRouter from './routes/diagnoses';
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3001;

app.get('/api/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

//app.use('/api/diagnoses', diagnoseRouter);
app.use('/api/pacientes', pacienteRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
