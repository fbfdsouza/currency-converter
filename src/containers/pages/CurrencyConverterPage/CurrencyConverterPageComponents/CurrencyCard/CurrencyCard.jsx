import React from "react";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";
import RadioButton from "../../../../../components/RadioButton";
import Button from "../../../../../components/Button";
import Icon from "../../../../../components/Icon";
import "../../../../../components/Input/style/Input.css";
import "./style/CurrencyCard.css";

const styles = {
  goBackButton: {
    display: "flex",
    flexDirection: "rowflex",
    alignItems: "flex-startflex",
    padding: "16pxflex",
    position: "static",
    width: "120px",
    height: "56px",
    left: "0px",
    top: "0px",
    background: "#ffffff",
    border: "1px solid #d7e0eb",
    boxSizing: "border-box",
    boxShadow: "0px 8px 4px rgba(13, 17, 27, 0.08)",
    borderRadius: "8px",
    order: "0",
  },
  radioButton1: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "0px",
    position: "static",
    width: "94px",
    height: "24px",
    left: "0px",
    top: "0px",
    flex: "none",
    order: "0",
    flexGrow: "0",
    margin: "0px 16px",
  },
  radioButton2: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "0px",
    position: "static",
    width: "82px",
    height: "24px",
    left: "110px",
    top: "0px",
    flex: "none",
    order: "1",
    flexGrow: "0",
    margin: "0px 16px",
  },
  buttonIcon: {
    position: "relative",
    width: "20px",
    height: "16.94px",
    left: "2px",
    top: "3.5px",
    color: "#FFF",
  },
  backButtonIcon: {
    position: "relative",
    width: "16px",
    height: "16px",
    left: "4px",
    top: "4px",
    color: "#8C9CAD",
  },
};

const CurrencyCard = ({
  firstOnchangeHandler,
  secondOnChangeHandler,
  thirdOnChangeHandler,
  FourthOnChangeHandler,
  moneyAcquisitionType,
  isFormSubmitted,
  totalConvertedAmountToPay,
  dollarToReal,
  formValues,
  toggleisFormSubmitted,
  reset,
}) => {
  return !isFormSubmitted ? (
    <div className="currency-card">
      <div className="input-block">
        <div>
          <div>Dólar</div>
          <NumberFormat
            onChange={firstOnchangeHandler}
            type="text"
            step="0.01"
            min="0"
            placeholder="$0.00"
            prefix="$"
          />
        </div>
        <div>
          <div>Taxa do Estado</div>

          <NumberFormat
            onChange={secondOnChangeHandler}
            type="text"
            step="0.01"
            min="0"
            placeholder="0%"
            suffix="%"
          />
        </div>
      </div>
      <div className="radio-block">
        <div className="purchase-type">Tipo de compra</div>
        <div className="radio-group">
          <RadioButton
            labelText="Dinheiro"
            value="Dinheiro"
            onChange={thirdOnChangeHandler}
            name="moneyAcquisition"
            checked={false}
            style={styles.radioButton1}
          />
          <RadioButton
            labelText="Cartão"
            onChange={FourthOnChangeHandler}
            value="Cartão"
            name="moneyAcquisition"
            checked={false}
            style={styles.radioButton2}
          />
        </div>
      </div>

      <Button submit disabled={!moneyAcquisitionType}>
        <Icon
          iconClassName="exchange alternate icon"
          style={styles.buttonIcon}
        />
        <div className="convert-text">Converter</div>
      </Button>
    </div>
  ) : (
    <div className="currency-card-result">
      <Button
        className="go-back-button"
        onClick={() => {
          toggleisFormSubmitted();
          reset();
        }}
        style={styles.goBackButton}
      >
        <Icon iconClassName="arrow left icon" style={styles.backButtonIcon} />
        <div className="back-text">Voltar</div>
      </Button>
      <div className="result-block">
        <div className="result-title">O resultado do cálculo é</div>
        <div className="result-value">
          R$ {Number(totalConvertedAmountToPay).toFixed(2)}
        </div>
      </div>
      <div className="purchase-description">
        <div>
          Compra no {formValues?.moneyAcquisitionType} a taxa de
          {`\u00A0${formValues?.stateTax}`}
        </div>
        <div>Cotação do dólar $1,00 = R${Number(dollarToReal).toFixed(2)}</div>
      </div>
    </div>
  );
};

CurrencyCard.propTypes = {
  firstOnchangeHandler: PropTypes.func.isRequired,
  secondOnChangeHandler: PropTypes.func.isRequired,
  thirdOnChangeHandler: PropTypes.func.isRequired,
  FourthOnChangeHandler: PropTypes.func.isRequired,
  toggleisFormSubmitted: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  moneyAcquisitionType: PropTypes.string,
  isFormSubmitted: PropTypes.bool.isRequired,
  totalConvertedAmountToPay: PropTypes.number,
  dollarToReal: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  formValues: PropTypes.object,
};

CurrencyCard.defaultProps = {
  moneyAcquisitionType: undefined,
  totalConvertedAmountToPay: undefined,
  dollarToReal: undefined,
  formValues: {},
};

export default CurrencyCard;
