export const getDataApi = async () => {
    const URL = '';
    return fetch(URL).then(res => res.json());
};

export const postDataApi = async () => {
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
