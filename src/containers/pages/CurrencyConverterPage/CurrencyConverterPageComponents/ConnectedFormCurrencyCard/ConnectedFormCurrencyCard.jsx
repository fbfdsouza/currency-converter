import React from "react";
import CurrencyCard from "../CurrencyCard";

const ConnectedFormCurrencyCard = (fields) => {
  const {
    dollars,
    stateTax,
    moneyAcquisitionType,
    isFormSubmitted,
    totalConvertedAmountToPay,
    dollarToReal,
    formValues,
    toggleisFormSubmitted,
    reset,
  } = fields;

  return (
    <div>
      <CurrencyCard
        firstOnchangeHandler={dollars.input.onChange}
        secondOnChangeHandler={stateTax.input.onChange}
        thirdOnChangeHandler={moneyAcquisitionType.input.onChange}
        FourthOnChangeHandler={moneyAcquisitionType.input.onChange}
        moneyAcquisitionType={moneyAcquisitionType.input.value}
        isFormSubmitted={isFormSubmitted}
        totalConvertedAmountToPay={totalConvertedAmountToPay}
        dollarToReal={dollarToReal}
        formValues={formValues}
        toggleisFormSubmitted={toggleisFormSubmitted}
        reset={reset}
      />
      <div
        style={{
          alignSelf: "center",
          color: "red",
          fontSize: "12px",
          position: "absolute",
          top: "650px",
          left: "62px",
        }}
      >
        {dollars.meta.touched ? dollars.meta.error : ""}
        {stateTax.meta.touched ? stateTax.meta.error : ""}
        {moneyAcquisitionType.meta.touched
          ? moneyAcquisitionType.meta.error
          : ""}
      </div>
    </div>
  );
};

export default ConnectedFormCurrencyCard;
