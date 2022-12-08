<template>
  <main class="day2">
    <img class="bg bg-btm-right" src="/assets/images/bg__btm-right.svg" alt="" />
    <img class="bg bg-top-right" src="/assets/images/bg__top-right.svg" alt="" />
    <img class="bg bg-left" src="/assets/images/bg__left.svg" alt="" />
    <PageWrapper>
      <h2>To Go Menu</h2>
      <MenuItem v-for="({ title, image, color, price }, index) in menu" :key="index" :title="title" :image="image" :color="color" :price="price" />
    </PageWrapper>
  </main>
</template>

<script>
import PageWrapper from "@/components/Day2/PageWrapper.vue"
import MenuItem from "../components/Day2/MenuItem.vue"
export default {
  components: {
    PageWrapper,
    MenuItem,
  },
  data() {
    return {
      menu: [
        {
          title: "French Fries with Ketchup",
          price: "4.50",
          image: "./assets/images/plate__french-fries.png",
          color: "blue",
        },
        {
          title: "Bacon and eggs",
          price: "5.50",
          image: "./assets/images/plate__bacon-eggs.png",
          color: "pink",
        },
        {
          title: "Chicken ceaser salad",
          price: "8.30",
          image: "./assets/images/plate__chicken-salad.png",
          color: "green",
        },
        {
          title: "Fish sticks and fries",
          price: "10.00",
          image: "./assets/images/plate__fish-sticks-fries.png",
          color: "white",
        },
        {
          title: "Salmon and vegetables",
          price: "14.50",
          image: "./assets/images/plate__salmon-vegetables.png",
          color: "blue",
        },
        {
          title: "Spaghetti and meat sauce",
          price: "10.50",
          image: "./assets/images/plate__spaghetti-meat-sauce.png",
          color: "pink",
        },
      ],
    }
  },
}
</script>

<style></style>
