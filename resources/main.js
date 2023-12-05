const stopwatch = document.getElementById('stopwatch');
const countdown = document.getElementById('countdown');

let stoptime = true;
let startTime, tInterval, updatedTime, difference;

function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor(total / (1000 * 60 * 60));

  return {
    total,
    seconds,
    minutes,
    hours
  };
}

function getTimeStopwatch() {
  updatedTime = new Date().getTime();
  difference = updatedTime - startTime;
  const seconds = Math.floor(difference / 1000) % 60 + 1;
  const minutes = Math.floor(difference / 1000 / 60) % 60;
  const hours = Math.floor(difference / 1000 / 60 / 60);

  return {
    difference,
    seconds,
    minutes,
    hours
  };
}

function addHours(numOfHours, date = new Date()) {
  date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
  return date;
}

function startStopwatch() {
  if (stoptime) {
    const deadline = addHours(32);
    startTime = new Date().getTime();

    function updateStopwatch() {
      const t = getTimeStopwatch();
      stopwatch.innerHTML = ('0' + t.hours).slice(-2) + 'h ' 
                          + ('0' + t.minutes).slice(-2) + 'm ' 
                          + ('0' + t.seconds).slice(-2) + 's ';
    }

    function updateClock() {
      const t = getTimeRemaining(deadline);
      countdown.innerHTML = ('0' + t.hours).slice(-2) + 'h ' 
                          + ('0' + t.minutes).slice(-2) + 'm ' 
                          + ('0' + t.seconds).slice(-2) + 's ';
      if (t.total <= 0) {
        clearInterval(timeIntervalClock);
        countdown.innerHTML = "00h 00m 00s";
      }
    };
    updateStopwatch();
    updateClock();
    tInterval = setInterval(updateStopwatch, 1);
    const timeIntervalClock = setInterval(updateClock, 1);
  }
}

function resetStopwatch() {
  stopwatch.innerHTML = "00h 00m 00s";
  countdown.innerHTML = "32h 00m 00s";

  stoptime = false;
  clearInterval(tInterval);
  clearInterval(timeIntervalClock);
  difference = 0;
}

// SHOW MENU
function showMenu() {
  let menuButtons = document.getElementsByClassName("play-pause-reset");
  let showMenuArrow = document.getElementById("menu-arrow");
  for (let i = 0; i < menuButtons.length; i++) {
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

// SPONSORS CAROUSEL
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