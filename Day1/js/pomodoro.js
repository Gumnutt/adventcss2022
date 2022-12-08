"use strict"
const timerButton = document.getElementById("pomodoro")
const timer = document.getElementById("timer--time")
const timerStatus = document.getElementById("timer--status")
const defaultTime = 1

let seconds = defaultTime * 60 || 0
let interval
let timerState = false
let degTravel = 0

function secondsToTime(e) {
  const m = Math.floor((e % 3600) / 60)
    .toString()
    .padStart(2, "0")
  const s = Math.floor(e % 60)
    .toString()
    .padStart(2, "0")

  return m + ":" + s
}

function pomodoro(time) {
  interval = setInterval(function () {
    time--
    timer.innerHTML = secondsToTime(time)
    degTravel = (360 / (defaultTime * 60)) * (defaultTime * 60 - time)
    timerButton.style.setProperty("--timer-color", `var(--green)`)
    timerButton.style.setProperty("--degrees", `${degTravel}deg`)
    if (!time) {
      timerButton.style.setProperty("--degrees", `${degTravel}deg`)
      timerButton.style.setProperty("--timer-color", `var(--red)`)
      clearInterval(interval)
      alert("🚨 It is Cool 😎. I wish you could share ")
    }
    seconds = time
  }, 1000)
}

timer.innerHTML = secondsToTime(seconds)

timerButton.addEventListener("click", function () {
  timerState = !timerState
  if (timerState) {
    timerStatus.innerHTML = "Pause"
    return pomodoro(seconds)
  }
  timerStatus.innerHTML = "Start"
  clearInterval(interval)
})
