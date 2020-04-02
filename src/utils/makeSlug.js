const makeSlug = str =>
  str
    .toLowerCase()
    .split(' ')
    .join('-');

export default makeSlug;
