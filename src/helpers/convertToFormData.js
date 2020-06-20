export const convertToFormData = data => {
  const fd = new FormData();
  Object.keys(data).forEach(k => {
    if (Array.isArray(data[k])) {
      for (var i = 0; i < data[k].length; i++) {
        fd.append(`${k}[]`, data[k][i]);
      }
    } else {
      fd.append(k, data[k]);
    }
  });
  return fd;
};
