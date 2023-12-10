import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ThirdwebProvider } from "@thirdweb-dev/react";

import { StateContextProvider } from "./context";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThirdwebProvider
    clientId="4d08d30264057d6ae4062f7fd27bd82d"
    activeChain={{
      chainId:  1440002, 
      nativeCurrency: {
        decimals: 18,
        name: "XRPL",
        symbol: "XRP",
      },
      rpc: ["https://rpc-evm-sidechain.xrpl.org"],
      shortName: "XRP", // Display value shown in the wallet UI
      slug: "consensys", // Display value shown in the wallet UI
      testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
      chain: "XRPL EVM Sidechain", // Name of the network
      name: "XRPL EVM Sidechain",
    }}
  >
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider>
);
