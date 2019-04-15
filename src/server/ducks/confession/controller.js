
import {validationHandler} from "../../helpers/validation";

import Confession from './store';


export const postInsert = async (req, res) => {

    let validation_response = await validationHandler(req, res);

    if (validation_response.response_code === 422) {
        return res.status(422).send(validation_response);
    }

    const { content } = req.body;

    let outcomes = await Confession.insert(content);

    if (outcomes.response_code !== 200) {
        const {response_code} = outcomes;
        return res.status(response_code).send(outcomes);
    }

    return res.status(200).send(outcomes);
};
