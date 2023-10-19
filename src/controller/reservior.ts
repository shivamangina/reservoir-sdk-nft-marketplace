import { getClient, Execute } from '@reservoir0x/reservoir-sdk';
import { createWalletClient, http } from 'viem';
import fetch from 'node-fetch';

export const buyToken = async () => {
  console.log('buyToken: ', buyToken);
  const address = '0x8ba1f109551bD432803012645Ac136ddd6000000';
  const wallet = createWalletClient({
    account: address,
    transport: http(),
  });

  createClient({
    chains: [{
      ...reservoirChains.mainnet,
      active: true,
    }],
    apiKey: "0130b72a-a81a-5675-81cf-e384d810f27e",
    source: "http://localhost:3000/"
  });
  

  const client = getClient()?.actions.acceptOffer({
    items: [
      {
        token:
          '0xd4416b13d2b3a9abae7acd5d6c2bbdbe25686401:71222826765687982831964749613131730624053992559032577219236101239366822965048',
        quantity: 1,
      },
    ],
    wallet,
    onProgress: (steps: Execute['steps'], path: Execute['path']) => {
      console.log('path: ', path);
      console.log(steps);
    },
  });
};

export const getTokens = async () => {
  const tokens = await fetch(
    'https://api.reservoir.tools/tokens/v5?limit=20&collection=0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
  );
  return tokens.json();
};

export const getOrders = async () => {
  const tokens = await fetch('https://api.reservoir.tools/orders/asks/v5');
  return tokens.json();
};
