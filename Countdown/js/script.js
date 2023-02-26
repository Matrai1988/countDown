let workTimeMin = 0;
let breakTime = 5;

let workTimeSec = 10;
let timerInterval;
let minElement = document.getElementById("minutes");
let secElement = document.getElementById("seconds");

minElement.innerHTML = workTimeMin.toString().padStart(2, "0");
secElement.innerHTML = workTimeSec.toString().padStart(2, "0");

function start() {
  document.getElementsByClassName("container")[0].style.borderColor =
    "rgba(247, 0, 255, 0.443)";
  document.getElementById("start").style.display = "none";
  document.getElementById("stop").style.display = "block";

  let totalSeconds =
    parseInt(minElement.innerHTML) * 60 + parseInt(secElement.innerHTML);
  timerInterval = setInterval(() => {
    totalSeconds--;

    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    minElement.innerHTML = minutes.toString().padStart(2, "0");
    secElement.innerHTML = seconds.toString().padStart(2, "0");

    if (totalSeconds < 0) {
      clearInterval(timerInterval);
      document.getElementById("start").style.display = "block";
      document.getElementById("stop").style.display = "none";
      minElement.innerHTML = workTimeMin.toString().padStart(2, "0");
      secElement.innerHTML = workTimeSec.toString().padStart(2, "0");
      alert("Time is up!");
      document.getElementsByClassName("container")[0].style.borderColor =
        "green";
    }
  }, 1000);
}

function stop() {
  clearInterval(timerInterval);
  document.getElementById("start").style.display = "block";
  document.getElementById("stop").style.display = "none";
}

/*
















let workTitle = document.getElementById("work");
let breakTitle = document.getElementById("break");

let workTime = 25;
let breakTime = 5;

let seconds = "00";

window.onload = () => {
  document.getElementById("minutes").innerHTML = workTime;
  document.getElementById("seconds").innerHTML = seconds;

  workTitle.classList.add("active");
};

function start() {
  document.getElementById("start").style.display = "none";
  document.getElementById("reset").style.display = "block";

  seconds = 59;

  let workMinutes = workTime - 1;
  let breakMinutes = breakTime - 1;

  breakCount = "0";

  let timerFunction = () => {
    document.getElementById("minutes").innerHTML = workMinutes;
    document.getElementById("seconds").innerHTML = seconds;

    seconds = seconds - 1;

    if (seconds === 0) {
      workMinutes = workMinutes - 1;
      if (workMinutes === -1) {
        if (breakCount % 2 === 0) {
          workMinutes = breakMinutes;
          breakCount++;

          workTitle.classList.remove("active");
          breakTitle.classList.add("active");
        } else {
          workMinutes = workTime;
          breakCount++;
          breakTitle.classList.remove("active");
          workTitle.classList.add("active");
        }
      }

      seconds = "59";
    }
  };

  setInterval(timerFunction, 1000);
}*/
