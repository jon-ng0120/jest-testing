const capitalize = (str) => {
  return (
    str[0].toUpperCase() +
    str
      .slice(1)
      .split('')
      .map((word) => word.toLowerCase())
      .join('')
  );
};

export default capitalize;
