
const SessionExpired = (req, res, next) => {

  if (req.session.page_access_token === undefined) {
    return res.redirect('/auth/admin/login');
  }

  next();
};

export { SessionExpired };