import request from 'request';
import Http from '../Http';
import { convertProducts, convertIdProduct } from '../../converts/products';

// Obtener productos por descripcion
exports.getItemsDescription = async (req, res) => {
  var result = await Http({
    route: '/sites/MLA/search?q=:',
    param: req.query.q,
  }).catch((error) => console.log(error));

  var resultCategories =
    result['results'].length > 0 ? await maxResultCategory(result) : null;

  return res.json(convertProducts(result, resultCategories));
};

// Obtener producto por id
exports.getItemById = async (req, res) => {
  const { id } = req.params;
  var resultProduct = await Http({
    route: '/items/',
    param: id,
  }).catch((error) => console.log(error));
  if (resultProduct != null) {
    var resultDescription = await getDescription(resultProduct['id']);
    var resultCategories = await getCategories(resultProduct['category_id']);
  }
  return res.json(
    convertIdProduct(resultProduct, resultCategories, resultDescription)
  );
};

const getCategories = async (category) =>
  await Http({
    route: '/categories/',
    param: category,
  }).catch((error) => console.log(error));

const getDescription = async (productId) =>
  await Http({
    route: '/items/',
    param: `${productId}/description`,
  }).catch((error) => console.log(error));

const maxResultCategory = async (items) => {
  var resultsCategory = [];
  var categories = items['available_filters'][0]['values'];
  categories.forEach((element) => {
    resultsCategory.push(element['results']);
  });
  var max = Math.max(...resultsCategory);
  var category = categories.find((item) => item['results'] === max);
  return await getCategories(category['id']);
};
