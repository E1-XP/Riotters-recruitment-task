<script setup lang="ts">
import { useCoinStore } from "@/stores/coins";

const { getData } = useCoinStore();

getData();
</script>

<template>
  <div class="wrapper"></div>
</template>

<style scoped lang="scss">
header {
  line-height: 1.5;
  max-height: 100vh;
  background-color: brown;
}
</style>
