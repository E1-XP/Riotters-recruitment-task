import { defineStore } from "pinia";

import { ResponseData, Data } from "./interfaces";

const FUNCTIONS_URL = `${window.location.origin}/.netlify/functions/getCoins`;

export const useCoinStore = defineStore("coin", {
  state: () => ({
    coinData: [] as Data[],
  }),
  actions: {
    async getData() {
      try {
        const response = await fetch(FUNCTIONS_URL);
        const data: ResponseData = await response.json();

        this.coinData = data.data.sort(
          (a, b) => b.quote.USD.price - a.quote.USD.price
        );

        console.log(this.coinData);
      } catch (err) {
        console.log(err);
      }
    },
  },
});
