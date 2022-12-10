<script setup lang="ts">
import Card from "@/components/Card.vue";
</script>

<template>
  <Card class="card--fullwidth">table</Card>
</template>

<style lang="scss" scoped>
.card--fullwidth {
  grid-column: 1/3;

  @include bp($bp-medium) {
    grid-column: initial;
  }
}
</style>
