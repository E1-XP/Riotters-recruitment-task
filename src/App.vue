<script setup lang="ts">
import HomeView from "@/views/HomeView.vue";
import { useCoinStore } from "@/stores/coins";

const { getData } = useCoinStore();

getData();
</script>

<template>
  <home-view></home-view>
</template>

<style scoped lang="scss"></style>
