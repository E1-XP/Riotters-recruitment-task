import { defineStore } from "pinia";

const FUNCTIONS_URL = `${window.location.origin}/.netlify/functions/get-coins`;

export const useCoinStore = defineStore("coinStore", {
  state: () => ({
    data: [],
  }),
  actions: {
    async getData() {
      const response = await fetch(FUNCTIONS_URL);
      const data: any = await response.json();

      console.log(data);
    },
  },
});
