<script setup>
import Card from "@/components/Card.vue";
import Button from "@/components/button.vue";
</script>

<template>
  <Card heading="Current Balance" withMenuBtn>
    <h3 class="balance-widget__jumbotron">$21 432.23</h3>
    <p class="balance-widget__info-paragraph">12% vs last month</p>
    <Button value="Quick Invest" />
    <Button value="Show Report" alt />
  </Card>
</template>

<style lang="scss" scoped>
.balance-widget__jumbotron {
}

.button {
  &:first-of-type {
    margin-right: 0.571rem;
  }
}
</style>
