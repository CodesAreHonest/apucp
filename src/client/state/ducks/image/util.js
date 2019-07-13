const findKeyByValue = (objects, value) => {

    console.log ('inside selectors');
    console.log (objects);

    for (let key in objects) {
        if (objects[key] === value) {
            return key;
        }
    }

    return true;

};

export { findKeyByValue }