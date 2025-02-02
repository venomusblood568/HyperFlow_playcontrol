document.addEventListener("DOMContentLoaded", () => {
  const speedControl = document.getElementById("speedControl");
  const speedValue = document.getElementById("speedValue");

  speedControl.addEventListener("input", () => {
    const speed = parseFloat(speedControl.value).toFixed(1);
    speedValue.textContent = speed + "x";

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {
        action: "changeSpeed",
        speed: parseFloat(speed),
      });
    });
  });
});
