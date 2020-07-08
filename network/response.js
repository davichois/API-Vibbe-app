exports.success = (req, res, message, status) => {
  const messageStatus = message || "";
  res.status(status || 200).send({
    error: "",
    message: messageStatus,
  });
};
exports.error = (req, res, message, status, details) => {
  console.error(`[ERROR] => ${details}`);
  const messageStatus = message || "";
  res.status(status || 500).send({
    error: messageStatus,
    message: "",
  });
};
