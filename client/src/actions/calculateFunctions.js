//Round the number shown in table to nearest 0.5
export const round = num => {
  return Math.round(num * 2) / 2;
};

//Calculate WarmUp Totals
export const warmUpTotal = num => {
  return ((num * 4) / 10) * 5 + ((num * 5) / 10) * 5 + ((num * 6) / 10) * 3;
};
