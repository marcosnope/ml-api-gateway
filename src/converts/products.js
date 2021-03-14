const author = {
  name: 'Marcos',
  lastname: 'Nope',
};

export const convertProducts = (products, breadcrumb) => {
  var categories = [];
  var items = [];
  if (products['results'].length) {
    breadcrumb != null &&
      breadcrumb['path_from_root'].forEach((category) =>
        categories.push(category['name'])
      );

    products['results'].forEach((product) => {
      var price = product['price'].toString().split('.');
      items.push({
        id: product['id'],
        title: product['title'],
        price: {
          currency: product['currency_id'],
          amount: Number(price[0]),
          decimals: price.length > 1 ? Number(price[1]) : 0,
        },
        picture: product['thumbnail'],
        condition: product['condition'],
        free_shipping: product['shipping']['free_shipping'],
      });
    });
  }
  const result = {
    author,
    categories,
    items,
  };
  return result;
};

export const convertIdProduct = (product, categories, description) => {
  var breadcrumb = [];
  var item = {};
  if (product != null) {
    categories['path_from_root'].forEach((category) =>
      breadcrumb.push(category['name'])
    );

    var price = product['price'].toString().split('.');

    item = {
      id: product['id'],
      title: product['title'],
      price: {
        currency: product['currency_id'],
        amount: Number(price[0]),
        decimals: price.length > 1 ? Number(price[1]) : 0,
      },
      picture: product['pictures'][0]['url'],
      condition: product['condition'],
      free_shipping: product['shipping']['free_shipping'],
      sold_quantity: product['sold_quantity'],
      description: description['plain_text'],
    };
  }
  const result = {
    author,
    item,
    breadcrumb,
  };
  return result;
};
