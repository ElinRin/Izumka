
export const getDataApi = async (request) => {
    const URL = '';
    //return fetch(URL).then(res => res.json());
    const data = {
        name : "Крашенинников Александр Всеславович",
        organizations: {
            a: {"org": "МФТИ", "date": "2010-2014", "qua": "Бакалавриат" },
            b: {"org": "ВШЭ", "date": "2015-2017", "qua": "Магистратура" },
            c: {"org": "Вуз-шмуз", "date": "2014-2017", "qua": "Доп курсы-шмурсы" }
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
