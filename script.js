const daysRef = document.querySelector('[data-value="days"]');
const hoursRef = document.querySelector('[data-value="hours"]');
const minsRef = document.querySelector('[data-value="mins"]');
const secsRef = document.querySelector('[data-value="secs"]');

const timer = {
  intervalId: null,
  // isActive: true,

  start() {
    // const contdownTime = new Date("December 1, 2021 23:45:00").getTime();
    const contdownTime = new Date("January 22, 2021 17:11:00").getTime();

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = contdownTime - currentTime;
      getTimeComponents(deltaTime);
    }, 1000);
  },
  stop() {
    // this.isActive = false;
    if (this.contdownTime === this.currentTime) {
      clearInterval(this.intervalId);
      getTimeComponents(0);
    };
  },
};

function pad(value) {
  return String(value).padStart(2, "0");
}
function getTimeComponents(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  daysRef.textContent = `${days}`;
  hoursRef.textContent = `${hours}`;
  minsRef.textContent = `${mins}`;
  secsRef.textContent = `${secs}`;
}

timer.start();
