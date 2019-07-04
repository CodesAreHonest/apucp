
import {validationHandler} from "../../helpers/validation";

import ConfessionStore from './store';


export const postInsert = async (req, res) => {

    let validation = await validationHandler(req, res);

    if (validation.response_code === 422) {
        return res.status(422).send(validation);
    }

    const { confession } = req.body;
    const { files: imageFiles } = req;

    let outcomes = await ConfessionStore.insert(confession, imageFiles);

    if (outcomes.response_code !== 200) {
        const {response_code} = outcomes;
        return res.status(response_code).send(outcomes);
    }

    return res.status(200).send(outcomes);
};

export const getPendingList = async (req, res) => {

    let validation = await validationHandler(req, res);

    if (validation.response_code === 422) {
        return res.status(422).send(validation);
    }

    const { page, limit } = req.query;

    ConfessionStore.pendingList(page, limit)
        .then(response => {
            return res.status(200).send(response);
        })
        .catch(err => {
            const {response_code} = err;
            return res.status(response_code).send(err);
        });
};

export const getApprovedList = async (req, res) => {

    let validation = await validationHandler(req, res);

    if (validation.response_code === 422) {
        return res.status(422).send(validation);
    }

    const { page, limit, search } = req.query;

    ConfessionStore.approvedList(page, limit, search)
        .then (response => {
            return res.status(200).send(response);
        })
        .catch (err => {
            const { response_code } = err;
            return res.status(response_code).send(err);
        });

};

export const getRejectedList = async (req, res) => {

    let validation = await validationHandler(req, res);

    if (validation.response_code === 422) {
        return res.status(422).send(validation);
    }

    const { page, limit, search } = req.query;

    ConfessionStore.rejectList(page, limit, search)
        .then (response => {
            return res.status(200).send(response);
        })
        .catch (err => {
            const { response_code } = err;
            return res.status(response_code).send(err);
        })
};
