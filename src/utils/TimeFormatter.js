export const timeFormatter = (isoString, options) => {
  const dateISO = new Date(isoString);

  const formattedTime = dateISO.toLocaleString("en-US", options);

  // To get "2am", remove the space and convert to lowercase
  return formattedTime;
};
