// import { buyToken } from './controller/reservior';
import { getClient, Execute } from '@reservoir0x/reservoir-sdk';
import { createWalletClient, http } from 'viem';
import { privateKeyToAccount } from 'viem/accounts'
import { createClient, reservoirChains } from '@reservoir0x/reservoir-sdk';

createClient({
  chains: [
    {
      ...reservoirChains.mumbai,
      active: true,
      
    },
  ],
  
  apiKey: process.env.RESERVIOR_API_KEY,
  source: 'http://localhost:3000/',
  
});

const address = process.env.PRIVATE_KEY;
const wallet = createWalletClient({
  account: privateKeyToAccount(address),
  transport: http('https://rpc-mumbai.maticvigil.com'),
});

const client = getClient();
console.log('client: ', client);

client?.actions.buyToken({
  
  items: [
    {
      fillType: 'mint',
      collection: '0x361a05def951665e5db6500a67d4e46fe1a853f1'
      // token: '0x361a05def951665e5db6500a67d4e46fe1a853f1:1',
      
    },
  ],
  wallet,
  onProgress: (steps: Execute['steps'], path: Execute['path']) => {
    console.log('path: ', path);
    console.log(steps);
  },
});
