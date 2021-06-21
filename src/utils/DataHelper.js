export const combineData = (data, params) => {
  const obj = {};
  for (const property in params) {
    obj[property] = params[property];
  }
  return {...data, ...obj};
};

export const formatCurrentDate = dt => {
  const str = new Date().toUTCString().split(' ');
  const today = `${str[2]} ${str[1]} ${str[3]}`;
  return today;
};
