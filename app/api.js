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

const add = (entity, newObject) =>
    fetch(`http://localhost:3000/${entity}`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(newObject),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json());

const edit = (entity, newObject) =>
    fetch(`http://localhost:3000/${entity}`, {
        method: 'PUT',
        mode: 'cors',
        body: JSON.stringify(newObject),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json());

export {getList, remove, add, edit};