<h1 align="center">MercadoLibreAPI - NodeJS</h1>
<p align="center">Simple way to get product information from a specific Mercado Libre seller</p>
<p align="center">
  <img src="https://img.shields.io/badge/Status%20-Working-red">
  <img src="https://img.shields.io/badge/NodeJS-v16.15.0-informational">
  <img src="https://img.shields.io/badge/npm-8.5.5-informational">
</p>

## Documentation

### getProductsData: Returns data of all products
```javascript
  getProductsData({id: 'seller_id', country: 'MLB', formatPrice: true}, (response) => {})
```
| Param | Type | Desc |
| :- | :- | :- |
| `id` | `string` | **Required**. The seller ID from Mercado Libre |
| `country` | `string` | **Required**. see the list of country IDs by [clicking here](https://api.mercadolibre.com/sites/) |
| `formatPrice` | `boolean` | **Optional**. By default, the currency format uses a dot (e.g. $5.43). If enabled, the dot is replaced by a comma ($5,43), and 0 is added when the cent value ends with 0 (5.9 -> 5.90) |
| `response` | `JSON ` | Callback that returns errors or results (response type: JSON) |
