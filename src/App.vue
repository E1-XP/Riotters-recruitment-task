<script setup lang="ts">
import { useCoinStore } from "@/stores/coins";

const { getData } = useCoinStore();

getData();
</script>

<template>
  <div class="wrapper"></div>
</template>

<style scoped lang="scss"></style>
