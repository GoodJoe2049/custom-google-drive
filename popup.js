
const THEMES = {
  LIGHT: {
    SLICE_OF_LIFE: {
      SURROUNDING: 'rgba(208, 236, 255, 1)',
      TOOLS: 'rgba(168, 220, 255, 1)',
      SHEET: 'rgba(255, 255, 255, 1)',
      TEXT: 'rgba(0, 0, 0, 1)'
    },
  },
  DARK: {
    CLASSIC_DARK: {
      SURROUNDING: 'rgba(46, 46, 46, 1)',
      TOOLS: 'rgba(32, 32, 32, 1)',
      SHEET: 'rgba(17, 17, 17, 1)',
      TEXT: 'rgba(199, 199, 199, 1)'
    },
  },
  CHROMATIC: {

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
      args: [THEMES.DARK.CLASSIC_DARK]
    });
  });
});

function setColors(theme) {
  document.getElementById('docs-editor').style.background = theme.TOOLS;

  document.getElementsByClassName('kix-appview-editor')[0].style.backgroundColor = theme.SURROUNDING;
  document.styleSheets[1].cssRules[3431].style.background = theme.TOOLS;
  document.styleSheets[1].cssRules[3074].style.color = theme.TEXT;
  document.styleSheets[1].cssRules[3512].style.backgroundColor = theme.TOOLS;

  document.styleSheets[1].cssRules[3438].style.backgroundColor = theme.TOOLS;

  const horizontalRuler = document.styleSheets[1].cssRules[11722].style;
  horizontalRuler.backgroundColor = theme.TOOLS;
  horizontalRuler.borderBottom = '1px solid ' + theme.TEXT;

  document.getElementById('kix-vertical-ruler').style.background = theme.TOOLS;
  const verticalRuler = document.styleSheets[1].cssRules[11723].style;
  verticalRuler.backgroundColor = theme.TOOLS;
  document.styleSheets[1].cssRules[11734].style.borderBottom = '1px solid ' + theme.TEXT;

  const innerRuler = document.styleSheets[1].cssRules[11732].style;
  innerRuler.backgroundColor = theme.TOOLS;
  innerRuler.borderBottomColor = theme.TEXT;

  //document.getElementsByClassName('.kix-page-paginated')[0].style.color = theme.TEXT;
  // var doc = DocumentApp.openById('1vr0Ju8Mr617oZ6-F7nS9FNNk8_Cz_cO09S4jK7Tm0PE');
  // console.log(doc)
}

//https://developers.google.com/workspace/docs/api/how-tos/overview
//https://developers.google.com/apps-script/reference/document