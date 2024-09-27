import { format } from "number-currency-format";

export const formatRupiah = (number) => {
  return format(number, { showDecimals: "NEVER", thousandSeparator: ".", spacing: false, currencyPosition: "LEFT" });
};
