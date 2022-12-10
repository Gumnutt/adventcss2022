<template>
  <main class="day6">
    <article class="range">
      <h2><span>$</span> {{ parseFloat(range).toFixed(2) }}</h2>
      <input type="range" min="1.00" max="100.00" step="0.01" v-model="range" :style="`background-size:${backgroundSize}`" />
      <button>Buy now</button>
    </article>
  </main>
</template>

<script>
export default {
  data() {
    return {
      range: 1.0,
    }
  },
  computed: {
    backgroundSize() {
      const min = 1.0
      const max = 100.0
      return ((this.range - min) * 100) / (max - min) + "% 100%"
    },
  },
}
</script>

<style></style>
