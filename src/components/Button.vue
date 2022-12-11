<script setup lang="ts">
defineProps<{
  value: string;
  alt?: boolean;
}>();
</script>

<template>
  <button class="button" :class="{ 'button--alt': alt }">
    {{ value }}
  </button>
</template>

<style lang="scss" scoped>
.button {
  line-height: 1.714rem;
  font-weight: 500;
  color: $background-primary;
  background-color: $accent;
  border-radius: 4px;
  border: none;
  padding: 0.571rem 1.143rem;
  letter-spacing: 0.028rem;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: darken($accent, 5%);
  }

  &--alt {
    color: $accent;
    background-color: $background-primary;
    border: 1px solid $background-tertiary;

    &:hover {
      background-color: darken($background-primary, 5%);
    }
  }
}
</style>
