(() => {
  "use strict";

  // August 1, 2026 at 12:00 AM in California. California is on PDT (UTC-7)
  // at this date, so the offset fixes one global launch instant for everyone.
  const launchAt = Date.parse("2026-08-01T00:00:00-07:00");
  const countdownStartedAt = Date.parse("2026-07-15T00:00:00-07:00");

  const elements = {
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    minutes: document.getElementById("minutes"),
    seconds: document.getElementById("seconds"),
    status: document.getElementById("countdown-status"),
    progress: document.getElementById("countdown-progress-bar"),
  };

  let timer = null;

  const pad = (value) => String(value).padStart(2, "0");

  const updateDigit = (element, value) => {
    if (!element || element.textContent === value) return;

    element.textContent = value;
    element.classList.remove("tick");
    void element.offsetWidth;
    element.classList.add("tick");
  };

  const render = () => {
    const now = Date.now();
    const remaining = Math.max(0, launchAt - now);
    const totalSeconds = Math.floor(remaining / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    updateDigit(elements.days, pad(days));
    updateDigit(elements.hours, pad(hours));
    updateDigit(elements.minutes, pad(minutes));
    updateDigit(elements.seconds, pad(seconds));

    const fullWindow = launchAt - countdownStartedAt;
    const elapsed = Math.min(fullWindow, Math.max(0, now - countdownStartedAt));
    if (elements.progress) {
      elements.progress.style.width = `${(elapsed / fullWindow) * 100}%`;
    }

    if (remaining === 0) {
      if (elements.status) {
        elements.status.textContent = "The new IPI website reveal is here.";
      }
      document.title = "IPI — The reveal is here";
      if (timer) window.clearInterval(timer);
    }
  };

  render();
  timer = window.setInterval(render, 1000);
})();
