<template>
  <div class="card">
      <slot></slot>
  </div>
</template>

<style scoped>
.card {
  /* background-color: var(--vanilla); */
  background-color: var(--midnight-green);
  /* opacity: 0.5; */
  /* color: var(--rich-black); */
  color: var(--vanilla);
  border-radius: 4px;
  /* box-shadow: 0 2px 8px rgba(255, 255, 255, 0.26); */
  padding: 1rem;
  margin: 2rem auto;
  /* width: fit-content; */
  max-width: 40rem;
}

.content {
  background-color: var(--vanilla);
  padding: 1rem;
  /* margin: 2rem auto; */
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>
