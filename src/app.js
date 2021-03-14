import express, { json, urlencoded } from 'express';
import cors from 'cors';
// Importing routes
import routes from './routes/routes';
// Initialization
const app = express();

app.use(cors());
// Middlewares
app.use(json({ extended: true }));
app.use(urlencoded({ extended: false }));

// Routes
app.use(routes);

export default app;
