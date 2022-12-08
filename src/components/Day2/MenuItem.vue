<template>
  <article :class="['menu--item', `menu--item-${color}`]">
    <img :src="image" :alt="`${title} image`" />
    <div class="item--content">
      <p>{{ title }}</p>
      <h3>{{ price }}</h3>
      <button>Add to cart</button>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "",
    },
    price: {
      type: String,
      default: "",
    },
  },
}
</script>

<style></style>
