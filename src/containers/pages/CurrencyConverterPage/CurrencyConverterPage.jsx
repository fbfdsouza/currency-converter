import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Fields, reduxForm } from "redux-form";

import CurrencyHeader from "./CurrencyConverterPageComponents/CurrencyHeader";
import dollarToRealConversion from "../../../api/fetchDollarToRealConversion";
import { currencyConverter } from "../../../redux/modules";
import ConnectedFormCurrencyCard from "./CurrencyConverterPageComponents/ConnectedFormCurrencyCard";
import CurrencyConverterBackground from "./CurrencyConverterPageComponents/CurrencyConverterBackground";
import "./style/CurrencyConverterPage.css";
import { IOF } from "../../../redux/modules/currencyConverter/currencyConversionConstants";

class CurrencyConverterPage extends React.PureComponent {
  state = { isFormSubmitted: false };

  async componentDidMount() {
    const { saveDollarToRealConversion } = this.props;
    const result = await dollarToRealConversion.get("/");
    saveDollarToRealConversion(result.data[0].high);
  }

  toggleisFormSubmitted = () => {
    const { isFormSubmitted } = this.state;
    this.setState({ isFormSubmitted: !isFormSubmitted });
  };

  formSubmit = (values) => {
    const { dollars, stateTax, moneyAcquisitionType } = values;
    const IOF_TAX = IOF[moneyAcquisitionType];
    const { dollarToReal, setTotalAmountToPay } = this.props;

    // .replace(/[^\d.-]/g, "") removes the $ and % from the fields the input fields
    const dollarsWithSign = dollars.replace(/[^\d.-]/g, "");
    const stateTaxWithSign = stateTax.replace(/[^\d.-]/g, "");
    const totalAmountToPayWithTaxes =
      (Number(dollarsWithSign) +
        (Number(dollarsWithSign) * Number(stateTaxWithSign)) / 100) *
      (Number(dollarToReal) + (Number(dollarToReal) * IOF_TAX) / 100);

    setTotalAmountToPay(totalAmountToPayWithTaxes);
    this.toggleisFormSubmitted();
  };

  render() {
    const {
      handleSubmit,
      totalConvertedAmountToPay,
      formValues,
      dollarToReal,
      reset,
    } = this.props;
    const { isFormSubmitted } = this.state;
    return (
      <form
        onSubmit={handleSubmit(this.formSubmit.bind(this))}
        style={{ width: "100%", height: "100%" }}
      >
        <CurrencyConverterBackground />
        <CurrencyHeader />

        <Fields
          names={["dollars", "stateTax", "moneyAcquisitionType"]}
          component={ConnectedFormCurrencyCard}
          props={{
            isFormSubmitted,
            totalConvertedAmountToPay,
            dollarToReal,
            formValues,
            toggleisFormSubmitted: this.toggleisFormSubmitted.bind(this),
            reset,
          }}
        />
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.moneyAcquisitionType) {
    errors.moneyAcquisitionType = (
      <div>Informe a forma de aquisição da moeda</div>
    );
  }

  if (!values.stateTax) {
    errors.stateTax = <div>Informe a taxa estadual</div>;
  }

  if (!values.dollars) {
    errors.dollars = <div>Informe a quantidade de dollares</div>;
  }

  if (Number(values.dollars) <= 0) {
    errors.dollars = <div>Informe um valor válido para dolares</div>;
  }

  if (Number(values.stateTax) <= 0) {
    errors.stateTax = <div>Informe um valor válido para taxa estadual</div>;
  }

  return errors;
}

CurrencyConverterPage.propTypes = {
  saveDollarToRealConversion: PropTypes.func.isRequired,
  totalConvertedAmountToPay: PropTypes.number,
  setTotalAmountToPay: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  dollarToReal: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  formValues: PropTypes.object,
};

CurrencyConverterPage.defaultProps = {
  totalConvertedAmountToPay: undefined,
  dollarToReal: undefined,
  formValues: undefined,
};

const mapStateToProps = (state) => {
  return {
    dollarToReal: state.currencyConverter.dollarToReal,
    totalConvertedAmountToPay:
      state.currencyConverter.totalConvertedAmountToPay,
    formValues: state.form.convertCurrencyForm?.values,
  };
};

const mapDispatchToProps = {
  saveDollarToRealConversion:
    currencyConverter.actions.saveDollarToRealConversion,
  setTotalAmountToPay: currencyConverter.actions.setTotalConvertedAmountToPay,
};

const formConfig = {
  form: "convertCurrencyForm",
  validate,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm(formConfig)(CurrencyConverterPage));
