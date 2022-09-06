const utmRegexp = /([?&])utm_[A-z]+=[A-z0-9_]+(&|$)/g

chrome.webNavigation.onBeforeNavigate.addListener((details) => {
    console.log('details.url', details.url)
    if(details.url.indexOf("www.google.com") !== -1) {
        chrome.tabs.update(details.tabId, {
            url: details.url.replace(utmRegexp, '')
        });
    }
});