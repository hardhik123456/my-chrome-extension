document.getElementById("change-bg").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: () => {
        document.body.style.backgroundColor =
          document.body.style.backgroundColor === "lightblue" ? "white" : "lightblue";
      },
    });
  });
});
