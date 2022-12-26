<h1 align="center">MercadoLibreAPI - NodeJS</h1>
<p align="center">Simple way to get information from a specific Mercado Libre seller. This is not the official API of Mercado Libre</p>
<p align="center">
  <img src="https://img.shields.io/badge/Status-Developing-red">
  <img src="https://img.shields.io/badge/Version-1.2.1-green">
  <img src="https://img.shields.io/badge/NodeJS-v16.15.0-informational">
  <img src="https://img.shields.io/badge/npm-8.5.5-informational">
</p>

## Documentation

### getProductsData: Returns data of all products
```javascript
  getProductsData({id: 'seller_id', country: 'country_id', price: {addZero: true, format: true}}, (response) => {})
```
| Param | Type | Desc |
| :- | :- | :- |
| `id` | `string` | **Required**. The seller ID from Mercado Libre |
| `country` | `string` | **Required**. See the list of country IDs [clicking here](https://api.mercadolibre.com/sites/) |
| `price.format` | `boolean` | **Optional**. By default, the currency format uses dot (e.g. 5.43). If enabled, the dot is replaced by a comma (5,43) |
| `price.addZero` | `boolean` | **Optional**. If enabled, 0 is added when the cent value ends with 0 (e.g. 5.9 -> 5.90) |
| `response` | `JSON ` | Callback that returns errors or results |

### getSellerData: Returns data of seller
```javascript
  getSellerData({id: 'seller_id', country: 'country_id'}, (response) => {})
```
| Param | Type | Desc |
| :- | :- | :- |
| `id` | `string` | **Required**. The seller ID from Mercado Libre |
| `country` | `string` | **Required**. See the list of country IDs [clicking here](https://api.mercadolibre.com/sites/) |
| `response` | `JSON ` | Callback that returns errors or results |

### getAvailableFilters: Returns data of all available filters
```javascript
  getAvailableFilters({id: 'seller_id', country: 'country_id'}, (response) => {})
```
| Param | Type | Desc |
| :- | :- | :- |
| `id` | `string` | **Required**. The seller ID from Mercado Libre |
| `country` | `string` | **Required**. See the list of country IDs [clicking here](https://api.mercadolibre.com/sites/) |
| `response` | `JSON ` | Callback that returns errors or results |
