/**
 * GET /
 * Home page.
 */
exports.index = function(req, res) {
  res.render('home', {
    title: 'Home'
  });
};

exports.html5Background= function(req, res) {
  res.render('html5-background', {
    title: 'Landing Page'
  });
};
