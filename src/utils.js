export const calcAvgEarnings = (rowData) => {
  if (rowData.length === 0) return 0;

  return (
    rowData.reduce(
      (acc, { ExpectedEarning }) => acc + parseFloat(ExpectedEarning),
      0
    ) / rowData.length
  );
};

export const filterDataFunc = (name, func) => (data) => func(data[name]);

export const orFilterFuncs = (filterFuncs) => (data) =>
  filterFuncs.reduce((acc, func) => acc || func(data), true);

export const andFilterFunc = (filterFuncs) => (data) =>
  filterFuncs.reduce((acc, func) => acc && func(data), true);
