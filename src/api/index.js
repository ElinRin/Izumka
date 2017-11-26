<<<<<<< HEAD
var Web3 = require('web3');
var web3 = new Web3();

var web3 = new Web3('http://localhost:8545');

// web3.setProvider(new web3.providers.HttpProvider());

export const getDataApi = async () => {
=======
export const getDataApi = async (request) => {
>>>>>>> 83c271131631da25ca90f16ba1ab60d3cb975e4e
    const URL = '';
    //return fetch(URL).then(res => res.json());
    const data = {
        name : "Пётр",
        organizations: {
            a: {"org": "МФТИ", "date": "2010-2014", "qua": "Бакалавриат" },
            b: {"org": "ВШЭ", "date": "2015-2017", "qua": "Магистратура" },
            c: {"org": "Вуз-шмуз", "date": "2014-2017", "qua": "Доп курсы-шмурсы" }
        }
    };
    return data;
};

<<<<<<< HEAD
export const postDataApi = async () => {
    // const URL = '';
=======
export const postDataApi = async (request) => {
    const URL = '';
>>>>>>> 83c271131631da25ca90f16ba1ab60d3cb975e4e
    return fetch('url', {
        method: 'POST',
        body: 'foo=bar'
    }).then(function(response) {
        // Стоит проверить код ответа.
        if (!response.ok) {
            // Сервер вернул код ответа за границами диапазона [200, 299]
            return Promise.reject(new Error(
                'Response failed: ' + response.status + ' (' + response.statusText + ')'
            ));
        }
    
        // Далее будем использовать только JSON из тела ответа.
        return response.json();
    }).then(function(data) {
        // ... Делаем что-то с данными.
    });
};
