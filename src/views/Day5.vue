<template>
  <main class="day5">
    <article class="podcast">
      <img src="/assets/images/podcast-cover.png" alt="" />
      <div class="card">
        <p>LISTEN TO ALL THE COMPRESSED.FM EPISODES</p>
        <ul class="tracks">
          <li v-for="(track, index) in tracks" :key="track">
            <input type="checkbox" :id="index" :name="index" /><label :for="index">{{ index }} || {{ track }}</label>
          </li>
        </ul>
      </div>
    </article>
  </main>
</template>

<script>
export default {
  data() {
    return {
      tracks: [
        "Trailer",
        "James Q Quick Origin Story",
        "Amy Dutton’s Origin Story",
        "Tech Behind the Podcast",
        "Tech Behind SelfTeach.me",
        "Freelancing (Part 1)",
      ],
    }
  },
}
</script>

<style></style>
