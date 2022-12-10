<script setup lang="ts">
import { Tabs, Tab } from "vue3-tabs-component";

import Card from "@/components/Card.vue";
</script>

<template>
  <Card class="card--fullwidth">
    <div class="table-widget">
      <tabs nav-class="tab" nav-item-link-class="tab__item">
        <tab name="Summary"> Summary </tab>
        <tab name="Table"> </tab>
        <tab name="Charts"> </tab>
        <tab name="Reporting"> </tab>
        <tab name="Analysis"> </tab>
      </tabs>
    </div>
  </Card>
</template>

<style lang="scss" scoped>
.card--fullwidth {
  grid-column: 1/3;
  padding: 2.286rem;

  @include bp($bp-medium) {
    grid-column: initial;
  }
}

.table-widget {
  &:deep(.tab) {
    border-bottom: 1px solid $background-tertiary;
    display: grid;
    grid-template-columns: repeat(5, min-content);
    gap: 1.714rem;
  }

  &:deep(.tab__item) {
    display: inline-block;
    color: $text-secondary;
    font-size: 1.143rem;
    line-height: 1.714rem;
    letter-spacing: 0.01rem;
    padding-bottom: calc(1.143rem - 4px);
  }

  &:deep(.is-active a) {
    color: $text-primary;
    border-bottom: 4px solid $accent;
    font-weight: 500;
  }
}
</style>
