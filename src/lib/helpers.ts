const getRandomNumber = (maxNum: number) => {
  return Math.floor(Math.random() * maxNum);
};
export const getRandomColor = () => {
  const h = getRandomNumber(360);
  const s = getRandomNumber(100);
  const l = getRandomNumber(100);
  return `hsl(${h}deg, ${s}%, ${l}%)`;
};
