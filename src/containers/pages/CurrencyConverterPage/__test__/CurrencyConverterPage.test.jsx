import React from "react";
import { fireEvent } from "@testing-library/react";
import renderWithRedux from "../../../../test-utils";
import ConnectedCurrencyConverterPage from "../CurrencyConverterPage";

const startingState = {
  currencyConverter: {
    dollarToReal: "5.6845",
  },
  form: {
    convertCurrencyForm: {
      registeredFields: {
        dollars: {
          name: "dollars",
          type: "Field",
          count: 1,
        },
        stateTax: {
          name: "stateTax",
          type: "Field",
          count: 1,
        },
        moneyAcquisitionType: {
          name: "moneyAcquisitionType",
          type: "Field",
          count: 1,
        },
      },
    },
  },
  router: {
    location: {
      pathname: "/",
      search: "",
      hash: "",
      state: null,
      key: "default",
      query: {},
    },
    action: "POP",
  },
};

it("Render ConnectedCurrencyConverterPage without exploding", () => {
  renderWithRedux(<ConnectedCurrencyConverterPage />, {
    startingState,
  });
});

it("Check converted result based on initial state and money acquisition", () => {
  const { getByText } = renderWithRedux(<ConnectedCurrencyConverterPage />, {
    initialState: {
      ...startingState,
      form: {
        convertCurrencyForm: {
          registeredFields: {
            dollars: {
              name: "dollars",
              type: "Field",
              count: 1,
            },
            stateTax: {
              name: "stateTax",
              type: "Field",
              count: 1,
            },
            moneyAcquisitionType: {
              name: "moneyAcquisitionType",
              type: "Field",
              count: 1,
            },
          },
          values: {
            dollars: "$500",
            stateTax: "10%",
            moneyAcquisitionType: "Dinheiro",
          },
        },
      },
    },
  });

  const button = getByText("Converter");
  fireEvent.click(button);
  getByText("R$ 3160.87");
});

it("Check converted result based on initial state and card acquisition", () => {
  const { getByText } = renderWithRedux(<ConnectedCurrencyConverterPage />, {
    initialState: {
      ...startingState,
      form: {
        convertCurrencyForm: {
          registeredFields: {
            dollars: {
              name: "dollars",
              type: "Field",
              count: 1,
            },
            stateTax: {
              name: "stateTax",
              type: "Field",
              count: 1,
            },
            moneyAcquisitionType: {
              name: "moneyAcquisitionType",
              type: "Field",
              count: 1,
            },
          },
          values: {
            dollars: "$500",
            stateTax: "10%",
            moneyAcquisitionType: "Cartão",
          },
        },
      },
    },
  });

  const button = getByText("Converter");
  fireEvent.click(button);
  getByText("R$ 3326.57");
});

it("Awarn if dollars field is empty", () => {
  const { getByText } = renderWithRedux(<ConnectedCurrencyConverterPage />, {
    initialState: {
      ...startingState,
      form: {
        convertCurrencyForm: {
          registeredFields: {
            dollars: {
              name: "dollars",
              type: "Field",
              count: 1,
            },
            stateTax: {
              name: "stateTax",
              type: "Field",
              count: 1,
            },
            moneyAcquisitionType: {
              name: "moneyAcquisitionType",
              type: "Field",
              count: 1,
            },
          },
          values: {
            stateTax: "10%",
            moneyAcquisitionType: "Cartão",
          },
        },
      },
    },
  });

  const button = getByText("Converter");
  fireEvent.click(button);
  getByText("Informe a quantidade de dollares");
});

it("Awarn if tax state field is empty", () => {
  const { getByText } = renderWithRedux(<ConnectedCurrencyConverterPage />, {
    initialState: {
      ...startingState,
      form: {
        convertCurrencyForm: {
          registeredFields: {
            dollars: {
              name: "dollars",
              type: "Field",
              count: 1,
            },
            stateTax: {
              name: "stateTax",
              type: "Field",
              count: 1,
            },
            moneyAcquisitionType: {
              name: "moneyAcquisitionType",
              type: "Field",
              count: 1,
            },
          },
          values: {
            dollars: "$500",
            moneyAcquisitionType: "Cartão",
          },
        },
      },
    },
  });

  const button = getByText("Converter");
  fireEvent.click(button);
  getByText("Informe a taxa estadual");
});

it("Awarn if currency acquisition type isnt defined", () => {
  const { getByText } = renderWithRedux(<ConnectedCurrencyConverterPage />, {
    initialState: {
      ...startingState,
      form: {
        convertCurrencyForm: {
          registeredFields: {
            dollars: {
              name: "dollars",
              type: "Field",
              count: 1,
            },
            stateTax: {
              name: "stateTax",
              type: "Field",
              count: 1,
            },
            moneyAcquisitionType: {
              name: "moneyAcquisitionType",
              type: "Field",
              count: 1,
            },
          },
          values: {
            dollars: "$500",
            stateTax: "10%",
          },
        },
      },
    },
  });

  const button = getByText("Converter");
  fireEvent.click(button);
  getByText("Informe a forma de aquisição da moeda");
});
