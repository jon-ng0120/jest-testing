const analyzeArray = (arr) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;
  const average =
    arr.reduce((previousValue, currentValue) => previousValue + currentValue) /
    length;

  return {
    average,
    min,
    max,
    length,
  };
};

export default analyzeArray;
