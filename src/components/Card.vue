<script setup lang="ts">
defineProps<{ heading?: string }>();
</script>

<template>
  <section class="card">{{ heading }}</section>
</template>

<style scoped lang="scss">
.card {
  background-color: $background-secondary;
  border-radius: 1.143rem;
}
</style>
