import { Router } from 'express';
const router = Router();
import itemServices from '../../services/items/items.services';

router.get('/ping', (req, res) => {
  return res.json({ message: 'pong' });
});
// api/items
// Obtener productos
router.get('/', itemServices.getItemsDescription);
// Obtener productos por id
router.get('/:id', itemServices.getItemById);

export default router;
