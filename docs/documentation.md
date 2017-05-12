<a name="module_express-app-runner"></a>

## express-app-runner
A ridiculously fast way to configure and run an express app.


* [express-app-runner](#module_express-app-runner)
    * [app](#exp_module_express-app-runner--app) : <code>Express</code> ⏏
    * [setIndexPage(filePath)](#exp_module_express-app-runner--setIndexPage) ⏏
    * [setStaticDir(dirPath)](#exp_module_express-app-runner--setStaticDir) ⏏
    * [run([options])](#exp_module_express-app-runner--run) ⇒ <code>http.Server</code> ⏏

<a name="exp_module_express-app-runner--app"></a>

### app : <code>Express</code> ⏏
The expression application.

**Kind**: Exported member
<a name="exp_module_express-app-runner--setIndexPage"></a>

### setIndexPage(filePath) ⏏
Defines a index page to be provided by '/'.

**Kind**: Exported function

| Param | Type |
| --- | --- |
| filePath | <code>string</code> |

<a name="exp_module_express-app-runner--setStaticDir"></a>

### setStaticDir(dirPath) ⏏
Makes the content of 'dirPath' directory available for the app

**Kind**: Exported function

| Param | Type |
| --- | --- |
| dirPath | <code>string</code> |

<a name="exp_module_express-app-runner--run"></a>

### run([options]) ⇒ <code>http.Server</code> ⏏
Runs the application.

**Kind**: Exported function

| Param | Type |
| --- | --- |
| [options] | <code>Object</code> |

**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options.port | <code>string</code> | <code>3000</code> | Application port |
| options.hostname | <code>string</code> | <code>&quot;localhost&quot;</code> | Application hostname |
| options.open | <code>string</code> | <code>true</code> | Defines whether or not the application should be open |
| options.showListeningLog | <code>string</code> | <code>true</code> | Defines whether or not it's to show a log after it successfully started listening to the app. |
| options.listeningCallback | <code>string</code> | <code>null</code> | Callback function to be called after it successfully started listening to the app. |