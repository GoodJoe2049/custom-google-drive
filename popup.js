
const THEMES = {
  ALTER_SHEET: {
    CLASSIC_DARK: {
      SURROUNDING: 'rgb(56, 56, 56)',
      SECONDARY: '',
      SHEET: '',
      TEXT: 'rgba(223, 223, 223, 1)'
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
  document.getElementsByClassName('docs-titlebar-buttons')[0].style.backgroundColor = theme.SURROUNDING;
  //document.getElementsByClassName('.kix-page-paginated')[0].style.color = theme.TEXT;
  // var doc = DocumentApp.openById('1vr0Ju8Mr617oZ6-F7nS9FNNk8_Cz_cO09S4jK7Tm0PE');
  // console.log(doc)
}

//https://developers.google.com/workspace/docs/api/how-tos/overview
//https://developers.google.com/apps-script/reference/document