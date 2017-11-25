export const fetchApi= async () => {
    const URL = ""
    return fetch(URL).then(res => res.json());
};
