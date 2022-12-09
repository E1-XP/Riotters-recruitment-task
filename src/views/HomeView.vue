<script setup lang="ts">
import Navigation from "@/components/Navigation.vue";
import BalanceWidget from "@/components/BalanceWidget.vue";
import ChartWidget from "@/components/ChartWidget.vue";
import TableWidget from "@/components/TableWidget.vue";
</script>

<template>
  <Navigation />
  <main class="main">
    <BalanceWidget />
    <ChartWidget />
    <TableWidget />
  </main>
</template>

<style lang="scss" scoped>
.main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: $grid-gutter;

  @include bp($bp-medium) {
    grid-template-columns: 1fr;
    gap: $grid-gutter-small;
  }
}
</style>
