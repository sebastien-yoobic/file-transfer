# file-transfer

filetransfer.download() function in plugin does not work.

I followed the doc here:
https://ionicframework.com/docs/native/file-transfer/ 


steps to reproduce

with ionic 4 latest rc

`npm install` and 
`ionic cordova run ios` 

click on download, You will get the error:

```
TypeError: undefined is not an object (evaluating 'plugin.constructor')
checkAvailability — plugin.js:16
FileTransferObject — index.js:65
create — index.js:50
downloadToDevice — filetransfer.service.ts:12
download — about.ts:17
(anonymous function)
callWithDebugContext — core.js:15098
dispatchEvent — core.js:10004
(anonymous function) — platform-browser.js:2628
onInvokeTask — core.js:4751
runTask — polyfills.js:3:10845
invokeTask — polyfills.js:3:16802
p — polyfills.js:2:27655
v — polyfills.js:2:27895
```

We tried to add/remove the platform and it didn't changed anything.

On our main project the download function just don't do anything... can you confirm that the plugin work on your end ? 
