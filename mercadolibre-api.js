const https = require('https');

const getData = function (seller_id, country, res) {
    https.get(`https://api.mercadolibre.com/sites/${country}/search?seller_id=${seller_id}`, (resp) => {
        let data = '';
        resp.on('data', (chunk) => { data += chunk;});
        resp.on('end', () => {
            if (resp.statusCode != 200) { return res({ error: resp.statusCode == 535 ? 'Please check if the value of COUNTRY is correct' : '', statusCode: resp.statusCode, statusMessage: resp.statusMessage }); }
            try {
                data = JSON.parse(data);
            } catch (ex) {
                return res({ error: 'An exception happened. Probably the MercadoLibre system is down temporarily', exception: ex.name, exception_msg: ex.message }); 
            }
            if (data.seller == undefined) {  return res({ error: 'Please check if the value of ID is correct.' }); }
            return res(data);
        });
    }).on('error', (err) => {
        return  res({ error: err });
    });
}

module.exports = {
    getProductsData: function(req, res) {
        getData(req.id, req.country, (resp) => {
            if (resp.error) { return res(resp); }
            let data = resp.results;
            if(req.formatPrice) {
                for (let i = 0; i < data.length; i++) {
                    let value = new String(data[i].price).replace('.', ',');
                    data[i].price = Number.parseInt(value.split(',')[1]) < 10 ? value + '0' : value;
                }
            }
            return res(data);
        });
    }
};