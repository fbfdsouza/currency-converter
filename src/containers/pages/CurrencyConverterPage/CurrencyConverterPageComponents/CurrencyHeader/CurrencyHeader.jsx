import React from "react";
import Logo from "../../../../../components/Logo";
import { getCurrentDate, getCurrentTime } from "../../../../../utils";
import "./style/CurrencyHeader.css";

const CurrencyHeader = () => {
  return (
    <div className="currency-header">
      <Logo path="/img/stone.svg" className="main-logo" />
      <div className="api-info">
        <div className="time-info">
          {`${getCurrentDate()}  \u00A0\u00A0|\u00A0\u00A0 ${getCurrentTime()}`}
        </div>
        <div className="currency-message">
          Dados de câmbio disponibilizados pela Morninstar
        </div>
      </div>
    </div>
  );
};

export default CurrencyHeader;
