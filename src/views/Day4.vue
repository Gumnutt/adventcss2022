<template>
  <main class="day4">
    <div class="keyboard">
      <div v-for="row in keys" :key="row" class="row">
        <div v-for="key in row" :key="key.key" :id="key.key" :class="['key', key.value.length > 1 && 'key--text', key == randomKey && 'key--jiggle']">
          {{ key.value }}
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      keys: [
        [
          { key: "backtick", value: "`" },
          { key: "1", value: "1" },
          { key: "2", value: "2" },
          { key: "3", value: "3" },
          { key: "4", value: "4" },
          { key: "5", value: "5" },
          { key: "6", value: "6" },
          { key: "7", value: "7" },
          { key: "8", value: "8" },
          { key: "9", value: "9" },
          { key: "0", value: "0" },
          { key: "minus", value: "-" },
          { key: "equals", value: "=" },
          { key: "del", value: "DEL" },
        ],
        [
          { key: "tab", value: "TAB" },
          { key: "q", value: "Q" },
          { key: "w", value: "W" },
          { key: "e", value: "E" },
          { key: "r", value: "R" },
          { key: "t", value: "T" },
          { key: "y", value: "Y" },
          { key: "u", value: "U" },
          { key: "i", value: "I" },
          { key: "o", value: "O" },
          { key: "p", value: "P" },
          { key: "square-brackets-open", value: "[" },
          { key: "square-brackets-close", value: "]" },
          { key: "backslash", value: "\\" },
        ],
        [
          { key: "CapsLock", value: "CAPS" },
          { key: "a", value: "A" },
          { key: "s", value: "S" },
          { key: "d", value: "D" },
          { key: "f", value: "F" },
          { key: "g", value: "G" },
          { key: "h", value: "H" },
          { key: "j", value: "J" },
          { key: "k", value: "K" },
          { key: "l", value: "L" },
          { key: "semicolon", value: ";" },
          { key: "single-quote", value: "'" },
          { key: "enter", value: "ENTER" },
        ],
        [
          { key: "shift", value: "SHIFT" },
          { key: "z", value: "Z" },
          { key: "x", value: "X" },
          { key: "c", value: "C" },
          { key: "v", value: "V" },
          { key: "b", value: "B" },
          { key: "n", value: "N" },
          { key: "m", value: "M" },
          { key: "comma", value: "," },
          { key: "period", value: "." },
          { key: "forwardslash", value: "/" },
          { key: "shift", value: "SHIFT" },
        ],
      ],
      randomKey: {},
    }
  },
  mounted() {
    this.getRandomKey()
  },
  computed: {
    keydown() {
      window.addEventListener("keydown", (e) => {
        console.log(e.key)
        if (e.key.toLowerCase() == this.randomKey.value.toLowerCase()) {
          document.getElementById(this.randomKey.key).classList.remove("key--jiggle")
          this.getRandomKey()
        }
      })
    },
  },
  methods: {
    getRandomKey() {
      const randomRow = Math.floor(Math.random() * this.keys.length)
      const randomKey = Math.floor(Math.random() * this.keys[randomRow].length)
      return (this.randomKey = this.keys[randomRow][randomKey])
    },
  },
}
</script>

<style></style>
