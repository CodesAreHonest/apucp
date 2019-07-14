const findKeyByValue = (objects, value) => {

    for (let key in objects) {
        if (objects[key] === value) {
            return key;
        }
    }

    return false;

};

const displayImageDivision = (object) => {

    const dontDisplay =
        Object.keys(object).every((k) => !object[k]);

    // all images are not uploaded don't display
    if (dontDisplay) { return false; }

    return true;

};


export { findKeyByValue, displayImageDivision }