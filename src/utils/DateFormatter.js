export const dateFormatter = (date,options) => {
  const dateISO = new Date(date);
  const formattedDate = dateISO.toLocaleDateString("en-US", options);

  return formattedDate;
};
