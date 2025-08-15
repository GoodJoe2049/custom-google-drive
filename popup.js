
const THEMES = {
  ALTER_SHEET: {
    CLASSIC_DARK: {
      SURROUNDING: 'rgb(56, 56, 56)',
      SECONDARY: '',
      SHEET: '',
      TEXT: ''
    },
  },
};

// chrome.runtime.onInstalled.addListener(() => {
//   chrome.action.setBadgeText({
//     text: "OFF",
//   });
// });

document.getElementById('changeColorBtn').addEventListener('click', () => {
  const color = document.getElementById('colorPicker').value;
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: setColors,
      args: [THEMES.ALTER_SHEET.CLASSIC_DARK]
    });
  });
});

function setColors(theme) {
  document.getElementsByClassName('kix-appview-editor')[0].style.backgroundColor = theme.SURROUNDING;
  document.getElementById('docs-chrome').style.background = theme.SURROUNDING; //container changes back on scroll
  console.log(document.getElementsByClassName('kix-canvas-tile-content')[0].getContext('2d'))
  const pageCanvas = document.getElementsByClassName('kix-canvas-tile-content')[0].getContext('2d');
  pageCanvas.fillStyle = 'black';
  pageCanvas.fillRect(0, 0, pageCanvas.width, pageCanvas.height); //can't get page to change color
}
