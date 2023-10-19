import init from './server.js';

import { createClient, reservoirChains } from "@reservoir0x/reservoir-sdk"
console.log('reservoirChains: ', reservoirChains);



createClient({
  chains: [{
    ...reservoirChains.mainnet,
    active: true,
  }],
  apiKey: "",
  source: "http://localhost:3000/"
});




// init();
