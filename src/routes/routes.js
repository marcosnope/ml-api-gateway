import express from 'express';
const app = express();

// Importing routes
import itemsRoutes from './items/items.routes'

// // Importar rutas
app.use('/api/items', itemsRoutes);

export default app;