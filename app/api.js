const getList = (query) =>
    fetch(`http://localhost:3000/${query}`, {
        method: 'GET',
        mode: 'cors',
    })
        .then((response) => response.json());

const remove = (entity, id) =>
    fetch(`http://localhost:3000/${entity}/${id}`, {
        method: 'DELETE',
        mode: 'cors',
    });

export {getList, remove};