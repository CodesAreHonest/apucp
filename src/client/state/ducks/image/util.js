const findKeyByValue = (objects, value) => {

    for (let key in objects) {
        if (objects[key] === value) {
            return key;
        }
    }

    return false;

};

export { findKeyByValue }