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
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: max-content;
  gap: $grid-gutter;

  @include bp($bp-small) {
    grid-template-columns: minmax(0, 1fr);
    gap: $grid-gutter-small;
  }
}
</style>
