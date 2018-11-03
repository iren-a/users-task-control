export const getList = (query) =>
    fetch(`https://jsonplaceholder.typicode.com/${query}`, {
        method: 'GET',
        mode: 'cors',
    })
        .then((response) => response.json());