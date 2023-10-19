"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a;
exports.__esModule = true;
var reservoir_sdk_1 = require("@reservoir0x/reservoir-sdk");
var viem_1 = require("viem");
var reservoir_sdk_2 = require("@reservoir0x/reservoir-sdk");
(0, reservoir_sdk_2.createClient)({
    chains: [__assign(__assign({}, reservoir_sdk_2.reservoirChains.goerli), { active: true })],
    apiKey: "0130b72a-a81a-5675-81cf-e384d810f27e",
    source: "http://localhost:3000/"
});
var address = '0x3640ac4b3a3c0757B1B9589Dd136E96893274428';
var wallet = (0, viem_1.createWalletClient)({
    account: address,
    transport: (0, viem_1.http)()
});
var client = (_a = (0, reservoir_sdk_1.getClient)()) === null || _a === void 0 ? void 0 : _a.actions.acceptOffer({
    items: [
        {
            token: '0xb82a1ac057510a96e32e1977829f553e54c77d5e:1',
            quantity: 1
        },
    ],
    wallet: wallet,
    onProgress: function (steps, path) {
        console.log('path: ', path);
        console.log(steps);
    }
});
