<script setup lang="ts">
defineProps<{
  heading?: string;
  withMenuBtn?: boolean;
}>();
</script>

<template>
  <section class="card">
    <header v-if="heading" class="card__header">
      <h2 class="card__heading">
        {{ heading }}
      </h2>
      <button v-if="withMenuBtn" class="card__menu-btn menu-btn">
        <span class="menu-btn__icon">
          <svg
            width="18"
            height="4"
            viewBox="0 0 18 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 3C9.55228 3 10 2.55228 10 2C10 1.44772 9.55228 1 9 1C8.44772 1 8 1.44772 8 2C8 2.55228 8.44772 3 9 3Z"
              stroke="#9896A1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16 3C16.5523 3 17 2.55228 17 2C17 1.44772 16.5523 1 16 1C15.4477 1 15 1.44772 15 2C15 2.55228 15.4477 3 16 3Z"
              stroke="#9896A1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2 3C2.55228 3 3 2.55228 3 2C3 1.44772 2.55228 1 2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3Z"
              stroke="#9896A1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </button>
    </header>
    <slot></slot>
  </section>
</template>

<style scoped lang="scss">
.card {
  background-color: $background-secondary;
  border-radius: 1.143rem;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2.286rem;
  }

  &__heading {
    @include heading;
  }
}

.menu-btn {
  width: 1.714rem;
  height: 1.714rem;
  background-color: transparent;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: $background-tertiary;
  }

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.143rem;
  }
}
</style>
