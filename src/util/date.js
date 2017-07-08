export const compareDates = (a, b) => {
  return (a.getFullYear() == b.getFullYear()
          && a.getMonth() == b.getMonth()
          && a.getDate() == b.getDate());
};

export const previousDay = (d) =>
  new Date(d.getFullYear(), d.getMonth(), d.getDate() - 1);

export const nextDay = (d) =>
  new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);
