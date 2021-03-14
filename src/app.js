import express, { json, urlencoded } from 'express';

// Importing routes
import routes from './routes/routes';

// Initialization
const app = express();

// Middlewares
app.use(json({ extended: true }));
app.use(urlencoded({ extended: false }));

// Routes
app.use(routes);


export default app;