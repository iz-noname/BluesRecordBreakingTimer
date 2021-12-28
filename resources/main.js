const stopwatch = document.getElementById('stopwatch');
const countdown = document.getElementById('countdown');

let stopwatchHours = 0;
let stopwatchMinutes = 0;
let stopwatchSeconds = 0;
let stoptime = true;

let countdownHours = 30;
let countdownMinutes = 0;
let countdownSeconds = 0;

function startStopwatch() {
  if (stoptime == true) {
        stoptime = false;
        StopwatchCycle();
    }
}
function stopStopwatch() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function StopwatchCycle() {
  if (stoptime == false) {
    stopwatchSeconds = parseInt(stopwatchSeconds);
    stopwatchMinutes = parseInt(stopwatchMinutes);
    stopwatchHours = parseInt(stopwatchHours);

    stopwatchSeconds = stopwatchSeconds + 1;
    

    if (countdownHours != 0 || countdownMinutes != 0 || countdownSeconds != 0) {
      countdownSeconds = countdownSeconds - 1;
    }

    if (stopwatchSeconds == 60) {
      stopwatchMinutes = stopwatchMinutes + 1;
      stopwatchSeconds = 0;
    }
    if (stopwatchMinutes == 60) {
      stopwatchHours = stopwatchHours + 1;
      stopwatchMinutes = 0;
      stopwatchSeconds = 0;
    }
    if (countdownSeconds == -1 && countdownMinutes >= 0) {
      countdownMinutes = countdownMinutes - 1;
      countdownSeconds = 59;
    }
    if (countdownMinutes == -1 && countdownHours >= 0) {
      countdownHours = countdownHours - 1;
      countdownMinutes = 59;
      countdownSeconds = 59;
    }


    if (stopwatchSeconds < 10 || stopwatchSeconds == 0) {
      stopwatchSeconds = '0' + stopwatchSeconds;
    }
    if (stopwatchMinutes < 10 || stopwatchMinutes == 0) {
      stopwatchMinutes = '0' + stopwatchMinutes;
    }
    if (stopwatchHours < 10 || stopwatchHours == 0) {
      stopwatchHours = '0' + stopwatchHours;
    }

    if (countdownSeconds !== '0' && (countdownSeconds < 10 || countdownSeconds == 0)) {
      countdownSeconds = '0' + countdownSeconds;
    }
    if (countdownMinutes.toString(2).charAt(0) !== '0' && (countdownMinutes < 10 || countdownMinutes == 0)) {
      countdownMinutes = '0' + countdownMinutes;
    }
    if (countdownHours.toString(2).charAt(0) !== '0' && (countdownHours < 10 || countdownHours == 0)) {
      countdownHours = '0' + countdownHours;
    }
    
    if (countdownHours == 0 && countdownMinutes == 0 && countdownSeconds == 0) {
      countdown.style.color = "green";
    }

    stopwatch.innerHTML = stopwatchHours + 'h ' + stopwatchMinutes + 'm ' + stopwatchSeconds + 's';
    countdown.innerHTML = countdownHours + 'h ' + countdownMinutes + 'm ' + countdownSeconds + 's';

    setTimeout("StopwatchCycle()", 1000);
  }
}

function resetStopwatch() {
    stopwatch.innerHTML = "00h 00m 00s";
    countdown.innerHTML = "30h 00m 00s";

    stoptime = true;
    stopwatchHours = 0;
    stopwatchMinutes = 0;
    stopwatchSeconds = 0;

    countdownHours = 30;
    countdownMinutes = 0;
    countdownSeconds = 0;
}

function showMenu() {
  let menuButtons = document.getElementsByClassName("play-pause-reset");
  let showMenuArrow = document.getElementById("menu-arrow");
  for(let i = 0; i < menuButtons.length; i++) {
    if (menuButtons[i].style.display === "none") {
      menuButtons[i].style.display = "block";
      showMenuArrow.innerText = "keyboard_arrow_left";
      showMenuArrow.style.color = "#FFFFFF"
    } else {
      menuButtons[i].style.display = "none";
      showMenuArrow.innerText = "keyboard_arrow_right";
      showMenuArrow.style.color = "#404040"
    }
  }
}

let slideIndex = 0;
carousel();
function carousel() {
  let i;
  let logoElement = document.getElementsByClassName('footer-logos');
  for(i = 0; i < logoElement.length; i++) {
    logoElement[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > logoElement.length) {slideIndex = 1}
  logoElement[slideIndex-1].style.display = "block";
  setTimeout(carousel, 15000);
}