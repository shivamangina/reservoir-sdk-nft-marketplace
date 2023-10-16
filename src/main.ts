import { createClient, reservoirChains } from "@reservoir0x/reservoir-sdk"


import init from "./server.js";

init(); 

createClient({
  chains: [{
    ...reservoirChains.mainnet,
    active: true,
  }],
  source: "YOUR.SOURCE"
});

