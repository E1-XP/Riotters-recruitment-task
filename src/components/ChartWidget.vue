<script setup>
import Card from "@/components/Card.vue";
</script>

<template>
  <Card heading="Summary"></Card>
</template>

<style lang="scss" scoped>
.card {
  @include bp($bp-medium) {
    order: 1;
  }
}
</style>
