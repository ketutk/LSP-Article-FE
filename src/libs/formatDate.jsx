import hdate from "human-date";

export const formatDatePretty = (date, cases) => {
  const fDate = new Date(date);
  switch (cases) {
    case "pretty":
      return hdate.prettyPrint(fDate);
    case "relative":
      return hdate.relativeTime(fDate);
  }
};
