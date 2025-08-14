chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
    text: "OFF",
  });
});

//https://developer.chrome.com/docs/extensions/get-started/tutorial/scripts-activetab