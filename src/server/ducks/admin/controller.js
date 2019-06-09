
import {validationHandler} from "../../helpers/validation";

import AdminStore from './store';

export const postRegister = async (req, res) => {

    let validation = await validationHandler(req, res);

    if (validation.response_code === 422) {
        return res.status(422).send(validation);
    }

    const { access_token } = req.body;

    // TODO Obtain access token from client side
    // TODO Validate facebook user possess admin role in confession page
    // TODO Ensure admins possess permission to create content

    // AdminStore.insert_or_update (
    //     user_id, name, email, picture, access_token
    // ).then (response => {
    //     return res.status(200).send(response);
    // }).catch (err => {
    //     return res.status(500).send(err);
    // });

};
