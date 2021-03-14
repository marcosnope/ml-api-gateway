import request from 'request';
import Http from '../Http';
import { convertProducts, convertIdProduct } from '../../converts/products';

// Obtener productos por descripcion
exports.getItemsDescription = async (req, res) => {
  var result = await Http({
    route: '/sites/MLA/search?q=:',
    param: req.query.q,
  }).catch((error) => console.log(error));
  return res.json(convertProducts(result));
};

// Obtener producto por id
exports.getItemById = async (req, res) => {
  const { id } = req.params;
  var resultProduct = await Http({
    route: '/items/',
    param: id,
  }).catch((error) => console.log(error));

  var resultCategories = await Http({
    route: '/categories/',
    param: resultProduct['category_id'],
  }).catch((error) => console.log(error));

  var resultDescription = await Http({
    route: '/items/',
    param: `${resultProduct['id']}/description`,
  }).catch((error) => console.log(error));

  return res.json(
    convertIdProduct(resultProduct, resultCategories, resultDescription)
  );
};
