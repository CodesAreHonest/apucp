import {confessionImageUploadSettings} from "../../helpers/validation";

export const confessorImageUploadValidation = (req, res, next) => {

    confessionImageUploadSettings(req, res, err => {
        if (err) {
            return res.status(422).send({
                response_code: 422,
                response_msg: err
            })
        }

        next();
    });

};