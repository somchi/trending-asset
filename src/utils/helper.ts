export const formatCurrency = (currency: number) => {
  const amount = Number(currency).toLocaleString('en-US', {
    currency: 'USD',
    style: 'currency',
  });
  return amount;
};

export const formatPercent = (value: number) => {
  if (value < 0) {
    return `${value.toString()}%`;
  } else {
    return `+${value}%`;
  }
};
