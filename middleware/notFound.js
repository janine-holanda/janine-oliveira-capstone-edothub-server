const notFound = (req, res, next) => {
  return res
    .status(404)
    .json({ msg: 'Server can not find the requested resource' });
};

export default notFound;
