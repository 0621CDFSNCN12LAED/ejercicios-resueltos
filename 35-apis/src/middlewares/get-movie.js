module.exports = (req, res) => {
  const movie = Movie.findByPK(req.params.id);
  if (movie) {
    req.movie = movie;
    next();
  } else {
    res.flash({ error: "INCORRECT MOVIE ID" });
    redirect("back");
  }
};
