export const getDataApi = async (request) => {
    const URL = '';
    //return fetch(URL).then(res => res.json());
    const data = {
        name : "Пётр",
        organizations: {
            1: {"org": "МФТИ", "date": "2010-2014", "qua": "Бакалавриат" },
            2: {"org": "ВШЭ", "date": "2015-2017", "qua": "Магистратура" },
            3: {"org": "Вуз-шмуз", "date": "2014-2017", "qua": "Доп курсы-шмурсы" }
        }
    };
    return data;
};

export const postDataApi = async (request) => {
    const URL = '';
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
