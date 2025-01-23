export const randomChar = () => {
  const str = "qwertyuioplkjhgfdsazxcvmnb";
  return str[Math.floor(Math.random() * str.length)];
};
