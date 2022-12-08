import { defineStore } from "pinia";

const FUNCTIONS_URL = `${window.location.origin}/.netlify/functions/getCoins`;

export const useCoinStore = defineStore("coinStore", {
  state: () => ({
    data: [],
  }),
  actions: {
    async getData() {
      try {
        const response = await fetch(FUNCTIONS_URL);
        const data: any = await response.json();

        console.log(data);
      } catch (err) {
        console.log(err);
      }
    },
  },
});
