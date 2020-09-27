(function () {
  const spans = [...document.querySelectorAll('.time')];

  const updateSpanContent = (span, txt) => {
    span.innerHTML = txt < 10
      ? `0${txt}`
      : `${txt}`;
  };

  const tickClock = () => {
    const now = new Date();
    const time = [now.getHours(), now.getMinutes(), now.getSeconds()];
    spans.map((span, index) => updateSpanContent(span, time[index].toString()));
  };

  const setIdInterval = () => setInterval(tickClock, 1000);
  window.addEventListener('DOMContentLoaded', setIdInterval);
}());
