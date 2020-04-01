// fn: remove given value from an array (no mutation)

const deleteValue = (array, value) => {
  if (!Array.isArray(array) || !array || array.length === 0) return []; // handle passing of non-array/null/undefined/empty array
  let copy = [...array];
  const indexToRemove = array.indexOf(value);
  copy.splice(indexToRemove, 1);
  return copy;
};

export default deleteValue;
