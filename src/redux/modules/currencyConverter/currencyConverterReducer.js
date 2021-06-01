import {
  SAVE_DOLLAR_TO_REAL_CONVERSION,
  TOTAL_CONVERTED_AMOUNT_TO_PAY,
} from "./currencyConversionConstants";

export default (state = 0, action) => {
  switch (action.type) {
    case SAVE_DOLLAR_TO_REAL_CONVERSION:
      return { ...state, dollarToReal: action.payload };
    case TOTAL_CONVERTED_AMOUNT_TO_PAY:
      return { ...state, totalConvertedAmountToPay: action.payload };
    default:
      return state;
  }
};
