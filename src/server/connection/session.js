
const SessionExpired = (req, res, next) => {

  if (req.session.access_token === undefined) {
    return res.redirect('/auth/admin/login');
  }

  next();
};

export { SessionExpired };