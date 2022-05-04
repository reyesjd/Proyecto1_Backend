const message_format = (res, message, code, data = null) => {
  if (data != null) {
    return res.status(code).json(data);
  } else {
    return res.status(code).end(message);
  }
};

export default message_format;
