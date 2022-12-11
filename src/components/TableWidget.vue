<script lang="ts">
import { mapStores } from "pinia";
import { Tabs, Tab } from "vue3-tabs-component";

import { Line } from "vue-chartjs";
import "chart.js/auto";

import CryptoIcon from "vue-cryptoicon/src/components/Cryptoicon.vue";
import icons from "vue-cryptoicon/src/icons";

CryptoIcon.add(icons);

import Card from "@/components/Card.vue";
import Button from "@/components/Button.vue";

import { useCoinStore } from "@/stores/coins";

// options api used here as workaround to enable crypto icons
export default {
  data() {
    return {
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: {
            display: false,
            ticks: {
              min: 0,
              max: 10000,
              stepSize: 1,
            },
          },

          x: {
            display: false,
          },
        },
        elements: {
          point: { radius: 1 },
        },
      },
    };
  },
  computed: {
    ...mapStores(useCoinStore),
  },
  methods: {
    getChartData(symbol: string) {
      const data = this.coinStore.coinData.find((d) => d.symbol === symbol);

      return {
        labels: [
          "1 hour",
          "24 hours",
          "7 days",
          "30 days",
          "60 days",
          "90 days",
        ].reverse(),
        datasets: [
          {
            data: [
              data?.quote?.USD?.percent_change_1h,
              data?.quote?.USD?.percent_change_24h,
              data?.quote?.USD?.percent_change_7d,
              data?.quote?.USD?.percent_change_30d,
              data?.quote?.USD?.percent_change_60d,
              data?.quote?.USD?.percent_change_90d,
            ].reverse(),
            borderColor: this.isNegativeValue(
              data?.quote?.USD?.percent_change_24h
            )
              ? "#ea4d4d"
              : "#2dc78f",
            lineTension: 0.5,
          },
        ],
      };
    },
    isNegativeValue(val: number) {
      return val.toString().startsWith("-");
    },
    formatChange(val: number) {
      return this.isNegativeValue(val)
        ? `- ${val.toFixed(2).toString().split("").slice(1).join("")}%`
        : `+ ${val.toFixed(2)}%`;
    },
    formatPrice(val: number) {
      const [dollars, cents] = val.toString().split(".");

      const dollarsWithDots = dollars
        .split("")
        .reverse()
        .reduce((acc, itm, i, arr) => {
          const isLastElem = i === arr.length - 1;
          const shouldAddSeparator = !isLastElem && (i + 1) / 3 === 1;

          return [...acc, itm, shouldAddSeparator ? "," : ""];
        }, [])
        .reverse()
        .join("");

      return `${dollarsWithDots}.${val.toFixed(2).split(".")[1]}`;
    },
  },

  components: {
    Tabs,
    Tab,
    CryptoIcon,
    Card,
    Button,
    Line,
  },
};
</script>

<template>
  <Card class="card--fullwidth">
    <div class="table-widget">
      <tabs nav-class="tab" nav-item-link-class="tab__item">
        <tab name="Summary">
          <ul class="summary-list">
            <li
              v-for="item in coinStore.coinData"
              class="summary-list__item"
              :key="item.id"
            >
              <article class="product-info">
                <section
                  class="product-info__section product-info__section--multi"
                >
                  <span class="product-info__icon">
                    <CryptoIcon :symbol="item.symbol" size="32" />
                  </span>
                  <h3 class="product-info__text--alt">
                    {{ item.symbol }}
                  </h3>
                  <h4 class="product-info__text">
                    {{ item.name }}
                  </h4>
                </section>
                <section class="product-info__section">
                  <h3 class="product-info__text--alt">Price</h3>
                  <h4 class="product-info__text">
                    ${{ formatPrice(item.quote.USD.price) }}
                  </h4>
                </section>
                <section class="product-info__section">
                  <h3 class="product-info__text--alt">Change</h3>
                  <h4
                    class="product-info__text"
                    :class="
                      isNegativeValue(item.quote.USD.percent_change_24h)
                        ? 't-text-danger'
                        : 't-text-success'
                    "
                  >
                    {{ formatChange(item.quote.USD.percent_change_24h) }}
                    <svg
                      v-if="!isNegativeValue(item.quote.USD.percent_change_24h)"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_0_1)">
                        <path
                          d="M10.0001 10.0001V6.00008M10.0001 6.00008H6.00012M10.0001 6.00008L6.00012 10M14.6667 8.00004C14.6667 11.6819 11.6819 14.6667 8 14.6667C4.3181 14.6667 1.33333 11.6819 1.33333 8.00004C1.33333 4.31814 4.3181 1.33337 8 1.33337C11.6819 1.33337 14.6667 4.31814 14.6667 8.00004Z"
                          stroke="#2DC78F"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <circle
                        opacity="0.2"
                        cx="8"
                        cy="8"
                        r="7"
                        fill="#2DC78F"
                      />
                      <defs>
                        <clipPath id="clip0_0_1">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      v-if="isNegativeValue(item.quote.USD.percent_change_24h)"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.5001 6.00008V10.0001M10.5001 10.0001H6.50013M10.5001 10.0001L6.50013 6M15.1667 8.00004C15.1667 11.6819 12.1819 14.6667 8.5 14.6667C4.8181 14.6667 1.83334 11.6819 1.83334 8.00004C1.83334 4.31814 4.8181 1.33337 8.5 1.33337C12.1819 1.33337 15.1667 4.31814 15.1667 8.00004Z"
                        stroke="#EA4D4D"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <circle
                        opacity="0.2"
                        cx="8.5"
                        cy="8"
                        r="7"
                        fill="#EA4D4D"
                      />
                    </svg>
                  </h4>
                </section>
                <section class="product-info__chart">
                  <Line
                    :data="getChartData(item.symbol)"
                    :options="chartOptions"
                  />
                </section>
                <section class="product-info__controls">
                  <Button alt value="Sell" />
                  <Button value="Buy" />
                </section>
              </article>
            </li>
          </ul>
        </tab>
        <tab name="Table"> </tab>
        <tab name="Charts"> </tab>
        <tab name="Reporting"> </tab>
        <tab name="Analysis"> </tab>
      </tabs>
    </div>
  </Card>
</template>

<style lang="scss" scoped>
.card--fullwidth {
  grid-column: 1/3;
  padding: 2.286rem;

  @include bp($bp-medium) {
    grid-column: initial;
  }
}

.table-widget {
  &:deep(.tab) {
    border-bottom: 1px solid $background-tertiary;
    display: grid;
    grid-template-columns: repeat(5, min-content);
    gap: 1.714rem;
  }

  &:deep(.tab__item) {
    display: inline-block;
    color: $text-secondary;
    font-size: 1.143rem;
    line-height: 1.714rem;
    letter-spacing: 0.01rem;
    padding-bottom: calc(1.143rem - 4px);
  }

  &:deep(.is-active a) {
    color: $text-primary;
    border-bottom: 4px solid $accent;
    font-weight: 500;
  }
}

.summary-list {
  display: flex;
  flex-direction: column;
  row-gap: 0.571rem;
  padding: 2.429rem 0;
}
.product-info {
  background-color: $background-primary;
  border: 1px solid $background-tertiary;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.078rem;

  &__section {
    display: grid;
    grid-template-rows: 1fr 1fr;

    &--multi {
      grid-template-columns: min-content 1fr;
      min-width: 11.74rem;
    }
  }

  &__icon {
    height: 3.428rem;
    width: 3.428rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $background-primary;
    border: 1px solid $background-tertiary;
    border-radius: 50%;
    grid-row: 1/3;
    margin-right: 1.1428rem;
  }

  &__text {
    font-size: 1rem;
    color: $text-primary;
    font-weight: 600;
    align-self: self-start;
    display: flex;
    column-gap: 0.5rem;

    &--alt {
      color: $text-secondary;
      font-weight: 400;
      font-size: 1rem;
      align-self: self-end;
      padding-bottom: 0.215rem;
    }
  }

  &__chart {
    width: 10.571rem;
    height: 2.286rem;
  }

  &__controls {
    & button:first-child {
      margin-right: 0.571rem;
    }
  }
}
</style>
