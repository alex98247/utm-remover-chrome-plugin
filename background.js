const utmRegexp = /(\?|\&)(utm_[^=]+\=[^&]*)/g

chrome.webNavigation.onBeforeNavigate.addListener(() => {
    console.log('wake up')
});

chrome.webRequest.onBeforeRequest.addListener((details) => {
        if (utmRegexp.test(details.url)) {
            chrome.tabs.update(details.tabId, {url: details.url.replace(utmRegexp, '').replace('&', '?')});
        }
    },
    {
        urls: ["<all_urls>"],
        types: ["main_frame"]
    }
);
