const utmRegexp = /(\?|\&)(utm_[^=]+\=[^&]*)/g

chrome.webRequest.onBeforeRequest.addListener((details) => {
       if(utmRegexp.test(details.url)) {
           chrome.tabs.update(details.tabId, {url: details.url.replace(utmRegexp, '').replace('&', '?')});
        }
    },
    {
        urls: ["<all_urls>"],
        types: ["main_frame"]
    }
);
