import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import { getHistory } from "../utils";
import CurrencyConverterPage from "./pages/CurrencyConverterPage";

class App extends React.PureComponent {
  render() {
    return (
      <>
        <ConnectedRouter history={getHistory()}>
          <Switch>
            <Route exact path="/" component={CurrencyConverterPage} />
          </Switch>
        </ConnectedRouter>
      </>
    );
  }
}

export default App;
