import React from "react";
import "./App.css";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { LightTheme, BaseProvider } from "baseui";

function App() {
  const engine = new Styletron();
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <App />
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
