import express from 'express';
import pacienteRouter from './routes/pacientes';
import diagnosticoRouter from './routes/diagnosticos';
import cors from 'cors';
import * as path from 'path';
const app = express();
app.use(express.json());
app.use(cors());
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/api/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.use('/api/diagnosticos', diagnosticoRouter);
app.use('/api/pacientes', pacienteRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
