<script setup lang="ts">
import { Line } from "vue-chartjs";
import "chart.js/auto";
import gradientPlugin from "chartjs-plugin-gradient";

import Card from "@/components/Card.vue";

const chartData = {
  labels: [`$3,4k`, `$11,4k`, `$13,4k`, `$20,6k`, `$18,4k`, `$25,3k`],
  datasets: [
    {
      label: "This month",
      data: [3432, 11432, 13432, 20632, 18432, 25332],
      borderColor: "#7445fb",
      lineTension: 0.5,
      fill: true,
      order: 1,
      // gradient: {
      //   backgroundColor: {
      //     axis: "y",
      //     colors: {
      //       0: "red",
      //       50: "yellow",
      //       100: "green",
      //     },
      //   },
      // },
    },
    {
      label: "Last month",

      data: [7000, 15000, 12000, 11000, 9529, 6000],
      borderColor: "#858585",
      borderDash: [7, 2],
      borderWidth: 1.5,
      lineTension: 0.5,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
      reverse: true,
      align: "start",
      position: "bottom",
      labels: {
        color: "#9896a1",
        usePointStyle: true,
        boxWidth: 10,
      },
    },
  },
  scales: {
    y: {
      ticks: {
        callback: function (value: number) {
          return `${value / 1000}${value ? "k" : ""}`;
        },
      },
    },
    x: {
      display: false,
    },
  },
  elements: {
    point: { radius: 0 },
  },
};
</script>

<template>
  <Card heading="Summary" withMenuBtn>
    <div class="chart-widget">
      <div class="chart">
        <Line
          :data="chartData"
          :options="chartOptions"
          :plugins="[gradientPlugin]"
        />
      </div>

      <ul class="chart-widget__legend legend">
        <li class="legend__item">
          <span class="legend__icon"></span>
          This month
        </li>
        <li class="legend__item">
          <span class="legend__icon--alt legend__icon"></span>Last month
        </li>
      </ul>
    </div>
  </Card>
</template>

<style lang="scss" scoped>
.card {
  @include bp($bp-small) {
    order: 1;
  }
}

.chart-widget {
  padding: 0 2.286rem;
  padding-bottom: 1.214rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 17.72rem;

  @include bp($bp-very-small) {
    padding: 0 $grid-gutter-v-small;
  }
}

.chart {
  height: 13.5rem;
}

.legend {
  display: flex;

  &__item {
    color: $text-secondary;
    font-size: 0.857rem;

    &:last-of-type {
      margin-left: 0.857rem;
    }
  }

  &__icon {
    width: 0.571rem;
    height: 0.571rem;
    background-color: $accent;
    display: inline-block;
    border-radius: 50%;
    margin-right: 0.571rem;

    &--alt {
      background-color: $text-tertiary;
    }
  }
}
</style>
