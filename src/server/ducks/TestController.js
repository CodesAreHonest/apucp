import { userInfo } from 'os';

const controller = {};

controller.test = (req, res) => {
    res.send({ username: userInfo().username })
};

export default controller;