export const init = (callback: () => void): void => {
  console.log("defauat initialization finished.");
  callback();
  console.log("all initialization finished.");
};
