import {
  SAVE_DOLLAR_TO_REAL_CONVERSION,
  TOTAL_CONVERTED_AMOUNT_TO_PAY,
} from "./currencyConversionConstants";

// eslint-disable-next-line import/prefer-default-export
export const saveDollarToRealConversion = (dollarToReal) => {
  return { type: SAVE_DOLLAR_TO_REAL_CONVERSION, payload: dollarToReal };
};

export const setTotalConvertedAmountToPay = (amount) => {
  return { type: TOTAL_CONVERTED_AMOUNT_TO_PAY, payload: amount };
};
