// fn: remove given value from an array (no mutation)

const deleteValue = (array, value) => {
  let copy = [...array];
  const indexToRemove = array.indexOf(value);
  copy.splice(indexToRemove, 1);
  return copy;
};

export default deleteValue;
