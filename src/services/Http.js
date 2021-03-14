import request from 'request';
const api = 'https://api.mercadolibre.com';

const defaultHeaders = {
  'Content-Type': 'application/json',
};

export default function Http({ route, param = null }) {
  const url = param !== null ? `${api}${route}${param}` : `${api}${route}`;
  const requestOptions = { url, json: true, defaultHeaders };
  return new Promise((resolve, reject) => {
    request(requestOptions, (error, response, body) => {
      if (
        response &&
        response.statusCode >= 200 &&
        response.statusCode <= 300
      ) {
        return resolve(body);
      }
      return reject(error);
    });
  });
}
