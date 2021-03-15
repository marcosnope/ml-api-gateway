# Prueba Mercado Libre

_API Gateway encargada de conectarnos con la [API mercado libre](https://api.mercadolibre.com)_


## Comenzando 🚀

Esta API gateway esta desplegada en [Heroku](https://www.heroku.com/) para darle uso desde el front.
* [ML-API-GATWAY](https://ml-api-gateway.herokuapp.com/api/items/ping) 

### Endpoints  📋
* _Endpoint para verificar que el servicio se encuentre activo._
```
https://ml-api-gateway.herokuapp.com/api/items/ping
```
* _Endpoint para consultar producto._

```
https://ml-api-gateway.herokuapp.com/api/items?q=:query
```
* _Endpoint para consultar producto por ID._
```
https://ml-api-gateway.herokuapp.com/api/items/:id
```

### Instalación 🔧

```
npm install
```

Para correr el proyecto localmente

```
npm start
```

## Despliegue 📦

_El proyecto fue configurado para que tuviera un despliegue automático en [Heroku](https://www.heroku.com/) una vez se haya hecho push en master._

## Construido con 🛠️

* [Node js & Express](https://nodejs.org/es/) - Servidor

## Autor ✒️

* **Marcos Nope** - *Desarrollador* - [github](https://github.com/marcosnope)
