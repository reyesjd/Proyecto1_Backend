const message_format = (res, message, code, data = {}) => {
  return res.status(code).json({
    message: message,
    data: data,
  });
};

export default message_format;
