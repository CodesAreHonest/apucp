
import {validationHandler} from "../../helpers/validation";

import AdminStore from './store';

export const postRegister = async (req, res) => {

    let validation = await validationHandler(req, res);

    if (validation.response_code === 422) {
        return res.status(422).send(validation);
    }

    const { user_id, name, email, picture, access_token } = req.body;

    AdminStore.insert_or_update (
        user_id, name, email, picture, access_token
    ).then (response => {
        return res.status(200).send(response);
    }).catch (err => {
        return res.status(500).send(err);
    });

};
