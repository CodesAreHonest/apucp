import fs from 'fs';

export const readImageFileInArray = (imageArray) => {

    let base64Array = [];

    imageArray.forEach (image => {
        const {path} = image;
        const DIRECTORY = `${process.env.PWD}/${path}`;

        try {
            const imageReadStream = fs.createReadStream(DIRECTORY);
            base64Array.push(imageReadStream);
        }
        catch (err) {
            return err;
        }
    });

    return base64Array;

};