class CountdownTimer {
  constructor(obj) {
    this.selector = obj.selector;
    this.targetData = obj.targetDate;
    this.interval = null;
  }
  getRefs() {
    return {
      days: document.querySelector(`${this.selector} [data-value="days"]`),
      hours: document.querySelector(`${this.selector} [data-value="hours"]`),
      mins: document.querySelector(`${this.selector} [data-value="mins"]`),
      sec: document.querySelector(`${this.selector} [data-value="secs"]`),
    };
  }
  updateDate() {
    this.interval = setInterval(() => {
      const time = this.targetData - Date.now();
      if (time < 0) {
        clearInterval(this.interval);
        return;
      }
      this.getRefs().days.textContent = Math.floor(time / (1000 * 60 * 60 * 24));
      this.getRefs().hours.textContent = Math.floor(
        (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.getRefs().mins.textContent = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      this.getRefs().sec.textContent = Math.floor((time % (1000 * 60)) / 1000);
    }, 1000);
  }
}

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("May 30, 2021 6:55"),
}).updateDate();
