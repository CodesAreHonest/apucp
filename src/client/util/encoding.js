export const paramEncoding = object => {
    return Object.keys(object).map((key) => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(object[key])
    }).join('&');
};