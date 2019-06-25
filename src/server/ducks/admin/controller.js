
import {validationHandler} from "../../helpers/validation";

import AdminStore from './store';
import ConfessionStore from '../confession/store';

export const postRegister = async (req, res) => {

    let validation = await validationHandler(req, res);

    if (validation.response_code === 422) {
        return res.status(422).send(validation);
    }

    const { access_token } = req.body;
    const adminStore = new AdminStore();

    try {
        let fb_page_permission = await adminStore.verify_facebook_page_permission(access_token);
        const { fb_page_access_token } = fb_page_permission;

        let authorise_admin = await adminStore.register(access_token, fb_page_access_token, req);

        req.session.page_access_token = fb_page_access_token;

        let minutes = 30;
        let seconds = minutes * 60;
        let milliseconds = seconds * 1000;

        req.session.cookie.maxAge = milliseconds;

        return res.status(200).send(authorise_admin);
    }
    catch (err) {
        return res.status(500).send(err);
    }
};

export const postApprovePendingConfession = async (req, res) => {

    let validation = await validationHandler(req, res);

    if (validation.response_code === 422) {
        return res.status(422).send(validation);
    }

    const { pendingConfession } = req.body;
    const { page_access_token, name } = req.session;

    let adminStore = new AdminStore();

    let pendingConfessions = await ConfessionStore.getSelectedPendingListById(pendingConfession);

    adminStore.postConfession(page_access_token, pendingConfessions, name)
        .then (() => {
            return res.status(200).send ({
                response_code: 200,
                response_msg: 'success'
            });
        }).catch (err => {
        return res.status(500).send({
            response_code: 500,
            response_msg: err
        });
    });

};

export const postRejectPendingConfession = async (req, res) => {

    let validation = await validationHandler(req, res);

    if (validation.response_code === 422) {
        return res.status(422).send(validation);
    }

    const { rejectConfession } = req.body;
    const { name } = req.session;

    ConfessionStore.rejectConfession (rejectConfession, name)
        .then (() => {
            return res.status(200).send({
                response_code: 200,
                response_msg: 'success'
            })
        })
        .catch (err => {
            return res.status(500).send({
                response_code: 500,
                response_msg: err
            })
        })

};
