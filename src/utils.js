export const calcAvgEarnings = (rowData) => {
  if (rowData.length === 0) return 0;

  return +(
    rowData.reduce(
      (acc, { ExpectedEarning }) => acc + parseFloat(ExpectedEarning),
      0
    ) / rowData.length
  ).toFixed(2);
};

export const filterDataFunc = (name, func) => (data) =>
  data[name] === "" ? false : func(data[name]);

export const orFilterFuncs = (filterFuncs) => (data) =>
  filterFuncs.reduce((acc, func) => acc || func(data), false);

export const andFilterFuncs = (filterFuncs) => (data) =>
  filterFuncs.reduce((acc, func) => acc && func(data), true);

export const findSmallestCombo = (rowData, filterFuncs) => {
  let lowestResult = 10000000;
  let lowestCombo = null;
  let lowestCount = null;

  const tryAllSubsets = (ind, stack, truesLeft) => {
    if (ind === filterFuncs.length) {
      const usingFuncs = filterFuncs.filter((_, i) => stack[i]);
      const andRowData = rowData.filter(andFilterFuncs(usingFuncs));
      const andResult = calcAvgEarnings(andRowData);

      if (andResult > 0 && andResult < lowestResult) {
        lowestResult = andResult;
        lowestCombo = [...stack];
        lowestCount = andRowData.length;
      }

      return;
    }

    if (truesLeft > 0) {
      stack.push(true);
      tryAllSubsets(ind + 1, stack, truesLeft - 1);
      stack.pop();
    }

    stack.push(false);
    tryAllSubsets(ind + 1, stack, truesLeft);
    stack.pop();
  };

  tryAllSubsets(0, [], 12);
  console.log({ lowestResult, lowestCombo, lowestCount });
};
